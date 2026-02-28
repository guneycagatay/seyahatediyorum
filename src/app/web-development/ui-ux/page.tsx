'use client';

import { motion } from 'framer-motion';

export default function UIUX() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '60vh', background: 'radial-gradient(circle at 50% 50%, #1e1e2e, var(--bg))' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#facc15' }}>Empathy Driven Design</span>
                    <h1 className="gradient-text" style={{ fontSize: '4.5rem', fontWeight: 900 }}>Kullanıcı Deneyimi<br />(UI/UX) Tasarımı</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: '#94a3b8' }}>Göz alıcı ara yüzler, unutulmaz deneyimler. Kullanıcının kalbine giden yolu Seyahat Ediyorum ile tasarlayın.</p>
                </div>
            </section>

            {/* SECTION 2: Discovery */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px' }}>Anlama ve Keşif</h2>
                    <div className="grid-2">
                        <div>
                            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Sizin için çalışan değil, kullanıcınız için yaşayan tasarımlar yapıyoruz. Persona analizlerinden kullanıcı yolculuklarına her aşamayı veriyle besliyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h4>Kullanıcı Analizi</h4>
                            <p style={{ opacity: 0.6 }}>Gerçek kullanıcıların ne istediğini biliyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Visual Flourish */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Modern Estetik</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Mikro Etkileşimler</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Erişilebilirlik</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Prototyping */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '80px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>İnteraktif Prototipleme</h2>
                        <p style={{ color: '#64748b' }}>Tasarımı hayata geçmeden önce deneyimleyin. Hata payını sıfıra indiren test süreçlerimizle yanınızdayız.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Atomic Design */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2">
                        <div>
                            <span className="eyebrow">Design Systems</span>
                            <h2 style={{ fontWeight: 800 }}>Sürdürülebilir Tasarım Dili</h2>
                            <p style={{ color: '#64748b' }}>Atomik tasarım prensipleriyle kurumsal kimliğinizi ölçeklenebilir bir sisteme dönüştürüyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Feedback Loop */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '32px' }}>Sürekli İyileştirme</h2>
                    <div className="grid-4">
                        <div><h5>Heatmaps</h5></div>
                        <div><h5>A/B Tests</h5></div>
                        <div><h5>User Feedback</h5></div>
                        <div><h5>Usability</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Design CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Dijital Deneyiminizi Yükseltin</h2>
                    <button className="btn btn-primary" style={{ background: '#facc15', color: '#000' }}>Tasarım Sürecini Başlat</button>
                </div>
            </section>
        </main>
    );
}
