import React,{useState} from "react";
import Header from "./Header/Header";
import Section from "./Section/Section";
import footer from "./assets/footer.png";
import Form from "./Form/Form";

function App() {
  const [show , setShow] = useState(true)
  const formOpen = ()=>{
    setShow(false)
  }
  return (
    <div>
      {show && <Header/>}
      {show && <Section onSet={formOpen}/>}
      {!show && <Form></Form>}
      {show && <img src={footer} style={{width: "100%"}}></img>}
    </div>
  );
}

export default App;
