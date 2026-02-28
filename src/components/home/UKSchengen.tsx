'use client';

import { motion } from 'framer-motion';

export default function UKSchengenSection() {
    return (
        <>
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                            <span className="eyebrow">British Precision</span>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>İngiltere Vizesinde<br />Hata Payı Yoktur.</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                                İngiltere'nin katı vize kuralları arasında kaybolmayın. Profesyonel ekibimiz, başvurunuzun ret almamasını sağlayacak o kritik detaylara hakimdir.
                            </p>
                            <div className="glass" style={{ padding: '24px', marginBottom: '32px' }}>
                                <h4 style={{ color: 'var(--white)', marginBottom: '12px' }}>UK Destek Paketi:</h4>
                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Dosya planı, gerekçe oluşturma ve randevu takibi tek pakette.</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
                            <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800" alt="UK" className="glass" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section" id="schengen">
                <div className="layout-container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <span className="eyebrow">European Journey</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900 }}>Schengen: Avrupa'nın<br />Kalbine Yolculuk</h2>
                    </div>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Doğru Ülke Seçimi</h3>
                            <p style={{ color: '#64748b', marginTop: '16px' }}>En yüksek onay ihtimali olan ülkeden giriş yaparak vize alma şansınızı maksimize ediyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Seyahat Planlama</h3>
                            <p style={{ color: '#64748b', marginTop: '16px' }}>Uçak ve otel rezervasyonlarınızın vize kurallarına uygunluğunu denetliyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3>Dosya Takibi</h3>
                            <p style={{ color: '#64748b', marginTop: '16px' }}>Schengen sistemindeki en güncel form ve kriterlere göre dosyanızı finalize ediyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
