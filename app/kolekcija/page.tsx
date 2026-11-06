import type { Metadata } from "next";
import { ProductGrid } from "../components/product-grid";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
    title: "Kolekcija | NOMMA",
    description:
        "Pogledajte celu NOMMA kolekciju pažljivo osmišljene nege za kosu.",
};

export default function KolekcijaPage() {
    return (
        <>
            <SiteHeader />
            <main className="kolekcija-page">
                <section className="kolekcija">
                    <p className="eyebrow">MALI RITUALI, VELIKA RAZLIKA</p>
                    <h1>
                        Naša <em>kolekcija</em>
                    </h1>
                    <p className="uvod">
                        Pronađi svoj novi omiljeni korak u nezi kose.
                    </p>
                    <ProductGrid />
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
