'use client';

import { motion } from 'framer-motion';

export default function Vision() {
    return (
        <section className="section" style={{ background: 'radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.05) 0%, transparent 40%)' }}>
            <div className="layout-container">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="eyebrow">Vizyonumuz</span>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '32px' }}>
                            Bürokrasiyi Sanata<br />Dönüştürüyoruz.
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '24px' }}>
                            Her vize başvurusu bizim için bir tuvaldir. Sizin kişisel ve profesyonel geçmişinizi, seyahat amacınızı ve gelecek planlarınızı en doğru renklerle harmanlayarak, konsoloslukların aradığı o "mükemmel tabloyu" oluşturuyoruz.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            Sadece form doldurmuyoruz; sizin için bir yol haritası çiziyoruz. Sınırların sadece haritalarda kaldığı bir dünya vizyonuyla hareket ediyoruz.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="glass"
                        style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                    >
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🎨</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Stratejik Derinlik</h3>
                            <p style={{ color: '#64748b' }}>Sıradan bir işlem değil, her detaya hükmeden bir strateji.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
