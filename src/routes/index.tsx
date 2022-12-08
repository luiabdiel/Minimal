import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Transactions } from "../pages/Transactions";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/login' element={<Login />} />

                <Route path='/' element={<Navigate to='/' replace />} />
                <Route path='*' element={<h1>Essa página não existe</h1>} />
            </Routes>
        </BrowserRouter>
    )
}