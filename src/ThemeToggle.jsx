import { useGlobalContext } from './context';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const { toggleDarkTheme, isDarkTheme } = useGlobalContext();
  // console.log(isDarkTheme);

  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
