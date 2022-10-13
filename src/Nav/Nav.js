import styles from "./Nav.module.css";
import search_icon from "../assets/search_icon.png";
import logo from "../assets/logo.png";

const Nav = ()=>{
    const navList = [
        "ACCUEIL",
        "PRODUITS",
        "ENTREPRISE",
        "SOLUTIONS",
        "STREETLIGHT",
        "CONTACT",
      ];
    return(
        <>
        <div className={styles.search_bg}>
        <div className={styles.search_main}>
          <input placeholder="Rechercher..."></input>
          <img src={search_icon} className={styles.search_icon} alt="search-icon"></img>
        </div>
      </div>
      <div className={styles.nav_main}>
        <a href="/"><img src={logo} alt="logo" className={styles.logo}></img></a>
        <div className={styles.nav_list}>
          <ul>
            {navList.map((item)=><li>{item}</li>)}
          </ul>
        </div>
        <div><button className={styles.head_btn}>CONNEXION</button></div>
      </div>
        </>
    )
}

export default Nav;