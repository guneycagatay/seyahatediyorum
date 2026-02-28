'use client';

import { motion } from 'framer-motion';

export default function Automation() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'var(--bg)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: 'var(--primary)' }}>Seamless Efficiency</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Otomasyon ve<br />Entegrasyon</h1>
                    <p style={{ maxWidth: '650px', fontSize: '1.25rem', color: '#94a3b8' }}>Tekrarlayan işleri makinelere bırakın, zamanınızı vizyonunuza harcayın. Seyahat Ediyorum ile dijital iş akışlarınızı otonom hale getirin.</p>
                </div>
            </section>

            {/* SECTION 2: Process Mapping */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Süreç Analizi ve<br />Haritalama</h2>
                            <p style={{ color: '#64748b' }}>Mevcut iş akışlarınızı derinlemesine analiz ederek, en verimli otomasyon senaryolarını sizin için tasarlıyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Integration Hub */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Merkezi Entegrasyon Merkezi</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Webhook Bağlantıları</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Zappier & Make</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Sync Veri Akışı</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Error Handling */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '20px' }}>Kusursuz Hata Yönetimi</h2>
                        <p style={{ color: '#64748b' }}>Otomasyon süreçlerinde oluşabilecek aksaklıkları anında tespit eden ve müdahale eden akıllı sistemler.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Efficiency Stats */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>%40 Zaman Tasarrufu</h5></div>
                        <div><h5>Sıfır İnsan Hatası</h5></div>
                        <div><h5>7/24 Çalışma</h5></div>
                        <div><h5>Düşük Operasyonel Maliyet</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Custom Scripts */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontWeight: 800, marginBottom: '32px' }}>Özel Script ve Araçlar</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Standart araçların yetmediği yerde, işinize özel yazdığımız scriptlerle sınırsız entegrasyon sağlıyoruz.</p>
                </div>
            </section>

            {/* SECTION 7: Connect CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Sistemlerinizi Konuşturun</h2>
                    <button className="btn btn-primary" style={{ background: '#ec4899' }}>Entegrasyon Analizi</button>
                </div>
            </section>
        </main>
    );
}
