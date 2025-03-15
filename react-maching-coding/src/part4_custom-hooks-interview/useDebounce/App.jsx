import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

function App() {
  const [query, setQuery] = useState('');
  const debounceQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debounceQuery) {
      // api call for search
    }
  }, [debounceQuery]);

  return (
    <div className="app">
      <div className="app">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
