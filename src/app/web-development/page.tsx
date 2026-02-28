'use client';

import { motion } from 'framer-motion';

export default function WebDev() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '60vh', background: 'radial-gradient(circle at 0% 0%, var(--bg-subtle) 0%, transparent 60%)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Digital Solutions</span>
                    <h1 className="gradient-text" style={{ fontSize: '4rem', fontWeight: 900 }}>Web Geliştirme<br />Sanatı</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Sadece kod yazmıyoruz; markanızın dijital dünyadaki vizyonunu inşa ediyoruz. Seyahat Ediyorum ekibiyle teknoloji ve sanatın buluşma noktası.</p>
                </div>
            </section>

            {/* SECTION 2: Expertise */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3 style={{ marginBottom: '16px' }}>Hız & Performans</h3>
                            <p style={{ color: '#64748b' }}>Google Vitals standartlarında, ultra hızlı yüklenen ve kullanıcıyı bekletmeyen modern yapılar.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3 style={{ marginBottom: '16px' }}>Ölçeklenebilirlik</h3>
                            <p style={{ color: '#64748b' }}>Büyüyen iş hacminize uyum sağlayan, modüler ve sağlam backend mimarileri.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3 style={{ marginBottom: '16px' }}>SEO Odaklılık</h3>
                            <p style={{ color: '#64748b' }}>Arama motorlarıyla barışık, semantik kodlama prensiplerine tam sadık yapılar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Technical Stack */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Teknolojik Derinlik</h2>
                    <div className="grid-4">
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--primary)' }}>⚡</div>
                            <h4 style={{ marginTop: '10px' }}>Next.js 16</h4>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--primary)' }}>🔷</div>
                            <h4 style={{ marginTop: '10px' }}>TypeScript</h4>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--primary)' }}>🍃</div>
                            <h4 style={{ marginTop: '10px' }}>Node.js</h4>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--primary)' }}>📦</div>
                            <h4 style={{ marginTop: '10px' }}>PostgreSQL</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Workflow */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div className="glass" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '4rem' }}>⚙️</div>
                        </div>
                        <div>
                            <span className="eyebrow">İş Akışımız</span>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '24px' }}>Fikirden Yayına<br />Pürüzsüz Süreç</h2>
                            <p style={{ color: '#64748b' }}>Analiz, prototipleme, geliştirme, test ve canlıya alım aşamalarında tam şeffaflıkla çalışıyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Innovation */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>Geleceği Şekillendirin</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 48px', color: '#94a3b8' }}>AI entegrasyonlu web çözümleri ve interaktif deneyimlerle rakiplerinizin bir adım önüne geçin. Seyahat Ediyorum teknolojiyle vize dünyasını birleştiriyor.</p>
                    <div className="glass" style={{ padding: '60px', display: 'inline-block' }}>
                        <h3 style={{ color: 'var(--white)' }}>Sıradaki Projeniz Bizimle Kanat Lansın?</h3>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Bottom CTA */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '80px', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary), transparent)' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Dijital Dönüşüme Başlayın</h2>
                        <button className="btn btn-primary" style={{ background: 'white', color: 'black' }}>Teklif Alın</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
