import { Link } from "react-router-dom";
import notebook from './notebook2.jpg';
import styles from './HomePage.module.css';

const HomePage = () => {

  return (
    <div className={styles['home-page']}>
      <h1>Home page</h1>
      <img className={styles['image']} src={notebook} alt="Notebook" ></img>
      <Link to="/todos" className={styles['todo-link']}>MY TO-DO LIST</Link>
    </div>
  );
};

export default HomePage;