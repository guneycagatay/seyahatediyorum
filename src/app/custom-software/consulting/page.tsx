'use client';

import { motion } from 'framer-motion';

export default function Consulting() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'var(--bg)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#a855f7' }}>Strategic Roadmap</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Teknoloji<br />Danışmanlığı</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: '#94a3b8' }}>Doğru teknoloji, doğru strateji. İş hedeflerinize en kısa yoldan ulaşmanız için dijital yol haritanızı Seyahat Ediyorum ile belirleyin.</p>
                </div>
            </section>

            {/* SECTION 2: Discovery & Audit */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Teknolojik Denetim</h2>
                            <p style={{ color: '#64748b' }}>Mevcut sistemlerinizi analiz ediyor, zayıf noktaları tespit ederek verimliliği artıran çözümler sunuyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Solution Design */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Uçtan Uca Çözüm Tasarımı</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Mimari Tasarım</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Stack Seçimi</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Bütçe Planlama</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Digital Transformation */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Dijital Dönüşüm Rehberliği</h2>
                    <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>Sadece yazılım değil, kültür ve süreç dönüşümünde de yanınızdayız. En güncel trendlerle işinizi geleceğe hazırlayın.</p>
                </div>
            </section>

            {/* SECTION 5: Long Term Support */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>Sürekli Danışmanlık</h5></div>
                        <div><h5>Eğitim Desteği</h5></div>
                        <div><h5>Gelecek Vizyonu</h5></div>
                        <div><h5>Güvenlik Politikası</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Strategy CTA */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '24px' }}>Yol Haritanızı Çizelim</h2>
                    <button className="btn btn-primary" style={{ background: '#a855f7' }}>Strateji Toplantısı Planla</button>
                </div>
            </section>
        </main>
    );
}
