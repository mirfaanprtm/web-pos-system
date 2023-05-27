import './App.css';
import Login from "./pages/login/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./pages/menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Menu />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
