import { useFetchImages } from './reactQueryCustomHooks';
import { useGlobalContext } from './context';

export default function Gallery() {
  const { query } = useGlobalContext();
  const { data, isLoading, isError, error } = useFetchImages(query);

  return (
    <section>
      {isLoading && (
        <section className="image-container">
          <h4>Loading...</h4>
        </section>
      )}
      {isError && (
        <section className="image-container">
          <h4>Error: {error.message}</h4>
        </section>
      )}
      {/* Check if data exists and has results */}
      {data && data.length > 0 ? (
        <section className="image-container">
          {data.map((item) => (
            <img
              className="img"
              key={item?.id}
              src={item?.urls?.small} // ✅ Safe even if `item.urls` is undefined
              alt={item?.alt_description || 'Image'}
            />
          ))}
        </section>
      ) : (
        !isLoading && (
          <section className="image-container">
            <h4>No Results found</h4>
          </section>
        )
      )}
       
    </section>
  );
}
