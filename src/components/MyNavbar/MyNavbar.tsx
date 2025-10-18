import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { COUNTRIES } from '@constants/COUNTRIES';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { LangsMap } from '@constants/LANGS';
import { getFlag } from '@lib/geo';
import { useTheme as useNextTheme } from 'next-themes';
import Search from '@components/SVG/Search';
import Filter from '@components/SVG/Filter';
import Countries from '@components/Filters/Countries';
import Sources from '@components/Filters/Sources';
import MediaTypes from '@components/Filters/MediaTypes';
import CardTypes, { CARD_TYPE_KEYS } from '@components/Filters/CardTypes';
import Langs from '@components/Filters/Langs';

export default function MyNavbar(): JSX.Element {
  const { setTheme, theme } = useNextTheme();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [cardModalVisible, setCardModalVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countriesKey, setCountriesKey] = useState(0);
  const [sourcesKey, setSourcesKey] = useState(0);
  const [mediaKey, setMediaKey] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const [langsKey, setLangsKey] = useState(0);
  const selectAllCountries = () => {
    try { localStorage.setItem('likedCountries', JSON.stringify(Array.from(COUNTRIES.keys()))); } catch (_e) { /* noop */ }
    setCountriesKey((k) => k + 1);
  };

  // Rotating icons for section headers
  const mediaIcons = useMemo(() => ['📰', '📹', '🔊'], []);
  const langIcons = useMemo(
    () => Array.from(LangsMap.values()).map((v) => v.icon).filter(Boolean),
    []
  );
  const nationIcons = useMemo(
    () => Array.from(COUNTRIES.keys()).map((code) => {
      const iso2 = code === 'oz' ? 'AU' : String(code).toUpperCase();
      return getFlag(iso2);
    }).filter(Boolean),
    []
  );
  const outletIcons = useMemo(() => ['🗞️', '📰', '🧾'], []);

  const [mediaIcon, setMediaIcon] = useState(mediaIcons[0]);
  const [langIcon, setLangIcon] = useState(langIcons[0]);
  const [nationIcon, setNationIcon] = useState(nationIcons[0]);
  const [outletIcon, setOutletIcon] = useState(outletIcons[0]);

  useEffect(() => {
    const makeCycler = <T,>(
      arr: T[],
      setter: React.Dispatch<React.SetStateAction<T>>,
      intervalMs: number,
      startIdx = 0
    ) => {
      let i = startIdx;
      return setInterval(() => {
        i = (i + 1) % arr.length;
        setter(arr[i]);
      }, intervalMs);
    };
    const t1 = makeCycler(mediaIcons, setMediaIcon, 1600);
    const t2 = makeCycler(langIcons, setLangIcon, 1700, 1);
    const t3 = makeCycler(nationIcons, setNationIcon, 1800, 2);
    const t4 = makeCycler(outletIcons, setOutletIcon, 1900, 1);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
      clearInterval(t4);
    };
  }, [langIcons, mediaIcons, nationIcons, outletIcons]);
  const clearAllCountries = () => {
    try { localStorage.setItem('likedCountries', JSON.stringify([])); } catch (_e) { /* noop */ }
    setCountriesKey((k) => k + 1);
  };
  const selectAllSources = () => {
    try { localStorage.setItem('likedSources', JSON.stringify(Array.from(AllNewsSources.keys()))); } catch (_e) { /* noop */ }
    setSourcesKey((k) => k + 1);
  };
  const clearAllSources = () => {
    try { localStorage.setItem('likedSources', JSON.stringify([])); } catch (_e) { /* noop */ }
    setSourcesKey((k) => k + 1);
  };
  const selectAllMedia = () => {
    try { localStorage.setItem('likedMediaTypes', JSON.stringify(['article', 'video', 'audio'])); } catch (_e) { /* noop */ }
    setMediaKey((k) => k + 1);
  };
  const clearAllMedia = () => {
    try { localStorage.setItem('likedMediaTypes', JSON.stringify([])); } catch (_e) { /* noop */ }
    setMediaKey((k) => k + 1);
  };
  const selectAllCardTypes = () => {
    try {
      localStorage.setItem('selectedCardTypes', JSON.stringify(CARD_TYPE_KEYS));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('selectedCardTypesChange'));
      }
    } catch (_e) { /* noop */ }
    setCardKey((k) => k + 1);
  };
  const clearAllCardTypes = () => {
    try {
      localStorage.setItem('selectedCardTypes', JSON.stringify([CARD_TYPE_KEYS[0]]));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('selectedCardTypesChange'));
      }
    } catch (_e) { /* noop */ }
    setCardKey((k) => k + 1);
  };
  const selectAllLangs = () => {
    try { localStorage.setItem('likedLanguages', JSON.stringify(Array.from(LangsMap.keys()))); } catch (_e) { /* noop */ }
    setLangsKey((k) => k + 1);
  };
  const clearAllLangs = () => {
    try { localStorage.setItem('likedLanguages', JSON.stringify([])); } catch (_e) { /* noop */ }
    setLangsKey((k) => k + 1);
  };
  const modalRef = useRef<HTMLDivElement>(null);
  const modalHandler = () => setModalVisible(true);
  const cardModalRef = useRef<HTMLDivElement>(null);
  const openCardModal = () => setCardModalVisible(true);

  // Handle modal close on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalVisible(false);
      }
      if (cardModalRef.current && !cardModalRef.current.contains(event.target as Node)) {
        setCardModalVisible(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalVisible(false);
        setCardModalVisible(false);
      }
    };

    if (modalVisible || cardModalVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [modalVisible, cardModalVisible]);

  const themes = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
    "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel",
    "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business",
    "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset", "caramellatte",
    "abyss", "silk"
  ];

  // Color mapping for theme swatches
  const themeColors: Record<string, string> = {
    light: '#ffffff',
    dark: '#1f2937',
    cupcake: '#faf7f5',
    bumblebee: '#fffbed',
    emerald: '#ecfdf5',
    corporate: '#ffffff',
    synthwave: '#2a0e4e',
    retro: '#ffe4c4',
    cyberpunk: '#0d001a',
    valentine: '#fff5f5',
    halloween: '#2d1b1b',
    garden: '#f0fdf4',
    forest: '#f0fdf4',
    aqua: '#ecfeff',
    lofi: '#ffffff',
    pastel: '#fef7ff',
    fantasy: '#fff7ed',
    wireframe: '#ffffff',
    black: '#000000',
    luxury: '#09090b',
    dracula: '#282a36',
    cmyk: '#ffffff',
    autumn: '#fef3c7',
    business: '#ffffff',
    acid: '#f0fdf4',
    lemonade: '#fefce8',
    night: '#0f0f23',
    coffee: '#382e2d',
    winter: '#e0f2fe',
    dim: '#2a2e37',
    nord: '#2e3440',
    sunset: '#fef2f2',
    caramellatte: '#2c1810',
    abyss: '#0f0f23',
    silk: '#e9e9f8'
  };

  return (
    <>
      <nav className="navbar bg-base-100 shadow-lg px-4">
        <div className="navbar-start">
          {/* Navigation menu button */}
          <div className="dropdown" style={{ zIndex: 50 }}>
            <button tabIndex={0} className="btn btn-outline btn-circle">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/bookmarks">Bookmarks</Link></li>
              <li><Link href="/countries">Countries</Link></li>
              <li><Link href="/sources">Sources</Link></li>
              <li><Link href="/roadmap">Roadmap</Link></li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <button onClick={() => router.push('/')} className="btn btn-ghost p-0">
            <Image
              src="/img/nooze.svg"
              alt="Nooze Logo"
              width={160}
              height={64}
              className="h-16 w-auto cursor-pointer"
              priority
            />
          </button>
        </div>

        <div className="navbar-end gap-2">
          {/* Mobile menu button - moved to right */}
          <div className={`dropdown dropdown-end lg:hidden ${mobileMenuOpen ? 'dropdown-open' : ''}`} style={{ zIndex: 1001 }}>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="btn btn-outline btn-circle"
              title="Menu"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 ${mobileMenuOpen ? 'block' : 'hidden'}`} style={{ zIndex: 1002 }}>
              <li className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchTerm.trim()) {
                        router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="input input-bordered input-sm w-full pl-8 pr-4"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Search width={16} height={16} />
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <button tabIndex={0} className="flex items-center gap-2 w-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                    Theme: {theme}
                  </button>
                  <ul tabIndex={0} className="dropdown-content z-[1002] p-2 shadow-2xl bg-base-100 rounded-box w-48 max-h-64 overflow-y-auto ml-4">
                    {themes.map((themeName) => (
                      <li key={themeName}>
                        <button
                          onClick={() => {
                            setTheme(themeName);
                            setMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-2 w-full text-left capitalize ${theme === themeName ? 'bg-primary text-primary-content' : ''}`}
                        >
                          <div className={`w-3 h-3 rounded-full border border-base-content ${theme === themeName ? 'ring-1 ring-primary' : ''}`}
                            style={{ backgroundColor: themeColors[themeName] || '#666' }}>
                          </div>
                          {themeName}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={() => {
                    modalHandler();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <Filter width={16} height={16} />
                  Filters
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    openCardModal();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  🃏
                  Card Styles
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop search and buttons - hidden on mobile */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchTerm.trim()) {
                    router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
                  }
                }}
                className="input input-bordered input-sm w-48 pl-8 pr-4"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Search width={16} height={16} />
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-outline btn-circle btn-sm" title="Change Theme">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </button>
              <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 max-h-64 overflow-y-auto">
                {themes.map((themeName) => (
                  <li key={themeName}>
                    <button
                      onClick={() => setTheme(themeName)}
                      className={`flex items-center gap-2 w-full text-left capitalize ${theme === themeName ? 'bg-primary text-primary-content' : ''}`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 border-base-content ${theme === themeName ? 'ring-2 ring-primary' : ''}`}
                        style={{ backgroundColor: themeColors[themeName] || '#666' }}>
                      </div>
                      {themeName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={openCardModal}
              className="btn btn-outline btn-circle btn-sm"
              title="Choose card styles"
            >
              🃏
            </button>
            <button
              onClick={modalHandler}
              className="btn btn-outline btn-circle btn-sm"
              title="Filters"
            >
              <Filter width={16} height={16} />
            </button>
          </div>
        </div>
      </nav>
      {/* Enhanced Filters Modal */}
      {modalVisible && (
        <div className="modal modal-open z-[1000]">
          <div
            ref={modalRef}
            className="modal-box max-w-6xl w-[calc(100vw-1.5rem)] sm:w-full mx-2 sm:mx-4 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-base-300 gap-3">
              <div className="flex items-center gap-3">
                <Filter width={24} height={24} />
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <h3 className="font-bold text-xl whitespace-nowrap">Filter News</h3>
                <button
                  className="btn btn-xs btn-outline"
                  onClick={() => {
                    selectAllCountries();
                    selectAllSources();
                    selectAllMedia();
                    selectAllLangs();
                  }}
                >
                  Select all
                </button>
                <button
                  className="btn btn-xs"
                  onClick={() => {
                    clearAllCountries();
                    clearAllSources();
                    clearAllMedia();
                    clearAllLangs();
                  }}
                >
                  Clear all
                </button>
              </div>
              <button
                onClick={() => setModalVisible(false)}
                className="btn btn-sm btn-ghost btn-circle"
                aria-label="Close filters"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content - Responsive Grid Layout */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Media Types Section */}
                {/* Mobile: collapse */}
                <div className="lg:hidden">
                  <div className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" defaultChecked />
                    <div className="collapse-title flex items-center justify-between">
                      <span className="text-lg font-semibold">{mediaIcon} Media</span>
                      <div className="hidden" />
                    </div>
                    <div className="collapse-content">
                      <div className="max-h-80 overflow-y-auto">
                        <MediaTypes key={mediaKey} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop: expanded */}
                <div className="hidden lg:block space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-nowrap pb-2 border-b border-base-300">
                    <span className="text-lg font-semibold whitespace-nowrap truncate max-w-[60%]">{mediaIcon} Media</span>
                    <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
                      <button className="btn btn-xs btn-outline" onClick={selectAllMedia}>Select all</button>
                      <button className="btn btn-xs" onClick={clearAllMedia}>Clear all</button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <MediaTypes key={mediaKey} />
                  </div>
                </div>

                {/* Languages Section */}
                {/* Mobile: collapse */}
                <div className="lg:hidden">
                  <div className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" defaultChecked />
                    <div className="collapse-title flex items-center justify-between">
                      <span className="text-lg font-semibold">{langIcon} Langs</span>
                      <div className="hidden" />
                    </div>
                    <div className="collapse-content">
                      <div className="max-h-80 overflow-y-auto">
                        <Langs key={langsKey} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop: expanded */}
                <div className="hidden lg:block space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-nowrap pb-2 border-b border-base-300">
                    <span className="text-lg font-semibold whitespace-nowrap truncate max-w-[60%]">{langIcon} Langs</span>
                    <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
                      <button className="btn btn-xs btn-outline" onClick={selectAllLangs}>Select all</button>
                      <button className="btn btn-xs" onClick={clearAllLangs}>Clear all</button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <Langs key={langsKey} />
                  </div>
                </div>

                {/* Countries Section */}
                {/* Mobile: collapse */}
                <div className="lg:hidden">
                  <div className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" defaultChecked />
                    <div className="collapse-title flex items-center justify-between">
                      <span className="text-lg font-semibold">{nationIcon} Nations</span>
                      <div className="hidden" />
                    </div>
                    <div className="collapse-content">
                      <div className="max-h-80 overflow-y-auto">
                        <Countries key={countriesKey} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop: expanded */}
                <div className="hidden lg:block space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-base-300">
                    <span className="text-lg font-semibold">{nationIcon} Countries</span>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-xs btn-outline" onClick={selectAllCountries}>Select all</button>
                      <button className="btn btn-xs" onClick={clearAllCountries}>Clear all</button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <Countries key={countriesKey} />
                  </div>
                </div>

                {/* Sources Section */}
                {/* Mobile: collapse */}
                <div className="lg:hidden">
                  <div className="collapse collapse-arrow border border-base-300 bg-base-100">
                    <input type="checkbox" defaultChecked />
                    <div className="collapse-title flex items-center justify-between">
                      <span className="text-lg font-semibold">{outletIcon} Outlets</span>
                      <div className="hidden" />
                    </div>
                    <div className="collapse-content">
                      <div className="max-h-80 overflow-y-auto">
                        <Sources key={sourcesKey} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Desktop: expanded */}
                <div className="hidden lg:block space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-base-300">
                    <span className="text-lg font-semibold">{outletIcon} Sources</span>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-xs btn-outline" onClick={selectAllSources}>Select all</button>
                      <button className="btn btn-xs" onClick={clearAllSources}>Clear all</button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    <Sources key={sourcesKey} />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="modal-action mt-6 pt-4 border-t border-base-300">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setModalVisible(false);
                    // Refresh headlines with updated filters
                    queryClient.removeQueries('headlines');
                    router.replace(router.asPath);
                  }}
                  className="btn btn-primary flex-1 sm:flex-none"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => setModalVisible(false)}
                  className="btn btn-ghost flex-1 sm:flex-none"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {cardModalVisible && (
        <div className="modal modal-open z-[1000]">
          <div
            ref={cardModalRef}
            className="modal-box max-w-3xl w-[calc(100vw-1.5rem)] sm:w-full mx-2 sm:mx-4 max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-base-300">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span>🃏</span>
                <span>Headline Cards</span>
              </h3>
              <div className="flex items-center gap-2">
                <button className="btn btn-xs btn-outline" onClick={selectAllCardTypes}>Select all</button>
                <button className="btn btn-xs" onClick={clearAllCardTypes}>Reset</button>
                <button
                  onClick={() => setCardModalVisible(false)}
                  className="btn btn-sm btn-ghost btn-circle"
                  aria-label="Close card settings"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                <CardTypes key={cardKey} />
              </div>
            </div>
            <div className="modal-action mt-6 pt-4 border-t border-base-300">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setCardModalVisible(false)}
                  className="btn btn-primary flex-1 sm:flex-none"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
