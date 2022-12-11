import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { AuthProvider } from "../contexts/AuthProvider";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Transactions } from "../pages/Transactions";

export function Router() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/transactions' element={
                        <ProtectedLayout children={<Transactions />} />}>
                    </Route>

                    <Route path='/login' element={<Login />} />

                    <Route path='/' element={<Navigate to='/' replace />} />
                    <Route path='*' element={<h1>Essa página não existe</h1>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}