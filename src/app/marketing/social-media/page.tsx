'use client';

import { motion } from 'framer-motion';

export default function SocialMedia() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'var(--bg-subtle)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Community Resonance</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Sosyal Medya<br />Yönetimi</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#94a3b8' }}>Sadece paylaşım yapmayın, bir topluluk inşa edin. Seyahat Ediyorum vizyonuyla sosyal medyadaki sesinizi sanata dönüştürün.</p>
                </div>
            </section>

            {/* SECTION 2: Visual Storytelling */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div className="glass" style={{ height: '350px' }}></div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Görsel Hikayecilik</h2>
                            <p style={{ color: '#64748b' }}>Instagram'dan LinkedIn'e, her platformun ruhuna uygun, estetik ve etkileşim odaklı içerik kurguları.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Engagement Metrics */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Etkileşimin Gücü</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Organik Büyüme</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Topluluk Yönetimi</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Influencer Sync</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Strategic Planning */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '24px' }}>Aylık Stratejik Takvim</h2>
                        <p style={{ color: '#64748b' }}>Trendleri takip eden değil, trend yaratan bir içerik planıyla her an gündemde kalın.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Platform Diversity */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Instagram</h5></div>
                        <div><h5>X (Twitter)</h5></div>
                        <div><h5>LinkedIn</h5></div>
                        <div><h5>YouTube Shorts</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Analytics & Insights */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontWeight: 800, marginBottom: '32px' }}>Derinlemesine Raporlama</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Sadece beğeni sayıları değil, gerçek dönüşüm ve erişim verileriyle stratejinizi sürekli optimize edin.</p>
                </div>
            </section>

            {/* SECTION 7: Connect CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Sosyal Dünyada Parlayın</h2>
                    <button className="btn btn-primary">İşbirliği Başlat</button>
                </div>
            </section>
        </main>
    );
}
