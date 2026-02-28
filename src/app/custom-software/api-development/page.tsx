'use client';

import { motion } from 'framer-motion';

export default function APIDev() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(to top, #030712, #065f46)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#10b981' }}>Connected Ecosystems</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Modern API<br />Geliştirme</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Sistemlerinizin birbiriyle pürüzsüzce konuşmasını sağlayan, güvenli ve yüksek performanslı API mimarileri. Seyahat Ediyorum ile bağlantıda kalın.</p>
                </div>
            </section>

            {/* SECTION 2: Technical Specs */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>RESTful & GraphQL</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>OAuth 2.0</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Rate Limiting</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Documentation */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Kusursuz Dokümantasyon</h2>
                            <p style={{ color: '#64748b' }}>Swagger ve Postman üzerinden kolayca anlaşılabilir, geliştirici dostu dokümantasyonlar hazırlıyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Microservices Ready */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Mikroservislerle Uyumlu</h2>
                    <p style={{ color: '#64748b' }}>Ölçeklenebilir, bağımsız çalışan ve yüksek erişilebilirlik sunan mikroservis mimarilerine özel API çözümleri.</p>
                </div>
            </section>

            {/* SECTION 5: Security Shield */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2">
                        <div style={{ fontSize: '5rem' }}>🔐</div>
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Uçtan Uca Güvenlik</h2>
                            <p style={{ color: '#64748b' }}>Veri şifreleme, yetkilendirme katmanları ve anlık izleme ile API'leriniz her an güvende.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Latency Optimization */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Düşük Gecikme</h5></div>
                        <div><h5>Yüksek Eşzamanlılık</h5></div>
                        <div><h5>Cache Stratejileri</h5></div>
                        <div><h5>Cloudflare Edge</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Connect CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Sistemlerinizi Entegre Edin</h2>
                    <button className="btn btn-primary" style={{ background: '#10b981' }}>API Analizi Talep Et</button>
                </div>
            </section>
        </main>
    );
}
