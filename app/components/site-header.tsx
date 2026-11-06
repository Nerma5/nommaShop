import Link from "next/link";

export function SiteHeader() {
    return (
        <header className="site-header">
            <Link href="/#pocetna" className="logo">
                <img src="/nomma.png" alt="NOMMA Premium Quality" />
            </Link>

            <nav className="main-nav">
                <Link href="/#kolekcija">Kolekcija</Link>
                <Link href="/#prica">Naša priča</Link>
                <Link href="/#kontakt">Kontakt</Link>
            </nav>

            <Link
                href="/kolekcija"
                className="cart-link"
                aria-label="Korpa, 0 proizvoda"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="21"
                    height="21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
                    <circle cx="10" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                </svg>
                <span aria-hidden="true">0</span>
            </Link>
        </header>
    );
}
