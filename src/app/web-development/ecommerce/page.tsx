'use client';

import { motion } from 'framer-motion';

export default function Ecommerce() {
    return (
        <main style={{ paddingTop: '100px' }}>
            {/* SECTION 1: HERO */}
            <section className="section" style={{ background: 'radial-gradient(circle at 100% 0%, var(--primary-glow) 0%, transparent 50%)' }}>
                <div className="layout-container animate">
                    <span className="eyebrow">Artistic Commerce</span>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Dijital Ticaretin<br />Yeni Boyutu</h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>E-ticaret sadece satış yapmak değildir; bir hikaye anlatmaktır. Seyahat Ediyorum gücüyle global pazaryerine hükmedin.</p>
                </div>
            </section>

            {/* SECTION 2: User Experience */}
            <section className="section">
                <div className="layout-container">
                    <div className="grid-2">
                        <div className="glass" style={{ padding: '50px' }}>
                            <h3>Pürüzsüz Ödeme</h3>
                            <p style={{ color: '#64748b' }}>Sepet terk oranlarını minimize eden, tek tıkla ödeme sistemleri.</p>
                        </div>
                        <div className="glass" style={{ padding: '50px' }}>
                            <h3>Akıllı Filtreleme</h3>
                            <p style={{ color: '#64748b' }}>Yapay zeka destekli arama ve filtreleme seçenekleriyle ürün bulmayı kolaylaştırın.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Logistics Integration */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '40px' }}>Ekosistem Entegrasyonu</h2>
                    <div className="grid-3">
                        <div className="glass" style={{ padding: '30px' }}><h4>Kargo Takibi</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Stok Yönetimi</h4></div>
                        <div className="glass" style={{ padding: '30px' }}><h4>Marketplace</h4></div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: High End Visuals */}
            <section className="section">
                <div className="layout-container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Ürünlerinizi Sanata Dönüştürün</h2>
                    <p style={{ color: '#64748b' }}>Premium tasarım anlayışımızla ürünlerinizin değerini dijitalde artırın.</p>
                </div>
            </section>

            {/* SECTION 5: Mobile First */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ fontSize: '4rem' }}>📱</div>
                        <div>
                            <h2 style={{ fontWeight: 800 }}>Mobil Alışveriş Deneyimi</h2>
                            <p style={{ color: '#64748b' }}>Her ekran boyutunda mükemmel çalışan, uygulama hissi veren e-ticaret siteleri.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Analytics */}
            <section className="section">
                <div className="layout-container">
                    <div className="glass" style={{ padding: '40px' }}>
                        <h4>Veri Odaklı Kararlar</h4>
                        <p style={{ color: '#64748b' }}>Kullanıcı davranışlarını anlık takip eden gelişmiş raporlama araçları.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Sales CTA */}
            <section className="section" style={{ background: 'var(--bg-subtle)' }}>
                <div className="layout-container">
                    <div className="glass" style={{ textAlign: 'center', padding: '100px', background: 'linear-gradient(135deg, green, transparent)' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '24px' }}>Global Satışlara Başlayın</h2>
                        <button className="btn btn-primary" style={{ background: '#22c55e' }}>Mağazanızı Kurun</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
