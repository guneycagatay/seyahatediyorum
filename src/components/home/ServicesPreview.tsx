'use client';

import { motion } from 'framer-motion';

const services = [
    { icon: '🇨🇦', title: 'Kanada', desc: 'Süresiz oturumdan eğitime, geniş kapsamlı dosya hazırlığı.' },
    { icon: '🇪🇺', title: 'Schengen', desc: 'Doğru ülke seçimi ve hızlı randevu stratejileri.' },
    { icon: '🇬🇧', title: 'İngiltere', desc: 'Standard Visitor ve Tier vize türlerinde profesyonel yaklaşım.' },
    { icon: '🇺🇸', title: 'ABD', desc: 'DS-160 ve mülakat simülasyonu ile onaya giden yol.' }
];

export default function ServicesPreview() {
    return (
        <section className="section" id="hizmetler">
            <div className="layout-container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="eyebrow">Ana Hizmetler</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Dört Kıtada Güçlü Varlık</h2>
                </div>
                <div className="grid-4">
                    {services.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass"
                            style={{ padding: '40px', transition: 'all 0.3s ease' }}
                            whileHover={{ y: -10, background: 'var(--glass-hover)', borderColor: 'var(--primary)' }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '24px' }}>{s.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>{s.title} Vizesi</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
