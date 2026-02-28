'use client';

import { motion } from 'framer-motion';

export default function USASection() {
    return (
        <section className="section" style={{ background: 'var(--bg)' }}>
            <div className="layout-container">
                <div className="grid-2" style={{ direction: 'rtl' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass"
                        style={{ height: '600px', padding: '0', overflow: 'hidden', direction: 'ltr' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200"
                            alt="USA"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        style={{ padding: '40px 0', direction: 'ltr' }}
                    >
                        <span className="eyebrow">The American Dream</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '32px' }}>Fırsatlar Ülkesine<br />Stratejik Adım.</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.1rem' }}>
                            Amerikan vizesi (B1/B2) sadece bir form değil, bir mülakat sanatıdır. DS-160 formunuzdaki her kelimenin mülakatta karşılığı vardır. Biz bu dengeyi en iyi kuran ekibiz.
                        </p>
                        <ul style={{ listStyle: 'none', color: '#94a3b8' }}>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary)' }}>🏛️</span> Kusursuz DS-160 Formu Girişi
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary)' }}>🏛️</span> Birebir Mülakat Simülasyonları
                            </li>
                            <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--primary)' }}>🏛️</span> Dosya Düzenleme ve Evrak Analizi
                            </li>
                        </ul>
                        <a href="/custom-software/web-apps" className="btn btn-primary" style={{ marginTop: '40px' }}>ABD Başvurusunu Başlat</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
