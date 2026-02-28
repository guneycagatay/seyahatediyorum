'use client';

import { motion } from 'framer-motion';

export default function Maintenance() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'var(--bg-subtle)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Continuous Care</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Bakım ve Destek<br />Hizmetleri</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#94a3b8' }}>Dijital dünyada durmak, geriye gitmektir. Seyahat Ediyorum güvencesiyle sistemleriniz her an güncel, her an güvende.</p>
                </div>
            </section>

            {/* SECTION 2: Security First */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ fontSize: '5rem' }}>🛡️</div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>En Üst Düzey Güvenlik</h2>
                            <p style={{ color: '#64748b' }}>Düzenli güvenlik taramaları, yama yönetimi ve sızma testleriyle verileriniz bizimle emniyette.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Speed Optimization */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Hız: Dijitalin Yakıtı</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Core Web Vitals</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>CDN Yönetimi</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Images Optimize</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: 24/7 Monitoring */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '20px' }}>Kesintisiz İzleme</h2>
                        <p style={{ color: '#64748b' }}>Sistemlerinizi 7/24 anlık olarak takip ediyor, olası problemleri daha oluşmadan engelliyoruz.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Content Updates */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ direction: 'rtl' }}>
                        <div style={{ direction: 'ltr' }}>
                            <h2 style={{ fontWeight: 800 }}>İçerik Desteği</h2>
                            <p style={{ color: '#64748b' }}>Hızlı güncelleme talepleriniz, uzman ekibimiz tarafından dakikalar içinde işleme alınır.</p>
                        </div>
                        <div className="glass" style={{ height: '200px', direction: 'ltr' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Strategy Audit */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Haftalık Rapor</h5></div>
                        <div><h5>Performans Analizi</h5></div>
                        <div><h5>Gelecek Planı</h5></div>
                        <div><h5>SEO Denetimi</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Stability CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Dijital İstikrarın Adresi</h2>
                    <button className="btn btn-primary">Destek Planlarını Gör</button>
                </div>
            </section>
        </main>
    );
}
