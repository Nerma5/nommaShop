const proizvodi = [
    {
        naziv: "Šampon za hidrataciju",
        tip: "ŠAMPON",
        cena: "1.490 RSD",
        boja: "zlatna",
    },
    {
        naziv: "Ulje za kosu",
        tip: "NEGA I SJAj",
        cena: "1.290 RSD",
        boja: "roze",
    },
    {
        naziv: "Ricinusovo ulje",
        tip: "PRIRODNA NEGA",
        cena: "990 RSD",
        boja: "braon",
    },
    {
        naziv: "Serum za kosu",
        tip: "NEGA KOSE",
        cena: "1.690 RSD",
        boja: "zelena",
    },
    {
        naziv: "Anti-dandruff šampon",
        tip: "ŠAMPON",
        cena: "1.590 RSD",
        boja: "plava",
    },
    {
        naziv: "Eliksir protiv peruti",
        tip: "TRETMAN",
        cena: "1.390 RSD",
        boja: "teget",
    },
];

export default function Home() {
    return (
        <main>
            <div className="announcement">
                Besplatna dostava za porudžbine preko 3.500 RSD · Napravljeno u
                Srbiji
            </div>

            <header className="site-header">
                <a href="#" className="wordmark">
                    nōmma
                </a>

                <nav className="main-nav">
                    <a href="#kolekcija">Kolekcija</a>
                    <a href="#prica">Naša priča</a>
                    <a href="#kontakt">Kontakt</a>
                </nav>

                <a href="#kolekcija" className="cart-link">
                    Korpa (0)
                </a>
            </header>

            <section className="hero">
                <div>
                    <p className="eyebrow">
                        ✳ PRIRODNA NEGA · PROIZVEDENO U SRBIJI
                    </p>
                    <h1>
                        Lepa kosa
                        <br />
                        počinje <em>negom.</em>
                    </h1>
                    <p className="hero-description">
                        Pažljivo osmišljena nega koja spaja prirodne sastojke i
                        male rituale za kosu kakvu voliš.
                    </p>
                    <a href="#kolekcija" className="button-dark">
                        Istraži kolekciju ↗
                    </a>
                </div>

                <div className="hero-art">
                    <div className="boca">
                        <div className="cep" />
                        <div className="etiketa">
                            <span>nōmma</span>
                            <hr />
                            <b>SHAMPOO</b>
                            <small>hidratacija i snaga</small>
                        </div>
                    </div>
                </div>
            </section>

            <section className="benefiti">
                <p>
                    ✳ <b>Pažljivo birani sastojci</b>
                    <br />
                    Priroda u svakoj formuli
                </p>
                <p>
                    ↗ <b>Proizvedeno u Srbiji</b>
                    <br />
                    Stvoreno s pažnjom
                </p>
                <p>
                    ○ <b>Rituali koji prijaju</b>
                    <br />
                    Jednostavna svakodnevna nega
                </p>
            </section>

            <section className="kolekcija" id="kolekcija">
                <p className="eyebrow">MALI RITUALI, VELIKA RAZLIKA</p>
                <h2>
                    Naša <em>kolekcija</em>
                </h2>
                <p className="uvod">
                    Pronađi svoj novi omiljeni korak u nezi kose.
                </p>

                <div className="proizvodi">
                    {proizvodi.map((proizvod) => (
                        <article className="proizvod" key={proizvod.naziv}>
                            <div className={`slika-proizvoda ${proizvod.boja}`}>
                                <span>{proizvod.tip}</span>
                                <div className="mala-boca">
                                    <div className="mala-etiketa">
                                        <small>nōmma</small>
                                        <hr />
                                        <b>{proizvod.tip}</b>
                                    </div>
                                </div>
                            </div>
                            <h3>{proizvod.naziv}</h3>
                            <p>{proizvod.cena}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="prica" id="prica">
                <p className="eyebrow">NAŠA FILOZOFIJA</p>
                <h2>
                    Nega koja ima <em>svoju svrhu.</em>
                </h2>
                <p>
                    Verujemo u jednostavnu, promišljenu negu i male trenutke
                    koji čine dan. Svaku formulu razvijamo s pažnjom prema kosi
                    i koži glave.
                </p>
            </section>

            <footer id="kontakt">
                <a href="#" className="wordmark">
                    nōmma
                </a>
                <p>Prirodna nega. Pažljivo osmišljena.</p>
                <a href="mailto:zdravo@nomma.rs">zdravo@nomma.rs</a>
            </footer>
        </main>
    );
}
