import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { enquirySchema, EnquiryFormData } from '../../config/schema';
import { siteConfig } from '../../config/site.config';
import { CheckCircle2, AlertCircle, Send, Mail, Phone, MessageSquare, Loader2 } from 'lucide-react';

interface EnquiryFormProps {
  initialPackageId?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialPackageId }) => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      shootType: siteConfig.categories[0]?.id || 'weddings',
      package: initialPackageId || siteConfig.packages[0]?.id || 'signature',
      date: '',
      location: '',
      message: '',
      consent: false,
      botField: '',
    },
  });

  useEffect(() => {
    if (initialPackageId) {
      setValue('package', initialPackageId);
    }
  }, [initialPackageId, setValue]);

  const onSubmit = async (data: EnquiryFormData) => {
    // Honeypot check
    if (data.botField && data.botField.length > 0) {
      console.warn('Spam honeypot triggered.');
      return;
    }

    setSubmissionStatus('loading');
    setStatusMessage('');

    try {
      // In local dev/preview, simulated demonstration mode
      const isNetlify = typeof window !== 'undefined' && window.location.hostname.includes('netlify.app');

      if (isNetlify) {
        // Real Netlify Forms submission
        const formData = new URLSearchParams();
        formData.append('form-name', 'photography-enquiry');
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone || '');
        formData.append('shootType', data.shootType);
        formData.append('package', data.package);
        formData.append('date', data.date || '');
        formData.append('location', data.location || '');
        formData.append('message', data.message);

        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
        });

        if (!res.ok) {
          throw new Error(`Netlify form error: status ${res.status}`);
        }

        setSubmissionStatus('success');
        setStatusMessage('Your enquiry has been received. Piyush Bhendarkar will review your dates and connect with you shortly.');
        reset();
      } else {
        // Simulation mode with logging
        console.info('=== [DEMO MODE: Form Submission Simulated] ===', data);
        await new Promise((resolve) => setTimeout(resolve, 800)); // Realistic network delay

        setSubmissionStatus('success');
        setStatusMessage('Demo Mode: Submission simulated successfully! Check console for form payload. Piyush Bhendarkar will review your dates.');
        reset();
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmissionStatus('error');
      setStatusMessage('We were unable to process your enquiry. Please reach out directly via email or WhatsApp below.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Context & Direct Contact */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Begin The Narrative
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-medium text-[#f4efe6] leading-tight">
              Reserve Your <br />
              <span className="italic font-serif text-[#f3e5ab]">Special Date.</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#a39e93] font-sans font-light leading-relaxed">
              We take on a limited number of weddings and editorial commissions each season to ensure uncompromising artistic dedication.
            </p>

            {/* Demo Notice */}
            <div className="mt-6 p-4 rounded-xl bg-[#121212] border border-[#d4af37]/25 text-xs text-[#a39e93]">
              <strong className="text-[#d4af37]">Configuration Note:</strong> {siteConfig.contact.demoNote}. The form works out-of-the-box in demo mode or connects automatically to Netlify Forms.
            </div>
          </div>

          {/* Secondary Direct Channels */}
          <div className="mt-10 pt-8 border-t border-[#d4af37]/20 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Instant Contact Channels
            </span>

            <div className="flex flex-col sm:flex-row gap-3">
              {siteConfig.contact.whatsapp && (
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded bg-[#161616] hover:bg-[#1f1f1f] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-medium text-[#f4efe6] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Message</span>
                </a>
              )}

              {siteConfig.contact.email && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="py-3 px-4 rounded bg-[#161616] hover:bg-[#1f1f1f] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-medium text-[#f4efe6] transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span>Send Direct Email</span>
                </a>
              )}

              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded bg-[#161616] hover:bg-[#1f1f1f] border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-medium text-[#f4efe6] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call Studio</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-[#121212] border border-[#d4af37]/25 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {submissionStatus === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#f4efe6] mb-3">
                Enquiry Received
              </h3>
              <p className="text-sm text-[#a39e93] max-w-md mb-8 leading-relaxed">
                {statusMessage}
              </p>
              <button
                onClick={() => setSubmissionStatus('idle')}
                className="py-3 px-8 rounded bg-[#d4af37] text-black text-xs uppercase font-semibold tracking-widest hover:bg-[#e4be4b] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
              {/* Honeypot field for spam prevention */}
              <input
                type="text"
                {...register('botField')}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {submissionStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-200 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Ananya Sharma"
                    {...register('name')}
                    className={`w-full bg-[#181818] border rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#736f66] focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all ${
                      errors.name ? 'border-red-500' : 'border-[#d4af37]/20 focus:border-[#d4af37]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ananya@example.com"
                    {...register('email')}
                    className={`w-full bg-[#181818] border rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#736f66] focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#d4af37]/20 focus:border-[#d4af37]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone & Preferred Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register('phone')}
                    className="w-full bg-[#181818] border border-[#d4af37]/20 rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#736f66] focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                    Estimated Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    {...register('date')}
                    className="w-full bg-[#181818] border border-[#d4af37]/20 rounded-lg px-4 py-3 text-sm text-[#f4efe6] focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  />
                </div>
              </div>

              {/* Shoot Type & Package Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="shootType" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                    Category of Shoot *
                  </label>
                  <select
                    id="shootType"
                    {...register('shootType')}
                    className="w-full bg-[#181818] border border-[#d4af37]/20 rounded-lg px-4 py-3 text-sm text-[#f4efe6] focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  >
                    {siteConfig.categories.map((cat) => (
                      <option key={cat.id} value={cat.id} className="bg-[#181818] text-[#f4efe6]">
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="package" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                    Desired Package *
                  </label>
                  <select
                    id="package"
                    {...register('package')}
                    className="w-full bg-[#181818] border border-[#d4af37]/20 rounded-lg px-4 py-3 text-sm text-[#f4efe6] focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                  >
                    {siteConfig.packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id} className="bg-[#181818] text-[#f4efe6]">
                        {pkg.name} ({pkg.price})
                      </option>
                    ))}
                    <option value="custom" className="bg-[#181818] text-[#f4efe6]">
                      Custom Commission / Bespoke
                    </option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                  Event Location / City (Optional)
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Udaipur, Mumbai, Nagpur, or Destination"
                  {...register('location')}
                  className="w-full bg-[#181818] border border-[#d4af37]/20 rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#736f66] focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                  Tell Us About Your Vision *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share details regarding your celebration itinerary, aesthetic preferences, or specific moments you want captured..."
                  {...register('message')}
                  className={`w-full bg-[#181818] border rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#736f66] focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all resize-y ${
                    errors.message ? 'border-red-500' : 'border-[#d4af37]/20 focus:border-[#d4af37]'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Consent checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('consent')}
                    className="mt-1 w-4 h-4 rounded bg-[#181818] border border-[#d4af37]/40 text-[#d4af37] focus:ring-[#d4af37] focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs text-[#a39e93] leading-relaxed">
                    I understand this is an enquiry submission and agree to receive correspondence regarding this booking request per the{' '}
                    <a href="/privacy" className="underline hover:text-white transition-colors">
                      Privacy Policy template
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submissionStatus === 'loading'}
                  className="w-full py-4 px-8 rounded bg-[#d4af37] hover:bg-[#e4be4b] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-[#d4af37]/20 disabled:opacity-50 cursor-pointer active:scale-[0.99]"
                >
                  {submissionStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Photoshoot Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
