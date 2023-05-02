import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth></Auth>}></Route>
                <Route path="/notes" element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;