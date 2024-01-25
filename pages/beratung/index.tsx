import Image from "next/image";
import styles from './style.module.css';
import InformationBlock from "@/components/information/informationBlock";
import Link from "next/link";

export default function _() {

    return (
        <div className="block container">
            <InformationBlock imageRight={true} image='icons/4.png' width="200px">
                <h1 className={styles.header}>Neu: Anonyme Online-Beratung</h1>
                <br />
                <p className={styles.header}>Per <Link href="/">Kontaktformular</Link></p>
            </InformationBlock>
            <div className={styles.helpBlock + ' row'}>
                <p>
                    Die Online-Beratung ist über einen speziell gesicherten Server zu erreichen. Nach der Registrierung mit selbst gewähltem Benutzer:innennamen und Passwort können Sie sich einloggen und uns schreiben oder einen Chat-Termin buchen.
                </p>
                <p>
                    Eine Übersicht über alle angebotenen Chattermine der Ausstiegsangebote im Nordverbund findest Du hier. Um mit uns zu chatten, buche bitte einen Termin mit dem Titel „Chat mit Distance – Ausstieg Rechts (Nord-West-Niedersachsen)“.
                </p>
                <p>
                    Information: Die verschlüsselte Online-Beratung funktioniert nach einem sogenannten Postkastensystem, das nicht mit einer regulären E-Mail-Kommunikation vergleichbar ist. Zur Wahrung Deiner Anonymität können wir Deine E-Mail-Adressen nicht einsehen, selbst wenn Du diese angibst.
                </p>
                <ul>
                    <li>
                        Über eingehende Antworten der E-Mail-Beratung kannst Du allerdings rein praktisch nur dann benachrichtigt werden, wenn Du eine E-Mail-Adresse angegeben hast. Ansonsten können Sie über den Login auf der Seite erfahren, ob eine Antwort für Dich vorliegt.
                    </li>
                    <li>Chat-Termine kannst Du nur buchen, wenn Du eine E-Mail-Adresse angegeben hast. Diese kann auch fiktiv sein, Du erhältst dann allerdings keine Erinnerung an den Termin. Du musst dich in diesem Fall zum gebuchten Zeitpunkt einloggen und den Chat betreten. Möchtest Du zu einem anderen Zeitpunkt einen Chat mit uns führen, schreib uns gern eine E-Mail.</li>
                </ul>
                <p>
                    <strong>Hinweis zum Datenschutz: Nur die Berater von ExitLinks haben Einsicht in Ihre Kommunikation.</strong>
                </p>
            </div>
        </div>
    )
}