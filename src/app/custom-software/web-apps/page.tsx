'use client';

import { motion } from 'framer-motion';

export default function WebApps() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="section" style={{ background: 'linear-gradient(to bottom right, #030712, #111827)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Interactive Systems</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Modern Web<br />Uygulamaları</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Karmaşık iş süreçlerinizi basitleştiren, kullanıcı dostu ve ölçeklenebilir web tabanlı SaaS ve iş uygulamaları. Seyahat Ediyorum tecrübesiyle dijitalleşin.</p>
                </div>
            </section>

            {/* SECTION 2: SaaS Architecture */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div className="glass" style={{ height: '350px' }}></div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>SaaS Odaklı Mimari</h2>
                            <p style={{ color: '#64748b' }}>Multi-tenant yapılar, abonelik yönetimleri ve esnek veri modelleriyle geleceğin platformlarını bugünden inşa ediyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Performance Layers */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Yüksek Performans Katmanları</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Gerçek Zamanlı Veri</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Bulut Senkronizasyon</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Optimize Veritabanı</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Scalable UI */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '24px' }}>Ölçeklenebilir Arayüzler</h2>
                        <p style={{ color: '#64748b' }}>Binlerce kullanıcının aynı anda sorunsuz deneyim yaşayacağı, pürüzsüz ve hızlı arayüzler tasarlıyor ve kodluyoruz.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: API Rich Ecosystem */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2">
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Zengin API Entegrasyonları</h2>
                            <p style={{ color: '#64748b' }}>Üçüncü taraf servislerle (Ödeme, CRM, ERP) tam uyumlu, pürüzsüz veri akışı sağlayan API katmanları.</p>
                        </div>
                        <div style={{ fontSize: '5rem', textAlign: 'center' }}>🔌</div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Security Protocols */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>JWT Auth</h5></div>
                        <div><h5>Role Based Access</h5></div>
                        <div><h5>Encryption</h5></div>
                        <div><h5>Logging</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: App Launch CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Uygulamanızı Hayata Geçirin</h2>
                    <button className="btn btn-primary">Hemen Teklif Alın</button>
                </div>
            </section>
        </main>
    );
}
