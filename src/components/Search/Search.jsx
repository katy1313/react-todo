
const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value); 
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        name="searchTerm"
        onChange={handleChange} 
        value={search} 
      />
    </div>
  );
};

export default Search;