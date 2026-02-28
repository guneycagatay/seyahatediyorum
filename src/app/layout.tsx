import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import ClientLogic from "@/components/ClientLogic";

export const metadata: Metadata = {
    title: "SeyahatEdiyorum.com | Profesyonel Vize Danışmanlık",
    description: "SeyahatEdiyorum.com ile vize süreçlerinizi hızlandırın ve kolaylaştırın.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <head>
            </head>
            <body>
                <ClientLogic />
                <header className="topbar" id="topbar">
                    <div className="wrap">
                        <nav className="nav">
                            <Link className="brand" href="/">
                                <div className="logo" aria-hidden="true"></div>
                                <div>seyahatediyorum<span style={{ color: 'rgba(91,102,122,.92)', fontWeight: 900 }}>.com</span></div>
                            </Link>

                            <div className="menu" aria-label="Ana menü">
                                <Link href="/">Ana Sayfa</Link>
                                <Link href="/hakkimizda">Hakkımızda</Link>

                                <div className="dropdown">
                                    <a href="#ulkeler" aria-haspopup="true" aria-expanded="false">Ülkeler <span style={{ opacity: .7 }}>▾</span></a>
                                    <div className="dropdown-panel" role="menu" aria-label="Ülkeler menüsü">
                                        <div className="countryGrid">
                                            <Link className="countryLink" href="/amerika-vizesi" role="menuitem"><span className="flagDot">US</span> Amerika</Link>
                                            <Link className="countryLink" href="/schengen-vizesi" role="menuitem"><span className="flagDot">EU</span> Schengen</Link>
                                            <Link className="countryLink" href="/ingiltere-vizesi" role="menuitem"><span className="flagDot">UK</span> İngiltere</Link>
                                            <Link className="countryLink" href="/kanada-vizesi" role="menuitem"><span className="flagDot">CA</span> Kanada</Link>
                                            <Link className="countryLink" href="/dubai-vizesi" role="menuitem"><span className="flagDot">AE</span> Dubai</Link>
                                            <Link className="countryLink" href="/cin-vizesi" role="menuitem"><span className="flagDot">CN</span> Çin</Link>
                                        </div>
                                        <div className="dropdown-note">Ülkenizi seçin, başvuru tipinize göre evrak ve randevu planını hemen çıkaralım.</div>
                                    </div>
                                </div>

                                <Link href="/hizmetler">Hizmetlerimiz</Link>
                                <Link href="/sss">S.S.S.</Link>
                                <Link href="/iletisim">İletişim</Link>
                            </div>

                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <Link className="btn mobileOnly" href="/hizmetler">Menü</Link>
                                <Link className="btn primary" href="/iletisim">Başvuru Yap →</Link>
                            </div>
                        </nav>
                    </div>
                </header>

                {children}

                <footer style={{ background: 'transparent' }}>
                    <div className="wrap">
                        <div className="footerLinks">
                            <Link href="/">Ana Sayfa</Link>
                            <Link href="/hizmetler">Hizmetler</Link>
                            <Link href="/hakkimizda">Hakkımızda</Link>
                            <Link href="/sss">SSS</Link>
                            <Link href="/iletisim">İletişim</Link>
                            <Link href="#">Gizlilik</Link>
                            <Link href="#">KVKK</Link>
                        </div>

                        <div className="foot">
                            © 2026 SeyahatEdiyorum.com — Tüm hakları saklıdır. <br />
                            <span style={{ opacity: .9 }}>Tasarım & geliştirme: </span><a href="https://tanitimx.com" target="_blank" rel="noopener noreferrer">TanıtımX Dijital</a>
                        </div>
                    </div>
                </footer>
            </body>
        </html >
    );
}
