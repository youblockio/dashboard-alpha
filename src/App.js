import { Routes, Route } from "react-router-dom";
import Form from "./Form/Form";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
  );
}

export default App;
