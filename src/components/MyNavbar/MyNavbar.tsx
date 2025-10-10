import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes';
import Search from '@components/SVG/Search';
import Filter from '@components/SVG/Filter';
import Countries from '@components/Filters/Countries';
import Sources from '@components/Filters/Sources';
import MediaTypes from '@components/Filters/MediaTypes';
import Langs from '@components/Filters/Langs';

export default function MyNavbar(): JSX.Element {
  const { setTheme, theme } = useNextTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const modalHandler = () => setModalVisible(true);

  const themes = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
    "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel",
    "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business",
    "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"
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
    sunset: '#fef2f2'
  };

  return (
    <>
      <nav className="navbar bg-base-100 shadow-lg px-4">
        <div className="navbar-start">
          {/* Navigation menu button */}
          <div className="dropdown" style={{ zIndex: 50 }}>
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="/" onClick={(e) => { e.preventDefault(); router.push('/'); }}>Home</a></li>
              <li><a href="/countries" onClick={(e) => { e.preventDefault(); router.push('/countries'); }}>Countries</a></li>
              <li><a href="/sources" onClick={(e) => { e.preventDefault(); router.push('/sources'); }}>Sources</a></li>
              <li><a href="/bookmarks" onClick={(e) => { e.preventDefault(); router.push('/bookmarks'); }}>Bookmarks</a></li>
              <li><a href="/about" onClick={(e) => { e.preventDefault(); router.push('/about'); }}>About</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); router.push('/contact'); }}>Contact</a></li>
              <li><a href="/roadmap" onClick={(e) => { e.preventDefault(); router.push('/roadmap'); }}>Roadmap</a></li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <button onClick={() => router.push('/')} className="btn btn-ghost p-0">
            <img
              src="/img/nooze.svg"
              alt="Nooze Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </button>
        </div>

        <div className="navbar-end gap-2">
          {/* Mobile menu button - moved to right */}
          <div className="dropdown dropdown-end lg:hidden" style={{ zIndex: 50 }}>
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {mobileMenuOpen && (
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-48 max-h-64 overflow-y-auto ml-4">
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
              </ul>
            )}
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
              <button tabIndex={0} className="btn btn-ghost btn-circle btn-sm" title="Change Theme">
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
              onClick={modalHandler}
              className="btn btn-ghost btn-circle btn-sm"
              title="Filters"
            >
              <Filter width={16} height={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Filters Modal */}
      {modalVisible && (
        <div className="modal modal-open" style={{ zIndex: 100 }}>
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Filter News</h3>
            <div className="space-y-4">
              <Countries />
              <Sources />
              <MediaTypes />
              <Langs />
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
