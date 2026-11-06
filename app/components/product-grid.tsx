import Link from "next/link";

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

export function ProductGrid({ preview = false }: { preview?: boolean }) {
    return (
        <div className={`proizvodi${preview ? " proizvodi--preview" : ""}`}>
            {proizvodi.map((proizvod, index) => (
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
                        {preview && index === 2 && (
                            <Link className="mobile-more" href="/kolekcija">
                                Vidi sve proizvode
                            </Link>
                        )}
                    </div>
                    <h3>{proizvod.naziv}</h3>
                    <p>{proizvod.cena}</p>
                </article>
            ))}
        </div>
    );
}
