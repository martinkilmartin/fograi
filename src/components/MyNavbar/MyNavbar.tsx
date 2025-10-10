import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { useTheme as useNextTheme } from 'next-themes';
import Image from "next/image";
import Countries from '@components/Filters/Countries';
import Sources from '@components/Filters/Sources';
import MediaTypes from '@components/Filters/MediaTypes';
import Langs from '@components/Filters/Langs';

export default function MyNavbar(): JSX.Element {
  const { setTheme } = useNextTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => setModalVisible(true);

  return (
    <nav style={{ padding: '16px', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1>FogRai</h1>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={modalHandler}>Filters</button>
      </div>

      {modalVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '600px',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <h2>Filters</h2>
            <Countries />
            <Sources />
            <MediaTypes />
            <Langs />
            <button onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}
