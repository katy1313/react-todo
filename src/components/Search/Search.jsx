import styles from './Search.module.css';

const Search = ({ search, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value); 
  };
  return (
    <div className={styles['search']}>
      <label htmlFor="search"></label>
      <input className={styles['search_field']}
        id="search"
        type="text"
        name="searchTerm"
        onChange={handleChange} 
        value={search} 
        placeholder='Search...'
      />
    </div>
  );
};

export default Search;