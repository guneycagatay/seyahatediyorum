'use client';

import { motion } from 'framer-motion';

const steps = [
    { n: '01', t: 'Profil Analizi', d: 'Background analizi ile en uygun vize stratejisini belirliyoruz.' },
    { n: '02', t: 'Evrak Hazırlığı', d: 'Eksiksiz ve konsolosluk diline uygun dosyalama yapıyoruz.' },
    { n: '03', t: 'Başvuru & Takip', d: 'Randevu alma ve başvuranın her aşamada bilgilendirilmesi.' },
    { n: '04', t: 'Onay & Yanınızdayız', d: 'Vize sonrası seyahat sürecinizde de desteğimizi sürdürüyoruz.' }
];

export default function Process() {
    return (
        <section className="section" style={{ background: 'var(--bg-subtle)' }}>
            <div className="layout-container">
                <div style={{ marginBottom: '80px' }}>
                    <span className="eyebrow">Nasıl Çalışıyoruz?</span>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900 }}>Dört Adımda Onaya Giden Yol</h2>
                </div>
                <div className="grid-2">
                    {steps.map((st, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass"
                            style={{ padding: '60px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}
                        >
                            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.3 }}>{st.n}</div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>{st.t}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>{st.d}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
