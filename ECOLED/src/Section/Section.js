import styles from "./Section.module.css";
import image1 from "../assets/borne-page-intro.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
const Section = (props) => {
  const formHandler = ()=>{
    props.onSet()
  }
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.line}></div>
        <h2>
          Comment changer le parc luminaire de votre commune GRATUITEMENT?
        </h2>
        <p>
          Dans le cadre du dispositif des Certificats d'économies d'énergie
          (CEE), la Direction générale de l'énergie et du climat (DGEC) a validé
          le programme Lum'acte, porté par la FNCCR. Il nous permet
          d'accompagner les collectivités dans la rénovation de leur parc
          d'éclairage public gratuitement.
        </p>
        <p>
          Afin d'accompagner les collectivités locales dans la rénovation de
          l'éclairage public et ainsi de faire des économies d'électricité, le
          ministère de la Transition écologique a annoncé le lancement du
          programme Lum'ACTE »
        </p>
        <p>
          Avec plus de 10 millions de points lumineux, la co sommation annuelle
          du parc d'éclairage public en France s'élève à environ 5
          terawattheures, soit plus de 40% de la consommation d'électricité des
          collectivités. Cette consommation pèse notamment sur la pointe de
          demande en électricité lors de l'allumage en début de soirée, mais
          également sur les finances des collectivités qui subissent
          actuellement la hausse vertigineuse des prix de l'énergie.
        </p>
        <p>En outre, 40% des équipements ont plus de 25 ans.</p>
        <p>
          Le programme LumActe doit permettre d'accélérer la rénovation des
          installations vieillissantes energivores et de limiter la pollution
          lumineuse induite
        </p>
        <p>
          Dans cette optique f'entreprise Ecoled europe crée -StreetLight» et
          s'engage à fournir des luminaires de qualites, moins energivores
          GRATUITEMENT pour accompagner l'ensemble des collectivitées
          partenaires dans cette transition.
        </p>
        <div className={styles.line}></div>
      </div>
      <div>
        <div className={styles.section2}>
          <div>
            <img src={image1} className={styles.images}></img>
          </div>
          <div>
            <div>
              <h2>Bornes et Colonnes lumineuses</h2>
              <div>
                <div></div>
                <div>
                <p className={styles.para}>
                  Les bornes lumineuses sont équipées d'un point d'éclairage
                  unique, généralement situé sur leur partie supérieure ; le
                  reste de leur structure est constitué du support qui n'est
                  autre que le corps de la borne lumineuse (forme ronde, carrée
                  ou autre);
                </p>
                <p className={styles.para}>
                  Les colonnes lumineuses comportent une colonne de lumière
                  répartie verticalement; qui peut être située sur la moitié
                  supérieure de la colonne, ou à mi-hauteur; d'autres
                  configurations sont possibles selon le fabricant et le style.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div>
            <div>
              <h2 className={styles.mid_head}>lampadaires d'éclairage publique</h2>
              <div className={styles.mid_para}>
                <p className={styles.para}>
                  Les lampadaires d'éclairage public, lampadaires urbains, ou
                  réverbères, constituent une autre catégorie d'éclairage
                  public. Installés en bordure des voies de circulation et des
                  espaces publiques, leur rôle est d'offrir une bonne visibilité
                  aux usagers. Les lampadaires urbains de style classique sont
                  aussi appelés candélabres. L'alimentation électrique des
                  lampadaires d'extérieur peut être de type solaire, classique,
                  ou hybride.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={image2} className={styles.images}></img>
          </div>
        </div>
        <div className={styles.section2}>
          <div>
            <img src={image3} className={styles.images}></img>
          </div>
          <div>
            <div>
              <h2>Luminaires d'éclairage publique</h2>
              <div>
                <div></div>
                <p className={styles.para}>
                  Ils constituent la partie éclairante d'un lampadaire
                  d'éclairage public. Ils contribuent à l'éclairage urbain au
                  niveau des voiries, des espaces publiques et des espaces
                  verts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tagline}>
          <img src={image4} onClick={formHandler} style={{cursor:"pointer"}}></img>
        </div>
      </div>
    </div>
  );
};

export default Section;
