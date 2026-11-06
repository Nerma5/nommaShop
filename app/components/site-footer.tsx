import Link from "next/link";

export function SiteFooter() {
    return (
        <footer id="kontakt" className="site-footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link href="/#pocetna" className="footer-logo">
                        <img src="/nomma.png" alt="NOMMA Premium Quality" />
                    </Link>
                    <p>
                        Pažljivo osmišljena nega za kosu i mali rituali koji
                        prijaju svakog dana. Proizvedeno u Srbiji.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Istraži</h3>
                    <Link href="/#kolekcija">Kolekcija</Link>
                    <Link href="/#prica">Naša priča</Link>
                </div>

                <div className="footer-column">
                    <h3>Kontakt</h3>
                    <a href="mailto:info@nomma.rs">info@nomma.rs</a>
                    <a
                        className="instagram-link"
                        href="https://www.instagram.com/nomma_kozmetika/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            aria-hidden="true"
                        >
                            <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="5"
                            />
                            <circle cx="12" cy="12" r="4" />
                            <circle
                                cx="17.5"
                                cy="6.5"
                                r="1"
                                fill="currentColor"
                                stroke="none"
                            />
                        </svg>
                        nomma_kozmetika
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2026 NOMMA</span>
                <span>Pažljivo osmišljena nega. Proizvedeno u Srbiji.</span>
            </div>
        </footer>
    );
}
