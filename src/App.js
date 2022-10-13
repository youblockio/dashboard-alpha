import { Routes, Route } from "react-router-dom";
import Form from "./Form/Form";
import Home from "./pages/Home";
import Thank from "./pages/Thank";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
      <Route path="/thank" element={<Thank/>}></Route>
    </Routes>
  );
}

export default App;
