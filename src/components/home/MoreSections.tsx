'use client';

import { motion } from 'framer-motion';

export default function MoreSections() {
    return (
        <>
            {/* SECTION 9: Trust & Stats */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '60px', textAlign: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>15+</h3>
                            <p style={{ color: '#94a3b8' }}>Yıllık Deneyim</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>50K</h3>
                            <p style={{ color: '#94a3b8' }}>Randevu Alındı</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>%99</h3>
                            <p style={{ color: '#94a3b8' }}>Müşteri Memnuniyeti</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3.5rem', fontWeight: 900 }}>24h</h3>
                            <p style={{ color: '#94a3b8' }}>Hızlı Geri Dönüş</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10: Testimonials */}
            <section className="section" style={{ background: 'var(--bg)' }}>
                <div className="layout-container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span className="eyebrow">Referanslar</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px' }}>Yüzlerce Mutlu Gezgin</h2>
                    </div>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '40px' }}>
                            <p style={{ fontStyle: 'italic', color: '#cbd5e1', marginBottom: '24px' }}>"Kanada vizesi alırken yaşadığım stresi tamamen aldılar. Dosyalama süreçleri inanılmaz profesyonel."</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6366f1' }}></div>
                                <div><h5 style={{ fontWeight: 800 }}>Mert Y.</h5><p style={{ fontSize: '0.8rem', color: '#64748b' }}>Yazılımcı</p></div>
                            </div>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <p style={{ fontStyle: 'italic', color: '#cbd5e1', marginBottom: '24px' }}>"Schengen randevusu bulamazken 2 gün içinde randevumu aldılar. Kesinlikle tavsiye ederim."</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6366f1' }}></div>
                                <div><h5 style={{ fontWeight: 800 }}>Selin A.</h5><p style={{ fontSize: '0.8rem', color: '#64748b' }}>Mimar</p></div>
                            </div>
                        </div>
                        <div className="glass" style={{ padding: '40px' }}>
                            <p style={{ fontStyle: 'italic', color: '#cbd5e1', marginBottom: '24px' }}>"ABD mülakat simülasyonu sayesinde konsoloslukta hiç heyecan yapmadım. Teşekkürler."</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6366f1' }}></div>
                                <div><h5 style={{ fontWeight: 800 }}>Kemal T.</h5><p style={{ fontSize: '0.8rem', color: '#64748b' }}>İş İnsanı</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 11: Partners */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <span className="eyebrow" style={{ marginBottom: '40px' }}>Partnerlerimiz</span>
                    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '60px', opacity: 0.4, filter: 'grayscale(1)', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>TRUSTPILOT</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>GOOGLE</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>VFS GLOBAL</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>TLS CONTACT</h3>
                    </div>
                </div>
            </section>

            {/* SECTION 12: FAQ */}
            <section className="section">
                <div className="layout-container">
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Merak Edilenler</h2>
                    <div className="grid-2">
                        <div className="glass" style={{ padding: '30px' }}>
                            <h4 style={{ marginBottom: '12px' }}>Vize başvurusu ne kadar sürer?</h4>
                            <p style={{ color: '#64748b' }}>Ülkeye ve başvuru türüne göre 15 gün ile 3 ay arasında değişiklik gösterebilir.</p>
                        </div>
                        <div className="glass" style={{ padding: '30px' }}>
                            <h4 style={{ marginBottom: '12px' }}>Ret alırsam ne olur?</h4>
                            <p style={{ color: '#64748b' }}>Ret gerekçelerini analiz edip, itiraz süreci veya yeniden başvuru stratejisi geliştiriyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '30px' }}>
                            <h4 style={{ marginBottom: '12px' }}>Ücret iadesi var mı?</h4>
                            <p style={{ color: '#64748b' }}>Hizmet bedelimiz ve konsolosluk harçları ile ilgili politikamızı ön değerlendirmede paylaşıyoruz.</p>
                        </div>
                        <div className="glass" style={{ padding: '30px' }}>
                            <h4 style={{ marginBottom: '12px' }}>Elden evrak teslimi şart mı?</h4>
                            <p style={{ color: '#64748b' }}>Dijital çağdayız; çoğu işlemi online portalımız üzerinden güvenle yürütebiliyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 13: News */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Sektörel Haberler</h2>
                        <a href="/blog" className="btn" style={{ background: 'var(--glass)', color: 'white' }}>Tümünü Gör</a>
                    </div>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}>
                            <div style={{ height: '200px', background: '#1e293b', borderRadius: '16px', marginBottom: '20px' }}></div>
                            <h4 style={{ fontWeight: 800 }}>Kanada Göçmenlik Politikalarındaki Değişim</h4>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '10px' }}>2026 yılı için belirlenen yeni kotalar ve kriterler açıklandı...</p>
                        </div>
                        <div className="glass" style={{ padding: '30px' }}>
                            <div style={{ height: '200px', background: '#1e293b', borderRadius: '16px', marginBottom: '20px' }}></div>
                            <h4 style={{ fontWeight: 800 }}>Schengen Vizelerinde Dijital Dönem</h4>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '10px' }}>Artık pek çok AB ülkesi başvuruları tamamen online portal üzerinden...</p>
                        </div>
                        <div className="glass" style={{ padding: '30px' }}>
                            <div style={{ height: '200px', background: '#1e293b', borderRadius: '16px', marginBottom: '20px' }}></div>
                            <h4 style={{ fontWeight: 800 }}>ABD Randevu Bekleme Süreleri Kısaldı</h4>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '10px' }}>Konsolosluk kapasite artışıyla birlikte randevu tarihlerinde...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 14: CTA */}
            <section className="section" style={{ textAlign: 'center', overflow: 'hidden' }}>
                <div className="layout-container">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="glass"
                        style={{ padding: '100px 40px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), transparent)' }}
                    >
                        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.04em' }}>Dünyayı Keşfetmeye Hazır Mısın?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>Gelin, vize dosyanızı bir sanat eserine dönüştürelim ve başarı şansınızı en üst seviyeye çıkaralım.</p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <a href="/contact" className="btn btn-primary">Başvurumu Başlat</a>
                            <a href="https://wa.me/905403000356" target="_blank" className="btn" style={{ background: '#22c55e', color: 'white' }}>WhatsApp Hızlı Hat</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
