'use client';

import { motion } from 'framer-motion';

export default function CRM_ERP() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="hero" style={{ minHeight: '50vh', background: 'radial-gradient(circle at 0% 100%, #1e1b4b, var(--bg))' }}>
                <div className="layout-container animate">
                    <span className="eyebrow" style={{ color: '#6366f1' }}>Core Business Intelligence</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>CRM ve ERP<br />Sistemleri</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>İşletmenizin kalbinde atan, verimliliği artıran ve tüm süreçleri tek merkezden yöneten özel CRM ve ERP çözümleri. Seyahat Ediyorum farkıyla yönetin.</p>
                </div>
            </section>

            {/* SECTION 2: Customer Centricity */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2">
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Müşteri İlişkileri (CRM)</h3>
                            <p style={{ color: '#64748b' }}>Aday müşteriden sadık müşteriye kadar tüm yolculuğu şeffafça takip edin ve yönetin.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Kaynak Yönetimi (ERP)</h3>
                            <p style={{ color: '#64748b' }}>Finans, stok, insan kaynakları ve operasyonu kusursuz bir uyumla tek platformda birleştirin.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Custom Modules */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px', textAlign: 'center' }}>İşinize Özel Modüller</h2>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Satış Hunisi</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Finansal Raporlama</h5></div>
                        <div className="glass" style={{ padding: '30px', textAlign: 'center' }}><h5>Envanter Takibi</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Data Consolidation */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Tek Kaynak, Tek Hakikat</h2>
                    <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>Farklı departmanlardaki verileri tek bir havuzda toplayarak, bilgi kirliliğini önlüyor ve karar alma süreçlerinizi hızlandırıyoruz.</p>
                </div>
            </section>

            {/* SECTION 5: Mobile Dashboard */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ fontSize: '5rem' }}>📊</div>
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Mobil Yönetim Paneli</h2>
                            <p style={{ color: '#64748b' }}>Ofise bağlı kalmadan, tüm iş süreçlerinizi cep telefonunuzdan anlık olarak izleyin ve yönetin.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Integration Excellence */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        <div><h5>API Entegrasyonu</h5></div>
                        <div><h5>Outlook/Google Sync</h5></div>
                        <div><h5>Muhasebe Entegrasyonu</h5></div>
                        <div><h5>Bankalarla Bağlantı</h5></div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: System Upgrade CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Operasyonunuzu Modernize Edin</h2>
                    <button className="btn btn-primary" style={{ background: '#3b82f6' }}>Demo Talep Edin</button>
                </div>
            </section>
        </main>
    );
}
