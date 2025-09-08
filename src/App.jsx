import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
