
import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import { useGlobalContext } from './context';

const App = () => {
  const { query } = useGlobalContext();

  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      {query && <Gallery />} {/* Render Gallery only when query is not empty */}
    </main>
  );
};

export default App;
