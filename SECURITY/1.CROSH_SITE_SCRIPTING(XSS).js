
// EXAMPLE 1

export default function () {
  return (
      <Router>
      <QueryParams />
    </Router>
  );
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// ExampleUrl: https://www.example.com/settings?redirect=javascript://dosomething

function QueryParamsDemo() {
  let query = useQuery();

  function validateURL(url) {
    const userSuppliedUrl = new URL(url);
    if (userSuppliedUrl.protocol === 'https:') {
      return url;
    }
    return '/';
}

return (
    <div>
      <h2>Return Home</h2>
      <a href={query.get('redirect')}>Click to go home</a>
      <a href={validateURL(query.get('redirect'))}>Click to go home</a>
    </div>
  );
}

