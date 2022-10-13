import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import footer from "../assets/footer.png";
import styles from "./Thank.module.css";

const Thank = () => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.text}>
      <h1>DOSSIER CLÔTURÉ !!!</h1>
      <p>
        vous recevrez un mail de confirmation de clôture dans l'heure... le cas
        échéant ou vous ne le recevez pas n'hésitez pas à nous contacter via le
        formulaire présent sur le site.
      </p>
      <p>
        Merci pour votre confiance et nous espérons vous revoir prochainement!!
      </p>
      </div>
      <img src={footer} style={{ width: "100%" }}></img>
    </>
  );
};

export default Thank;
