'use client';

import { motion } from 'framer-motion';

export default function ContentProduction() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(to right, #030712, #1e3a8a)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#60a5fa' }}>Narrative Excellence</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>İçerik Üretimi ve<br />Hikayecilik</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: '#94a3b8' }}>Duygulara dokunan, harekete geçiren içerikler. Seyahat Ediyorum farkıyla markanızın hikayesini en etkileyici dille yazıyoruz.</p>
                </div>
            </section>

            {/* SECTION 2: Copywriting Art */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Reklam Yazarlığı (Copywriting)</h2>
                            <p style={{ color: '#64748b' }}>Sadece bilgi veren değil, ikna eden ve markanızın sesini özgün kılan metin kurguları. Konsolosluk niyet mektubundaki titizliği reklamlarınıza taşıyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '4rem' }}>✍️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Visual Content */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Görsel İçerik Stratejisi</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Blog Yazıları</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Whitepapers</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>PDF Rehberler</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Viral Content Design */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '24px' }}>Paylaşılabilir Viral Kurgular</h2>
                        <p style={{ color: '#64748b' }}>Kullanıcıların birbirine gönderdiği, organik erişimi tetikleyen ve marka görünürlüğünü artıran yaratıcı kurgular.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Multi Format */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>SEO Uyumlu</h5></div>
                        <div><h5>Marka Sesli</h5></div>
                        <div><h5>Hedef Odaklı</h5></div>
                        <div><h5>Özgün</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Strategy Roadmap */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontWeight: 800, marginBottom: '32px' }}>İçerik Yol Haritası</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Sürekli ve tutarlı bir iletişim için haftalık ve aylık bazda planlanmış içerik stratejileriyle yanınızdayız.</p>
                </div>
            </section>

            {/* SECTION 7: Story CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Hikayenizi Birlikte Yazalım</h2>
                    <button className="btn btn-primary" style={{ background: '#3b82f6' }}>İçerik Planı Talep Et</button>
                </div>
            </section>
        </main>
    );
}
