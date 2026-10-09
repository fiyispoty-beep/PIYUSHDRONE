import React, { useState } from 'react';
import { siteConfig } from '../../config/site.config';
import { X, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (!siteConfig.announcement.enabled || dismissed) return null;

  return (
    <aside aria-label="Demo Announcement" className="relative z-50 bg-[#121212] border-b border-[#d4af37]/25 text-xs text-[#f3e5ab] py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-ellipsis whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" aria-hidden="true" />
          <span className="font-medium tracking-wide">
            {siteConfig.announcement.text}
          </span>
          {siteConfig.announcement.linkText && (
            <a
              href={siteConfig.announcement.linkUrl}
              className="underline underline-offset-2 hover:text-white transition-colors ml-1 font-semibold shrink-0"
            >
              {siteConfig.announcement.linkText}
            </a>
          )}
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 hover:text-white text-[#d4af37] transition-colors rounded hover:bg-white/5 shrink-0"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
