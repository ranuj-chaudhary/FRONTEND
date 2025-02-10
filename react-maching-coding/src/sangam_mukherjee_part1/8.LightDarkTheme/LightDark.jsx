import './LightDark.css';
import useCurrentTheme from './useCurrentTheme';
const LightDarkTheme = () => {
  const [theme, setTheme] = useCurrentTheme('theme', 'dark');

  function handleChangeTheme() {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  }
  return (
    <div className="light-dark-theme" data-theme={theme}>
      <h1>{theme} theme</h1>
      <button className="btn btn--primary" onClick={handleChangeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default LightDarkTheme;
