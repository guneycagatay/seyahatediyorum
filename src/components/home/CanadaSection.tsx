'use client';

import { motion } from 'framer-motion';

export default function CanadaSection() {
    return (
        <section className="section" style={{ background: 'linear-gradient(135deg, rgba(3, 7, 18, 1) 0%, rgba(15, 23, 42, 0.5) 100%)' }}>
            <div className="layout-container">
                <div className="grid-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass"
                        style={{ height: '600px', padding: '0', overflow: 'hidden' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200"
                            alt="Canada"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ padding: '40px 0' }}
                    >
                        <span className="eyebrow">Canada Excellence</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>Kuzeyin Kapılarını<br />Birlikte Açalım.</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.1rem' }}>
                            Kanada vize süreçleri karmaşık puanlama sistemleri ve sıkı evrak takibi gerektirir. "Seyahat Ediyorum" olarak, Express Entry'den turistik vizeye kadar her aşamada yanınızdayız.
                        </p>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary)' }}>✓</span> Profesyonel Niyet Mektubu Yazımı
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary)' }}>✓</span> Finansal Kanıt Stratejileri
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary)' }}>✓</span> Okul Kabul ve Çalışma İzni Danışmanlığı
                            </li>
                        </ul>
                        <a href="/web-development/corporate-website" className="btn btn-primary" style={{ marginTop: '40px' }}>Kanada Sürecini Başlat</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
