'use client';

import { motion } from 'framer-motion';

export default function Marketing() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '60vh', background: 'radial-gradient(ellipse at bottom, #312e81, var(--bg))' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Creative Influence</span>
                    <h1 className="gradient-text" style={{ fontSize: '4.5rem', fontWeight: 900 }}>Dijital Pazarlama &<br />Marka Yönetimi</h1>
                    <p style={{ maxWidth: '650px', fontSize: '1.25rem', color: 'var(--text-muted)' }}>Hikayenizi anlatın, kitlelere hükmedin. Seyahat Ediyorum ile markanızın sesini tüm dünyaya duyurun.</p>
                </div>
            </section>

            {/* SECTION 2: 360 Marketing */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>360 Derece<br />Pazarlama Stratejisi</h2>
                            <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '24px' }}>Veri odaklı analizler ve yaratıcı içerik kurgularıyla, markanızı hedef kitlesiyle en doğru noktada buluşturuyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '6rem' }}>📢</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Service Ecosystem */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4">
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>SEO & SEM</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Social Media</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Ads Mgmt</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Branding</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Viral Growth */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Viral Büyüme ve Etkileşim</h2>
                        <p style={{ color: '#64748b' }}>Sıradan reklamların ötesinde, organik büyümeyi tetikleyen ve topluluk oluşturan stratejiler.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Data Insights */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>Rakamlarla Konuşalım</h2>
                    <div className="grid-3">
                        <div><h5>ROI Takibi</h5></div>
                        <div><h5>CTR Analizi</h5></div>
                        <div><h5>Conversion Rate</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Marketing CTA */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <div className="glass" style={{ padding: '100px', background: 'linear-gradient(135deg, #312e81, transparent)' }}>
                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '24px' }}>Markanızı Yükseltin</h2>
                        <button className="btn btn-primary" style={{ background: '#f43f5e' }}>Pazarlama Planı Talep Et</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
