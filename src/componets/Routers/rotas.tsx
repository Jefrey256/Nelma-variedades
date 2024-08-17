import { Route, Routes } from "react-router-dom"
import { Home } from "../Elements/home"


const Rotas = () => {
    return(
        <Routes>
            <Route path="/Nelma-variedades" element={<Home />} />
        </Routes>
    )
}

export default Rotas