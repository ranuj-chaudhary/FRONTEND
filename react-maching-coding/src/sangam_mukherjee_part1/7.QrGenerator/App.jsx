import { useEffect, useState } from 'react';
import './App.css';
import QrGenerator from './sangam_mukherjee_part1/7.QrGenerator/QrGenerator';
function App() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    (async function fetchPaymentUrl() {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('url', { method: 'GET' });
        if (!res.ok) {
          throw new Error('Problem fetching url');
        }
        const paymentLink = await res.json();
        if (paymentLink && value !== paymentLink) {
          setValue(paymentLink);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [value]);
  return (
    <div className="app">
      <div className="app">
        <QrGenerator
          value="http://localhost:3000/"
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
