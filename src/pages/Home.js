import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Section from "../Section/Section";
import footer from "../assets/footer.png";

const Home = () =>{
    return(
        <>
        <Nav/>
        <Header/>
        <Section/>
        <img src={footer} style={{width: "100%"}}></img>
        </>
    )
};

export default Home;