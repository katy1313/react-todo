import styles from './Search.module.css';

const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value); 
  };
  return (
    <div className={styles['search']}>
      <label htmlFor="search"><strong>Search</strong> </label>
      <input className={styles['search_field']}
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