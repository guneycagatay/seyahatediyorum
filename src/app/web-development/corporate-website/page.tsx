'use client';

import { motion } from 'framer-motion';

export default function CorporateWebsite() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="section" style={{ background: 'linear-gradient(to right, #030712, #0f172a)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Corporate Presence</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Kurumsal Web<br />Mimarlığı</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#94a3b8' }}>Şirketinizin dijital dünyadaki prestijli kimliğini profesyonelce inşa ediyoruz. Seyahat Ediyorum tecrübesiyle kurumsal vizyonunuzu dijitale taşıyın.</p>
                </div>
            </section>

            {/* SECTION 2: Global Branding */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Global Marka<br />Erişilebilirliği</h2>
                            <p style={{ color: '#64748b' }}>Dünya standartlarında, çok dilli ve global kullanıcı kitlesine hitap eden yapılar oluşturuyoruz.</p>
                        </div>
                        <div className="glass" style={{ height: '300px' }}></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Compliance */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '40px' }}>Regülasyon ve Güvenlik</h3>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>KVKK Uyumu</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>SSL Güvenliği</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Hızlı Backup</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Interactive Showcase */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '60px', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '20px' }}>Dinamik İçerik Yönetimi</h2>
                        <p style={{ color: '#64748b' }}>Kullanımı kolay yönetim panelleriyle sitenizi her an güncel tutun.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Trust Indicators */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-4">
                        <div style={{ padding: '20px', textAlign: 'center' }}><h5>Güven</h5></div>
                        <div style={{ padding: '20px', textAlign: 'center' }}><h5>İtibar</h5></div>
                        <div style={{ padding: '20px', textAlign: 'center' }}><h5>Vizyon</h5></div>
                        <div style={{ padding: '20px', textAlign: 'center' }}><h5>Kalite</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Strategy */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '32px' }}>Dönüşüm Odaklı Strateji</h2>
                    <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Sadece ziyaretçi değil, potansiyel iş ortağı ve müşteri kazandıran yapılar.</p>
                </div>
            </section>

            {/* SECTION 7: Conclusion CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Kurumsal Geleceğinizi İnşa Edin</h2>
                    <button className="btn btn-primary">Danışmanlık Alın</button>
                </div>
            </section>
        </main>
    );
}
