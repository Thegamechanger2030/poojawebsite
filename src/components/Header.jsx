import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', tab: 'home' },
  { label: 'Pooja', tab: 'pooja', target: 'pooja-section-root' },
  { label: 'Panchang', tab: 'panchang', target: 'panchang-section' },
  { label: 'Gallery', tab: 'home', target: 'gallery-section' },
  { label: 'Articles', tab: 'shop', target: 'shop-section' },
  { label: 'Kundali', tab: 'home', target: 'kundali-section' },
  { label: 'Contact', tab: 'home', target: 'contact-section' }
];

function SwastikMark() {
  return (
    <span
      aria-hidden="true"
      className="bhakti-swastik"
    >
      卐
    </span>
  );
}

export default function Header({
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenPartnerModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedNavigation, setSelectedNavigation] = useState('Home');

  const handleNavClick = (event, tabId, elementId, label) => {
    event?.preventDefault();
    setActiveTab(tabId);
    setSelectedNavigation(label);
    if (elementId) {
      let attempts = 0;
      const scrollToTarget = () => {
        const target = document.getElementById(elementId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        attempts += 1;
        if (attempts < 60) {
          window.requestAnimationFrame(scrollToTarget);
        } else {
          console.error(`Navigation target "${elementId}" was not found.`);
        }
      };

      window.requestAnimationFrame(scrollToTarget);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (label) => selectedNavigation === label;
  const desktopLinkClass = (label) => `relative inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-[#a83200] hover:shadow-sm ${
    isActive(label)
      ? 'scale-[1.03] bg-gradient-to-r from-[#d84d08] to-[#b83305] text-white shadow-md'
      : 'text-[#482923] hover:bg-[#fff0d8]'
  }`;
  const mobileLinkClass = (label) => `flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 hover:translate-x-1 ${
    isActive(label)
      ? 'bg-gradient-to-r from-[#d84d08] to-[#b83305] text-white shadow-sm'
      : 'text-[#482923] hover:bg-[#fff0d8] hover:text-[#a83200]'
  }`;

  return (
    <header className="sticky top-0 z-50 border-b border-amber-300/70 bg-[#f7eedf]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          className="group flex min-w-0 items-center gap-3 text-left"
          onClick={(event) => handleNavClick(event, 'home', null, 'Home')}
          aria-label="Maa Rajrajeshwari Pooja home"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-500/70 bg-gradient-to-br from-amber-50 to-yellow-100 font-serif text-lg font-black text-[#7b1e1b] shadow-sm transition duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-12 sm:w-12">
            श्री
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-base font-bold leading-tight text-[#741b1b] sm:text-xl">
              Maa Rajrajeshwari Pooja
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold tracking-[0.16em] text-amber-800 sm:text-[11px]">
              भक्ति · सेवा · श्रद्धा
            </span>
          </span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 rounded-full border border-amber-300/80 bg-[#f5ead8]/95 p-1 shadow-sm xl:flex">
          {NAV_ITEMS.map(({ label, tab, target }) => (
            target ? (
              <a
                key={label}
                href={`#${target}`}
                aria-current={isActive(label) ? 'location' : undefined}
                onClick={(event) => handleNavClick(event, tab, target, label)}
                className={desktopLinkClass(label)}
              >
                {label}
              </a>
            ) : (
              <button
                key={label}
                type="button"
                aria-current={isActive(label) ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, tab, null, label)}
                className={desktopLinkClass(label)}
              >
                {label}
              </button>
            )
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenCart}
            className="relative rounded-full p-2.5 text-[#741b1b] transition-all duration-300 hover:bg-amber-100 hover:shadow-sm"
            aria-label={`View cart${cartCount > 0 ? `, ${cartCount} items` : ''}`}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#fffaf0] bg-amber-400 px-1 text-[10px] font-extrabold text-amber-950">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-xl border border-amber-300/80 bg-white/70 p-2 text-[#741b1b] transition-colors hover:bg-amber-100 xl:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className="bhakti-marquee py-2"
        role="region"
        aria-label="भक्ति संदेश"
      >
        <div className="bhakti-marquee__track">
          <span className="bhakti-marquee__message">
            <SwastikMark />
            <span>॥ जय गौ माता</span>
            <span className="text-amber-600">•</span>
            <span>जय गोपाल</span>
            <span className="text-amber-600">•</span>
            <span>जय महामायी ॥</span>
            <SwastikMark />
          </span>
        </div>
        <span className="sr-only">॥ जय गौ माता • जय गोपाल • जय महामायी ॥</span>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="animate-menu-in border-t border-amber-300/80 bg-[#f7eedf] px-4 py-3 shadow-lg xl:hidden"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-1 sm:grid-cols-2">
            {NAV_ITEMS.map(({ label, tab, target }) => (
              target ? (
                <a
                  key={label}
                  href={`#${target}`}
                  aria-current={isActive(label) ? 'location' : undefined}
                  onClick={(event) => handleNavClick(event, tab, target, label)}
                  className={mobileLinkClass(label)}
                >
                  {label}
                </a>
              ) : (
                <button
                  key={label}
                  type="button"
                  onClick={(event) => handleNavClick(event, tab, null, label)}
                  className={mobileLinkClass(label)}
                >
                  {label}
                </button>
              )
            ))}
            <button
              type="button"
              onClick={() => {
                onOpenPartnerModal();
                setMobileMenuOpen(false);
              }}
              className="rounded-xl bg-gradient-to-r from-[#d84d08] to-[#b83305] px-4 py-3 text-left text-sm font-bold text-white shadow-sm transition hover:brightness-105 sm:col-span-2"
            >
              Pandit / Astrologer Partner
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
