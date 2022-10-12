import styles from "./Header.module.css";
import search_icon from "../assets/search_icon.png";
import logo from "../assets/logo.png";
import header from "../assets/header.jpeg";
import header2 from "../assets/header2.png";
const Header = () => {
  const navList = [
    "ACCUEIL",
    "PRODUITS",
    "ENTREPRISE",
    "SOLUTIONS",
    "STREETLIGHT",
    "CONTACT",
  ];
  return (
    <div>
      <div className={styles.search_bg}>
        <div className={styles.search_main}>
          <input placeholder="Rechercher..."></input>
          <img src={search_icon} className={styles.search_icon} alt="search-icon"></img>
        </div>
      </div>
      <div className={styles.nav_main}>
        <div><img src={logo} alt="logo" className={styles.logo}></img></div>
        <div className={styles.nav_list}>
          <ul>
            {navList.map((item)=><li>{item}</li>)}
          </ul>
        </div>
        <div><button className={styles.head_btn}>CONNEXION</button></div>
      </div>
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
