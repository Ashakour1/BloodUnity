import Header from "./components/Header";
import Main from "./components/Main";
import {Routes , Route}  from "react-router-dom"
import Home from "./pages/Home";
import Donate from "./pages/Donate";

const App = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/donate" element={<Donate/>}/>
        </Routes>
        </>
       
    )
}

export default App;