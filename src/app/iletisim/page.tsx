import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'İletişim | SeyahatEdiyorum',
    description: 'Vize başvurularınız ve danışmanlık hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin.',
};

export default function Iletisim() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>Bizimle İrtibata Geçin</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>İletişim & Destek</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Vize sürecinizi planlamak, aklınızdaki sorulara yanıt bulmak ve mevcut başvurunuz hakkında bilgi almak için bizimle iletişime geçin.
                    </p>
                </div>

                <div className="split" style={{ alignItems: 'flex-start', maxWidth: '1000px', margin: '0 auto', gap: '30px' }}>

                    {/* INFO SIDE */}
                    <div className="ctaCard reveal" data-reveal="true" style={{ padding: '40px', textAlign: 'left' }}>
                        <h3 style={{ fontSize: '28px', marginBottom: '16px', marginTop: 0 }}>İletişim Bilgileri</h3>
                        <p className="lead2" style={{ margin: '0 0 30px 0', fontSize: '15px' }}>Hangi ülkeye ve ne amaçla gideceğinizi iletin, rotanızı çizelim. Bize aşağıdaki kanallardan ulaşabilirsiniz.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className="contactItem" style={{ background: 'rgba(0,0,0,0.02)', padding: '20px', justifyContent: 'flex-start' }}>
                                <span style={{ fontSize: '16px' }}>📞 +90 850 000 0000</span>
                            </div>
                            <div className="contactItem" style={{ background: 'rgba(0,0,0,0.02)', padding: '20px', justifyContent: 'flex-start' }}>
                                <span style={{ fontSize: '16px' }}>✉️ info@seyahatediyorum.com</span>
                            </div>
                            <div className="contactItem" style={{ background: 'rgba(0,0,0,0.02)', padding: '20px', justifyContent: 'flex-start' }}>
                                <span style={{ fontSize: '16px' }}>📍 İstanbul, Türkiye</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            <a className="btn primary" href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" data-ripple="true" style={{ padding: '16px 30px', fontSize: '15px', width: '100%', display: 'block', textAlign: 'center' }}>WhatsApp Destek Hattı</a>
                        </div>
                    </div>

                    {/* FORM SIDE */}
                    <div className="card reveal" data-reveal="true" style={{ padding: '40px' }}>
                        <h3 style={{ fontSize: '24px', margin: '0 0 24px 0', letterSpacing: '-0.02em' }}>Bilgi Al & Soru Sor</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} action="#">

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>Ad Soyad</label>
                                    <input type="text" placeholder="Adınız Soyadınız" required style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '14px', outline: 'none', transition: 'border 0.2s', width: '100%' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>Telefon</label>
                                    <input type="tel" placeholder="05XX XXX XX XX" required style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '14px', outline: 'none', transition: 'border 0.2s', width: '100%' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>E-Posta Adresi</label>
                                <input type="email" placeholder="ornek@posta.com" style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '14px', outline: 'none', width: '100%' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>Gitmek İstediğiniz Ülke</label>
                                <select style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '14px', outline: 'none', width: '100%', appearance: 'none', cursor: 'pointer' }}>
                                    <option value="">Seçiniz</option>
                                    <option value="amerika">Amerika</option>
                                    <option value="schengen">Schengen</option>
                                    <option value="ingiltere">İngiltere</option>
                                    <option value="kanada">Kanada</option>
                                    <option value="dubai">Dubai (BAE)</option>
                                    <option value="cin">Çin</option>
                                    <option value="diger">Diğer</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>Mesajınız</label>
                                <textarea placeholder="Durumunuzu veya aklınıza takılan soruları yazın..." required rows={4} style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '14px', outline: 'none', width: '100%', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" className="btn" style={{ background: '#1d1d1f', color: '#fff', border: '1px solid rgba(0,0,0,0.1)', padding: '16px', marginTop: '10px', width: '100%', fontSize: '15px' }} data-ripple="true">Formu Gönder</button>
                            <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--muted)', marginTop: '8px' }}>Bilgileriniz KVKK kapsamında korunmakta olup 3. şahıslarla paylaşılmaz.</p>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}
