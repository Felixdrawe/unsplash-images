import { useState } from 'react';
import { useGlobalContext } from './context';

export default function SearchForm() {
  const { setQuery } = useGlobalContext();
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;

    setQuery(img); // Trigger the query
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cat"
          className="form-input search-input"
          name="search"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}
