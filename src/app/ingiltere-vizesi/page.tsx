import { Metadata } from 'next';
import Link from 'next/link';
import SidebarContactForm from '@/components/SidebarContactForm';

export const metadata: Metadata = {
    title: 'İngiltere Vizesi Danışmanlığı | SeyahatEdiyorum',
    description: 'Birleşik Krallık vize başvurularınızda online form, belge yükleme ve TLS Contact randevu süreçlerinde uçtan uca uzman danışmanlık.',
};

export default function IngiltereVizesi() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>6 Aylık - 10 Yıllık Vize Fırsatı</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>İngiltere Vizesi Danışmanlığı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Birleşik Krallık (İngiltere, İskoçya, Galler, Kuzey İrlanda) seyahatlerinizde, karmaşık online başvuru ekranları ve evrak tarama süreçleriyle uğraşmadan garantili bir başvuru rotası çizin.
                    </p>
                </div>

                <div className="grid3" style={{ gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '24px' }}>İngiltere Vize Dosyası Nasıl Hazırlanır?</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                İngiltere Konsolosluğu başvuruları "TLS Contact" adı verilen yetkili başvuru merkezi aracılığıyla kabul etmektedir. Schengen ülkelerinden farklı olarak bu sistemde tüm evraklar online portala (self-upload sistemi ile) PDF formatında taranarak yüklenmelidir.
                            </p>
                            <ul style={{ color: 'var(--muted)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Form Doldurma Hassasiyeti:</strong> İngiltere vize formu son derece uzun, detaylı ve bağlayıcı sorulardan oluşur. Tüm gelirlerinizin, seyahat giderlerinizle tutarlı olması hayati önem taşır. Harfiyen doğru ve çevirisi mükemmel yapılmış formlar sunuyoruz.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Evrak Çevirisi & Tercüme:</strong> İngiltere makamları, tüm Türkçe resmi evrakların İngilizce yeminli tercümesini talep edebilir. Bu tercümeler tarafımızdan anlaşmalı tercümanlar ile yürütülerek onaylı şekilde sunulur.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Hızlı Başvuru Seçenekleri:</strong> Seyahatiniz acilse Priority (Öncelikli) veya Super Priority (Aşırı Öncelikli) vize servislerinden yararlanarak sonucun 5 iş günü hatta 24 saat içinde çıkması için randevunuzu planlıyoruz.</li>
                                <li><strong>Sıfır Manuel Evrak:</strong> Sizden dosyaları dijital veya fiziksel ortamda alıyor, tüm PDF boyutlandırma ve UKVI portalına özel kategorilere yükleme işini eksiksiz yapıyoruz.</li>
                            </ul>
                        </div>

                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Uzun Süreli İngiltere Vizesi</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                İngiltere vizeleri standart olarak 6 aylık çok girişli verilir. Ancak talebinize ve ödeyeceğiniz harç miktarına göre, profiliniz de uygunsa 2 yıllık, 5 yıllık veya 10 yıllık vize başvurusunda da bulunabiliyoruz! Seyahatleriniz sık ise sizi prosedürden yıllarca kurtaracak uzun süreli başvuru desteğimiz mevcuttur.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>İngiltere Sürecimiz</h3>
                            <ol style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6, paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '8px' }}>Profilinize uygun evrak listesinin iletilmesi</li>
                                <li style={{ marginBottom: '8px' }}>Evrak kontrolü ve varsa tercüme ihtiyaçlarının karşılanması</li>
                                <li style={{ marginBottom: '8px' }}>İngilizce UKVI başvuru portal formunun ekibimizce doldurulması</li>
                                <li style={{ marginBottom: '8px' }}>TLS Contact'ten randevunuzun alınması</li>
                                <li style={{ marginBottom: '8px' }}>Tüm dokümanların taranıp portala "Self-Upload" yapılması</li>
                                <li>Randevu günü parmak izi verip sürecin sonlanması</li>
                            </ol>
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>UK Destek Ekibine Ulaşın</a>
                            </div>
                        </div>

                        <SidebarContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
