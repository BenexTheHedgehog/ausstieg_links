import InformationBlock from "@/components/information/informationBlock";

import styles from './style.module.css';

export default function _() {

    return (
        <div className="block container">
            <div className="mainBlock">
                <InformationBlock imageRight={true} image="map.png" width="400px" height="auto">
                    <h1>Wer sind wir?</h1>
                    <p>
                        ExitLinks ist ein gemeinnütziges und zivilgesellschaftliches Ausstiegsprogramm sowie ein Recherchenetzwerk. 
                        Das Programm wird durch die AfD in Thüringen und weitere demokratische Teilnehmer der Zivilgesellschaft unterstützt.
                    </p>
                    <p>
                        Das Hauptziel von ExitLinks ist es, Personen, die sich extremistischen, linksextremen und menschenverachtenden Gruppierungen zugewandt haben, wieder in die Zivilgesellschaft zu integrieren und sie auf diesem Weg zu unterstützen.
                    </p>
                    <p>
                        Das Team von ExitLinks setzt sich aus verschiedenen Fachbereichen wie Jura, Informatik, Politik, Sozialwissenschaften und Geisteswissenschaften zusammen. Es steht als kompetente und vertrauenswürdige Anlaufstelle allen Interessierten zur Verfügung.
                    </p>
                </InformationBlock>

                <InformationBlock imageRight={false} image="" width="0px" height="auto">
                    <p>
                        Wir geben keine Informationen aus Gesprächen oder anderen Kontakten an Sicherheitsbehörden oder Dritte ohne Einverständnis der Klienten weiter. In der Kommunikation legen wir ebenfalls großen Wert auf Sicherheit und halten uns an die Datenschutzbestimmungen.
                    </p>
                </InformationBlock>

                <InformationBlock imageRight={true} image="" width="0px" height="auto">
                    <p>
                    Ein gelungener Ausstieg muss von der Person selbst als wünschenswert erkannt werden. Wir setzen deshalb auf Freiwilligkeit, das heißt, Klienten entscheiden selbst, ob und welche Begleitung sie sich wünschen. In Ausnahmefällen prüfen wir, ob wir Härtefällen mögliche Umstiegsmöglichkeiten in einen neuen Job liefern können.
                    </p>
                </InformationBlock>
                <div className={styles.lastBlock}>
                    <h1>Unser Leitbild</h1>
                    <div className={styles.information}>
                        <div>
                            <h3>Vertraulich</h3>
                            <p>Wir geben keine Informationen aus Gesprächen oder anderen Kontakten an Sicherheitsbehörden oder Dritte ohne Einverständnis der Klient:innen weiter. In der Kommunikation legen wir ebenfalls großen Wert auf Sicherheit und halten uns an die Datenschutzbestimmungen.</p>
                        </div>
                        <div>
                            <h3>Freiwillig</h3>
                            <p>
                            Ein gelungener Ausstieg muss von der Person selbst als wünschenswert erkannt werden. Wir setzen deshalb auf Freiwilligkeit, das heißt, Klient:innen entscheiden selbst, ob und welche Begleitung sie sich wünschen. In Ausnahmefällen prüfen wir, ob eine Beratung auch in Zwangskontexten erfolgen kann.
                            </p>
                        </div>
                        <div>
                            <h3>Kostenlos</h3>
                            <p>
                            Wir sind ein gemeinnütziges Angebot und es entstehen keinerlei Kosten für die Inanspruchnahme.
                            </p>
                        </div>
                        <div>
                            <h3>Auf Wunsch anonym</h3>
                            <p>
                            Menschen, die sich aus bestimmten Gründen unwohl fühlen, uns ihren Namen zu nennen, können auch anonym beraten werden.
                            </p>
                        </div>
                        <div>
                            <h3>Klientenorientiert</h3>
                            <p>
                            Wir entwickeln Lösungsansätze gemeinsam und auf Augenhöhe mit unseren Klient:innen. Wir unterstützen mit unserem Fachwissen, aber die individuellen Wünsche und Bedürfnisse der Klient:innen stehen im Vordergrund. Wir begleiten bei der Selbstreflexion, zwingen aber niemandem eine Meinung auf.
                            </p>
                        </div>
                        <div>
                            <h3>Langfristig & nachhaltig</h3>
                            <p>
                            Ein gelungener Ausstieg ist ein zeitintensiver Prozess, der individuell unterschiedlich abläuft. Der Beratungsprozess ist daher nicht auf einen Zeitraum festgelegt, sondern erst zu Ende, wenn Klient:in und Berater:in der Ansicht sind, dass die Begleitung abgeschlossen werden kann. Wir stehen auch nach abgeschlossenen Beratungen noch als Ansprechpartner:innen zur Verfügung.
                            </p>
                        </div>
                        <div>
                            <h3>Mobil & aufsuchend</h3>
                            <p>
                            Wir beraten dort, wo unsere Klient:innen sich sicher und wohl fühlen. Treffen finden deshalb wohnortnah und an selbstgewählten Orten statt (z.B. Café, Park, Bibliothek, …).
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}