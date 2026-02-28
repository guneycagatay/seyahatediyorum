'use client';

import { motion } from 'framer-motion';

export default function BrandingDesign() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'radial-gradient(circle at 100% 0%, #1e1b4b, var(--bg))' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#fbbf24' }}>Visual Sovereignty</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Branding ve Grafik Tasarım</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Markanızı görsel bir şölene dönüştürün. Logodan kurumsal kimliğe, her detayda estetik ve profesyonellik. Seyahat Ediyorum farkıyla parlayın.</p>
                </div>
            </section>

            {/* SECTION 2: Identity Design */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2">
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Logo Tasarımı</h3>
                            <p style={{ color: '#64748b' }}>Eski dünyaya yeni bir imza. Markanızın ruhunu tek bir sembolle anlatan ikonik tasarımlar.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Kurumsal Kimlik</h3>
                            <p style={{ color: '#64748b' }}>Kartvizitten antetli kağıda, markanızın tüm görsel temas noktalarında kusursuz bütünlük.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Visual Language */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px', textAlign: 'center' }}>Görsel Bir Dil İnşası</h2>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Renk Psikolojisi</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Tipografi</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Görsel Hiyerarşi</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Print & Digital */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Baskıdan Dijitale Sanat</h2>
                    <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>Her mecrada mükemmel sonuç. Dergi ilanlarından sosyal medya postlarına, kalite tesadüf değildir.</p>
                </div>
            </section>

            {/* SECTION 5: Branding Guide */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ fontSize: '5rem' }}>📘</div>
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Marka Klavuzu (Brandbook)</h2>
                            <p style={{ color: '#64748b' }}>Markanızın nasıl görünmesi ve konuşması gerektiğini belirleyen profesyonel standartlar rehberi.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Graphic Assets */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Icon Set</h5></div>
                        <div><h5>Illustrations</h5></div>
                        <div><h5>Patterns</h5></div>
                        <div><h5>Layouts</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Identity CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Kimliğinizi Yeniden Tanımlayın</h2>
                    <button className="btn btn-primary" style={{ background: '#f59e0b' }}>Tasarım Sürecini Başlat</button>
                </div>
            </section>
        </main>
    );
}
