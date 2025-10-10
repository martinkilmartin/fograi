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
  const { setTheme } = useNextTheme();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const modalHandler = () => setModalVisible(true);

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
          <img
            src="/img/nooze.svg"
            alt="Nooze Logo"
            className="h-16 w-auto"
          />
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
                  <button
                    onClick={() => {
                      setTheme('light');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light Mode
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setTheme('dark');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark Mode
                  </button>
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
            <button
              onClick={() => setTheme('light')}
              className="btn btn-ghost btn-circle btn-sm"
              title="Light Mode"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className="btn btn-ghost btn-circle btn-sm"
              title="Dark Mode"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
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
