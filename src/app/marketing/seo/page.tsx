'use client';

import { motion } from 'framer-motion';

export default function SEO() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(to top, #030712, #065f46)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#10b981' }}>Organic Authority</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>SEO (Arama Motoru<br />Optimizasyonu)</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Zirveye giden yol, verimli SEO stratejilerinden geçer. Seyahat Ediyorum ile dijital otoritenizi organik olarak inşa edin.</p>
                </div>
            </section>

            {/* SECTION 2: Technical Audit */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Teknik SEO Denetimi</h2>
                            <p style={{ color: '#64748b' }}>Sitenizin hızından, tarama hatalarına kadar tüm teknik detayları analiz ederek Google'ın en sevdiği yapıya dönüştürüyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Content Strategy */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>İçerik Odaklı Büyüme</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Keyword Research</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Semantik Yazım</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Content Gap</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Backlink & Authority */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Dijital Otorite İnşası</h2>
                    <p style={{ color: '#64748b' }}>Kaliteli backlink stratejileri ve marka etkileşimleriyle alan adınızın otoritesini üst seviyelere taşıyoruz.</p>
                </div>
            </section>

            {/* SECTION 5: Local & Global SEO */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2">
                        <div style={{ fontSize: '5rem' }}>🌍</div>
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Yerelden Küresele SEO</h2>
                            <p style={{ color: '#64748b' }}>İster yerel ister global pazarda olun, hedeflediğiniz her coğrafyada görünürlüğünüzü maksimize ediyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Advanced Tracking */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Rank Tracking</h5></div>
                        <div><h5>Search Console</h5></div>
                        <div><h5>UX Analysis</h5></div>
                        <div><h5>Competitor Audit</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Rank CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Zirvedeki Yerinizi Alın</h2>
                    <button className="btn btn-primary" style={{ background: '#059669' }}>SEO Analizi Başlat</button>
                </div>
            </section>
        </main>
    );
}
