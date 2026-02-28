'use client';

import { motion } from 'framer-motion';

export default function CustomSoftware() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '60vh', background: 'linear-gradient(45deg, #030712, #1e1b4b)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Tailored Engineering</span>
                    <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 900 }}>Özel Yazılım<br />Geliştirme</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>İşinize özel, sınırsız çözümler. Hazır paketlerin ötesinde, tamamen sizin ihtiyaçlarınıza göre şekillenen yüksek performanslı yazılımlar.</p>
                </div>
            </section>

            {/* SECTION 2: Problem Solving */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Karmaşık Sorunlara<br />Zarif Çözümler</h2>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '24px' }}>Her işletmenin kendine has bir işleyişi vardır. Biz, bu işleyişi dijitalleştirmek ve optimize etmek için size özel algoritmalar geliştiriyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '6rem' }}>🛠️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Deep Tech */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '40px' }}>
                            <h4>Yapay Zeka (AI)</h4>
                            <p style={{ color: '#64748b' }}>Karar destek mekanizmalarında AI gücünü işinize entegre ediyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h4>Big Data</h4>
                            <p style={{ color: '#64748b' }}>Veri yığınlarından anlamlı analizler çıkaran mimariler kuruyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h4>Cloud Native</h4>
                            <p style={{ color: '#64748b' }}>Bulut üzerinden her yerden erişilebilir, esnek yapılar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Architecture */}
            <section className="section">
                <div className="layout-container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Sağlam ve Güvenilir Mimari</h2>
                    </div>
                    <div className="grid-4">
                        <div style={{ padding: '20px', borderRight: '1px solid var(--glass-border)' }}><h5>Mikroservisler</h5></div>
                        <div style={{ padding: '20px', borderRight: '1px solid var(--glass-border)' }}><h5>API-First</h5></div>
                        <div style={{ padding: '20px', borderRight: '1px solid var(--glass-border)' }}><h5>Event-Driven</h5></div>
                        <div style={{ padding: '20px' }}><h5>Security-First</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Business Impact */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '32px' }}>Verimliliği En Üst Seviyeye Çıkarın</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#94a3b8' }}>Operasyonel maliyetlerinizi düşüren ve iş süreçlerinizi hızlandıran özel yazılımlarımızla geri dönüşü (ROI) en yüksek yatırımı yapın.</p>
                </div>
            </section>

            {/* SECTION 6: Engineering CTA */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <div className="glass" style={{ padding: '80px', background: 'linear-gradient(135deg, #1e1b4b, transparent)' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '24px' }}>Fikrinizi Koda Dönüştürelim</h2>
                        <button className="btn btn-primary">Yazılım Analizi Talep Et</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
