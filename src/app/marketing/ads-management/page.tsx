'use client';

import { motion } from 'framer-motion';

export default function AdsManagement() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'radial-gradient(circle at 100% 0%, #1e1b4b, var(--bg))' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#f87171' }}>Precision Targeting</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Reklam ve Kampanya<br />Yönetimi</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Bütçenizi harcamayın, yatırım yapın. Google ve Meta reklamlarında maksimum ROI odaklı profesyonel yönetim.</p>
                </div>
            </section>

            {/* SECTION 2: Multi Channel */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2">
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Google Ads (SEM)</h3>
                            <p style={{ color: '#64748b' }}>Arama ağında, doğru anahtar kelimelerle tam ihtiyacı olan kullanıcıya ulaşın.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Meta Ads</h3>
                            <p style={{ color: '#64748b' }}>Instagram ve Facebook'ta görsel gücünüzle dikkat çekin ve dönüşüm alın.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Smart Bidding */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px', textAlign: 'center' }}>Akıllı Teklif Stratejileri</h2>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>ROAS Optimize</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>A/B Testing</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Remarketing</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Copywriting */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Vurucu Reklam Metinleri</h2>
                    <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>Sadece "tıkla" demeyen, bir değer önerisi sunan ve merak uyandıran reklam yazarlığı.</p>
                </div>
            </section>

            {/* SECTION 5: Funnel Optimization */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ fontSize: '5rem' }}>🎯</div>
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Dönüşüm Hunisi Planlama</h2>
                            <p style={{ color: '#64748b' }}>Soğuk trafikten sadık müşteriye giden yolu, veriye dayalı kampanya kurgularıyla döşüyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Compliance & Safety */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Ad Transparency</h5></div>
                        <div><h5>Pixel / API CAPI</h5></div>
                        <div><h5>Brand Safety</h5></div>
                        <div><h5>Budget Control</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Launch CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '24px' }}>Satışlarınızı Katlayın</h2>
                    <button className="btn btn-primary" style={{ background: '#f43f5e' }}>Kampanya Analizi</button>
                </div>
            </section>
        </main>
    );
}
