import { ProductGrid } from "./components/product-grid";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
    return (
        <main>
            <SiteHeader />

            <section className="hero" id="pocetna">
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

                <ProductGrid preview />
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

            <SiteFooter />
        </main>
    );
}
