import "../styles/components/FeaturedData.css";

export function FeaturedData({ city }) {
  return (
    <div className="featured-data">
      <h1 className="city">{city}</h1>
    </div>
  );
}
