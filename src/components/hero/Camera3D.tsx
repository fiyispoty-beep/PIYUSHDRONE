import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { HeroFallback } from './HeroFallback';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Camera3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. WebGL Support Verification
    let glContext: WebGLRenderingContext | null = null;
    try {
      const testCanvas = document.createElement('canvas');
      glContext = (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')) as WebGLRenderingContext;
      if (!glContext) {
        setHasWebGlError(true);
        return;
      }
    } catch {
      setHasWebGlError(true);
      return;
    }

    // 2. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 4.6);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGlError(true);
      return;
    }

    const isMobile = window.innerWidth < 768;
    const maxDpr = isMobile ? 1.5 : Math.min(window.devicePixelRatio, 2.0);
    renderer.setPixelRatio(maxDpr);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Clean container before appending
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. Lighting (Three-Point Luxury Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff1cf, 2.8); // Warm champagne key
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xd4af37, 3.2); // Sharp gold rim
    rimLight.position.set(-3.5, 2.5, -2.5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x7090b0, 0.9); // Cool gentle fill
    fillLight.position.set(-2, -1, 3);
    scene.add(fillLight);

    // 4. Procedural Camera Root Group
    const cameraRig = new THREE.Group();
    scene.add(cameraRig);

    const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];

    // Helper material creation
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.22,
    });
    const darkBodyMat = new THREE.MeshStandardMaterial({
      color: 0x161616,
      metalness: 0.75,
      roughness: 0.35,
    });
    const leatherMat = new THREE.MeshStandardMaterial({
      color: 0x0c0c0c,
      metalness: 0.15,
      roughness: 0.88,
    });
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xe8e8e8,
      metalness: 0.95,
      roughness: 0.1,
    });
    const glassLensMat = new THREE.MeshPhysicalMaterial({
      color: 0x08101a,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.4,
      ior: 1.52,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });

    disposables.push(goldMat, darkBodyMat, leatherMat, chromeMat, glassLensMat);

    // A. Main Camera Body
    const bodyGeo = new THREE.BoxGeometry(2.1, 1.25, 0.75);
    const bodyMesh = new THREE.Mesh(bodyGeo, darkBodyMat);
    disposables.push(bodyGeo);
    cameraRig.add(bodyMesh);

    // B. Leatherette Textured Grips
    const gripGeo = new THREE.BoxGeometry(2.12, 0.8, 0.77);
    const gripMesh = new THREE.Mesh(gripGeo, leatherMat);
    disposables.push(gripGeo);
    cameraRig.add(gripMesh);

    // C. Champagne Gold Top Plate
    const topPlateGeo = new THREE.BoxGeometry(2.11, 0.22, 0.76);
    const topPlateMesh = new THREE.Mesh(topPlateGeo, goldMat);
    topPlateMesh.position.y = 0.58;
    disposables.push(topPlateGeo);
    cameraRig.add(topPlateMesh);

    // D. Viewfinder Housing
    const vfGeo = new THREE.BoxGeometry(0.42, 0.28, 0.5);
    const vfMesh = new THREE.Mesh(vfGeo, darkBodyMat);
    vfMesh.position.set(-0.55, 0.74, 0.05);
    disposables.push(vfGeo);
    cameraRig.add(vfMesh);

    // E. Shutter & Mode Dials (Top Plate Details)
    const dial1Geo = new THREE.CylinderGeometry(0.18, 0.18, 0.18, 24);
    const dial1 = new THREE.Mesh(dial1Geo, goldMat);
    dial1.position.set(0.68, 0.74, 0.08);
    disposables.push(dial1Geo);
    cameraRig.add(dial1);

    const shutterGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.16, 24);
    const shutter = new THREE.Mesh(shutterGeo, chromeMat);
    shutter.position.set(0.32, 0.74, 0.12);
    disposables.push(shutterGeo);
    cameraRig.add(shutter);

    // F. Lens Barrel (Concentric Cylindrical Stages)
    const lensBaseGeo = new THREE.CylinderGeometry(0.64, 0.68, 0.22, 36);
    const lensBase = new THREE.Mesh(lensBaseGeo, darkBodyMat);
    lensBase.rotation.x = Math.PI / 2;
    lensBase.position.set(0.1, -0.05, 0.46);
    disposables.push(lensBaseGeo);
    cameraRig.add(lensBase);

    // Gold accent aperture ring
    const goldRingGeo = new THREE.TorusGeometry(0.63, 0.024, 16, 36);
    const goldRing = new THREE.Mesh(goldRingGeo, goldMat);
    goldRing.position.set(0.1, -0.05, 0.57);
    disposables.push(goldRingGeo);
    cameraRig.add(goldRing);

    // Middle lens barrel
    const lensMidGeo = new THREE.CylinderGeometry(0.58, 0.62, 0.36, 36);
    const lensMid = new THREE.Mesh(lensMidGeo, darkBodyMat);
    lensMid.rotation.x = Math.PI / 2;
    lensMid.position.set(0.1, -0.05, 0.72);
    disposables.push(lensMidGeo);
    cameraRig.add(lensMid);

    // Front knurled focus ring
    const focusRingGeo = new THREE.TorusGeometry(0.58, 0.02, 16, 36);
    const focusRing = new THREE.Mesh(focusRingGeo, goldMat);
    focusRing.position.set(0.1, -0.05, 0.88);
    disposables.push(focusRingGeo);
    cameraRig.add(focusRing);

    // Optical Glass Front Element (Curved lens)
    const glassGeo = new THREE.SphereGeometry(0.52, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const glass = new THREE.Mesh(glassGeo, glassLensMat);
    glass.position.set(0.1, -0.05, 0.82);
    disposables.push(glassGeo);
    cameraRig.add(glass);

    // 5. Glowing Orbital Rings
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    const ring1Geo = new THREE.TorusGeometry(1.85, 0.016, 16, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 6;
    disposables.push(ring1Geo, ring1Mat);
    orbitalGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.15, 0.012, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xf3e5ab });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    disposables.push(ring2Geo, ring2Mat);
    orbitalGroup.add(ring2);

    // 6. Gold Ambient Stardust Particles
    const particleCount = isMobile ? 30 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const r = 1.6 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      particlePos[i] = r * Math.cos(theta) * Math.cos(phi);
      particlePos[i + 1] = r * Math.sin(phi);
      particlePos[i + 2] = r * Math.sin(theta) * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    disposables.push(particleGeo, particleMat);
    orbitalGroup.add(particles);

    // Initial beauty pose
    cameraRig.rotation.y = -0.32;
    cameraRig.rotation.x = 0.12;

    // 7. Interactive Parallax and Pointer Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (reducedMotion) return;
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    // 8. Intersection Observer to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 9. Render Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      if (!reducedMotion) {
        // Floating bobbing effect
        cameraRig.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

        // Smooth damping towards pointer
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        cameraRig.rotation.y = -0.32 + currentX + Math.sin(elapsedTime * 0.4) * 0.06;
        cameraRig.rotation.x = 0.12 - currentY + Math.cos(elapsedTime * 0.4) * 0.04;

        // Orbital ring slow revolution
        ring1.rotation.z = elapsedTime * 0.15;
        ring2.rotation.y = -elapsedTime * 0.12;
        particles.rotation.y = elapsedTime * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 10. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 11. Cleanup and resource disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('resize', handleResize);

      disposables.forEach((item) => item.dispose());
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (hasWebGlError) {
    return <HeroFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] lg:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing focus:outline-none"
      aria-label="Interactive 3D procedural camera visualization floating with golden orbital rings"
      role="img"
    />
  );
};

export default Camera3D;
