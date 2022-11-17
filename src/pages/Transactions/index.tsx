import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Summary } from "../../components/Summary";
import { Table } from "./components/Table";

export function Transactions() {
    return (
        <>
            <Navbar />
            <Header />
            <Summary />  
            <Table />          
        </>
    )
}