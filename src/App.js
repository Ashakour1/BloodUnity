import Header from "./components/Header";
import Main from "./components/Main";
import {Routes , Route}  from "react-router-dom"
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Contect from "./pages/Contact";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="/contact" element={<Contect/>}/>
        </Routes>
       
        </>
       
    )
}

export default App;