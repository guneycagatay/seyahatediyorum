'use client';

import { motion } from 'framer-motion';

export default function PhotoVideo() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'var(--bg)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#ef4444' }}>Cinematic Vision</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Fotoğraf ve Video<br />Prodüksiyonu</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.25rem', color: '#94a3b8' }}>Durağan anları ölümsüzleştirin, hareketli hikayelerle büyüleyin. Seyahat Ediyorum profesyonelliğiyle sinematik bir deneyim.</p>
                </div>
            </section>

            {/* SECTION 2: Production Quality */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div className="glass" style={{ height: '350px' }}></div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Yüksek Kalite Prodüksiyon</h2>
                            <p style={{ color: '#64748b' }}>4K çekimler, profesyonel ekipman ve sanatsal bakış açısıyla markanızın en iyi halini kadraja sığdırıyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Service Types */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Prodüksiyon Alanlarımız</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Ürün Çekimi</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Kurumsal Tanıtım</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Etkinlik Çekimi</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Post Production */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '24px' }}>Sanatsal Kurgu ve Montaj</h2>
                        <p style={{ color: '#64748b' }}>Ham görüntüleri bir sanat eserine dönüştüren, akıcı kurgu ve gerçekçi renk (color) uygulamaları.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Social Content */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Reels & TikTok</h5></div>
                        <div><h5>YouTube Content</h5></div>
                        <div><h5>Stories</h5></div>
                        <div><h5>Commercials</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Drone & Action */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontWeight: 800, marginBottom: '32px' }}>Havadan ve Aksiyon Çekimleri</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Drone çekimleriyle kuş bakışı vizyon sağlıyor, aksiyon kameralarıyla en dinamik anları yakalıyoruz.</p>
                </div>
            </section>

            {/* SECTION 7: Connect CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Sahnenizi Hazırlayın</h2>
                    <button className="btn btn-primary" style={{ background: '#ef4444' }}>Çekim Planla</button>
                </div>
            </section>
        </main>
    );
}
