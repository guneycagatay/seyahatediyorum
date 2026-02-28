import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hakkımızda | SeyahatEdiyorum',
    description: 'Biz kimiz? Vize süreçlerinizi nasıl şeffaf ve güvenilir hale getiriyoruz öğrenin.',
};

export default function Hakkimizda() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>Neden SeyahatEdiyorum?</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Şeffaf, Hızlı ve Güvenilir<br />Danışmanlık Yaklaşımı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Vize başvurusu yapmak stresli ve karmaşık olmak zorunda değil. Premium danışmanlık deneyimimizle tüm süreci sizin için şeffaflaştırıyor, konsolosluklardaki dosyalarınızın takibini anbean yapıyoruz.
                    </p>
                </div>

                <div className="split" style={{ alignItems: 'center' }}>
                    <div className="stats reveal" data-reveal="true" style={{ padding: '40px' }}>
                        <h3 style={{ fontSize: '24px', marginTop: 0, marginBottom: '20px' }}>Değerlerimiz & Çalışma Prensibimiz</h3>
                        <p style={{ color: 'var(--muted)', lineHeight: '1.7', marginBottom: '20px' }}>
                            Klasik vize danışmanı modelinin dışına çıkıyoruz. Ulaşılamayan, dosya sürecini saklayan ve matbu evraklar veren bir yapı yerine; Apple-vari bir şeffaflıkla her bir evrakınızı ve randevu adımınızı dijital olarak takip edebileceğiniz sistemlerle çalışıyoruz.
                        </p>

                        <div className="statsGrid" style={{ marginTop: '30px' }}>
                            <div className="stat">
                                <strong>Şeffaf Rapor</strong>
                                <span>Her adım anında cebinize ulaştırılır.</span>
                            </div>
                            <div className="stat">
                                <strong>Hızlı Aksiyon</strong>
                                <span>Erken randevu botlarımız ve konsolosluk takibi.</span>
                            </div>
                            <div className="stat">
                                <strong>Tam Kontrol</strong>
                                <span>Checklist ile eksiksiz evrak hazırlığı.</span>
                            </div>
                            <div className="stat">
                                <strong>Tek Nokta</strong>
                                <span>Tek bir uzmandan kişiselleştirilmiş hizmet.</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonials reveal" data-reveal="true">
                        <div className="quote">
                            <p>“Konsolosluğa girmeden önce tüm dosyalarım hazırdı ve neleri söyleyeceğimi biliyordum. Tüm stresimi aldılar!”</p>
                            <footer>— Ömer F. (Yazılımcı)</footer>
                        </div>
                        <div style={{ height: '12px' }}></div>
                        <div className="quote">
                            <p>“Kanada red dosyamın nedenlerini bulup yeni başvuru hazırladılar ve vizem 10 yıllık onaylandı. Teşekkürler!”</p>
                            <footer>— Elif Ş. (Öğrenci)</footer>
                        </div>
                        <div style={{ height: '12px' }}></div>
                        <div className="quote">
                            <p>“Yarın uçağım varken Dubai vizemi son anda çıkardılar, hızları karşısında hayran kaldım.”</p>
                            <footer>— Murat E. (İş İnsanı)</footer>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
