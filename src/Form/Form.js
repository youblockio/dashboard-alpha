import Nav from "../Nav/Nav";
import footer from "../assets/footer.png"

const Form = ()=>{
    return(
        <>
        <Nav/>
        <iframe
        id="JotFormIFrame-222571248233048"
        title="Bon de commande LED"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/222571248233048"
        frameborder="0"
        style={{
        minWidth: "100%",
        height:"900px",
        border:"none"}}
        scrolling="yes"
      >
      </iframe>
      <img src={footer} style={{width: "100%"}}></img>
      </>
    )
}

export default Form;