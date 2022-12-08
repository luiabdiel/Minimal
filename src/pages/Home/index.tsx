import { useState } from "react";
import { Main } from "../../components/Main";
import { MenuMobile } from "../../components/MenuMobile";
import { Navbar } from "../../components/Navbar";

export function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Navbar setMenuIsVisible={setMenuIsVisible} />
            <Main />
        </>
    )
}