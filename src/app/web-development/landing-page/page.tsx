'use client';

import { motion } from 'framer-motion';

export default function LandingPage() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(to bottom, var(--bg) 0%, var(--primary-glow) 100%)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Conversion Optimized</span>
                    <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 900 }}>Etkileyici<br />Landing Sayfaları</h1>
                    <p style={{ maxWidth: '650px', fontSize: '1.25rem', color: '#cbd5e1' }}>Sadece bir sayfa değil, bir dönüşüm makinesi. Seyahat Ediyorum dokunuşuyla ziyaretçilerinizi müşteriye dönüştürün.</p>
                </div>
            </section>

            {/* SECTION 2: USP */}
            <section className="section">
                <div className="layout-container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Sizi Öne Çıkaran Detaylar</h2>
                    </div>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '40px' }}><h4>Hızlı Kayıt</h4></div>
                        <div className="glass" style={{ padding: '40px' }}><h4>A/B Test Uyumu</h4></div>
                        <div className="glass" style={{ padding: '40px' }}><h4>Analitik Takip</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Visual Identity */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div className="glass" style={{ height: '400px' }}></div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Marka Kimliğiyle Uyum</h2>
                            <p style={{ color: '#94a3b8' }}>Landing sayfanız, markanızın kurumsal dilini en estetik ve vurucu şekilde yansıtır.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Social Proof */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '24px' }}>Müşteri Güveni İnşası</h3>
                        <p style={{ color: '#64748b' }}>Referanslar, başarı hikayeleri ve gerçek verilerle ikna edici içerik kurgusu.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Scannable Content */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4">
                        <div style={{ textAlign: 'center' }}><h5>Net Başlıklar</h5></div>
                        <div style={{ textAlign: 'center' }}><h5>Vurucu Maddeleme</h5></div>
                        <div style={{ textAlign: 'center' }}><h5>Dengeleyici Görseller</h5></div>
                        <div style={{ textAlign: 'center' }}><h5>İçerik Akışı</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Mobile Perfection */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ direction: 'rtl' }}>
                        <div className="glass" style={{ height: '300px', direction: 'ltr' }}></div>
                        <div style={{ direction: 'ltr' }}>
                            <h2 style={{ fontWeight: 800 }}>Mobilde Kusursuzluk</h2>
                            <p style={{ color: '#64748b' }}>Trafiğin çoğunun mobil olduğu dünyada, landing sayfalarımız her telefon ekranında bir mücevher gibi parlar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Ultimate CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '24px' }}>Kampanyanızı Başlatın</h2>
                    <button className="btn btn-primary">Hemen İletişime Geç</button>
                </div>
            </section>
        </main>
    );
}
