import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../pages/Start/Start.jsx";
import {Mymenu} from "../pages/Mymenu/Mymenu.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Mymenu" element={<Mymenu />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
