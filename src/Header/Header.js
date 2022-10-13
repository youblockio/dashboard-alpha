import styles from "./Header.module.css";
import header from "../assets/header.jpeg";
import header2 from "../assets/header2.png";
const Header = () => {
  return (
    <div>
      <div>
        <img src={header} alt="header" className={styles.header_img}></img>
      </div>
      <div className={styles.options}>
        <div>Concepteur</div>
        <div>Distributeur</div>
        <div>Importateur</div>
        <div>Distributeur</div>
      </div>
      <div className={styles.headerDiv}>
        <img src={header2} alt="header" className={styles.header_img2}></img>
      </div>
    </div>
  );
};

export default Header;
