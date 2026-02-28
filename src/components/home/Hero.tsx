'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="hero" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(3, 7, 18, 0.9), rgba(3, 7, 18, 0.6)), url('file:///Users/macbookpro/.gemini/antigravity/brain/fe96b217-ecea-41e7-ae8b-1c321dac1266/visa_consultancy_hero_bg_1772301507146.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="layout-container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="eyebrow">Dünya Kapıları Aralanıyor</span>
                    <h1 className="gradient-text" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '24px' }}>
                        Vizeniz Sadece<br />Bir Başvuru Değil,<br />Bir Sanat Eseri.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 48px' }}>
                        Kanada'nın karlı dağlarından Schengen'in tarihi sokaklarına... <br />
                        Bürokrasiyi sanata dönüştüren profesyonel vize danışmanlığı.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="#hizmetler" className="btn btn-primary">Hizmetleri Keşfet</a>
                        <a href="/about" className="btn" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'white' }}>Biz Kimiz?</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
