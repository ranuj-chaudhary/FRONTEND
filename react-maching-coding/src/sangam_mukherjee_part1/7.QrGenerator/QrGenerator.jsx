import React from 'react';
import QRCode from 'react-qr-code';
const QrGenerator = ({ value, error, loading }) => {
  return (
    <div
      style={{
        height: 'auto',
        margin: '0 auto',
        maxWidth: '200px',
        width: '100%',
      }}
    >
      {!loading && error.length == 0 ? (
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={value}
          viewBox={`500 0 256 256`}
        />
      ) : null}
      {loading && <p>Loading...</p>}
      {error.length > 0 && <p>{error}</p>}
    </div>
  );
};

export default QrGenerator;
