import Image from "next/image";
import Link from "next/link";

import styles from './navbar.module.css'
import { Fragment, useState } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeHandler = () => {
        setMenuOpen(false);
    }

    return (
        <Fragment>
        <div className={styles.navbarHeader}>
            <div className={styles.navbarHeaderFlex + ' container'}>
                <div style={{paddingLeft:'10px'}}>
                    <a href="https://www.afd-thueringen.de/">AfD Landesverband Thüringen</a> | <a href="mailto:geschaeftsstelle@afd-thueringen.de">geschaeftsstelle@afd-thueringen.de</a> 
                </div>
                <div style={{paddingRight:'10px'}}>
                    <ul>
                        <li><a href="https://twitter.com/Exit_Links" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.main}>
        <nav className={styles.navbar + ' container'}>
            <Link href="/" className={styles.title}>
                <Image src="/logo.png" width={0} height={0} sizes="100vw" className={styles.image} alt="" />
            </Link>

            <div className={styles.mobileTitle}>
                <h1>Exit Links</h1>
            </div>

            <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
            </div>
            <ul className={menuOpen ? styles.open : ""}>
                <li>
                    <Link className={styles.link} href="/" onClick={closeHandler}>Exit Links</Link>
                </li>
                <li>
                    <Link className={styles.link} href="wer-sind-wir" onClick={closeHandler}>Wer sind wir?</Link>
                </li>
                <li>
                    <Link className={styles.link} href="veroeffentlichungen" onClick={closeHandler}>Veröffentlichung</Link>
                </li>
                <li>
                    <Link className={styles.link} href="beratung" onClick={closeHandler}>Online Beratung</Link>
                </li>
                <li>
                    <Link className={styles.link} href="kontakt" onClick={closeHandler}>Kontakt</Link>
                </li>
            </ul>
        </nav>
        </div>
        </Fragment>
    )
}