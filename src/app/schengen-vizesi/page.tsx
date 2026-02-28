import { Metadata } from 'next';
import Link from 'next/link';
import SidebarContactForm from '@/components/SidebarContactForm';

export const metadata: Metadata = {
    title: 'Schengen Vizesi Danışmanlığı | SeyahatEdiyorum',
    description: 'Avrupa seyahatleriniz için Schengen vizesi başvuru, dosya hazırlığı ve randevu temini işlemlerinde profesyonel danışmanlık.',
};

export default function SchengenVizesi() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>Tüm Avrupa Ülkeleri</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Schengen Vizesi Danışmanlığı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Fransa, Almanya, İtalya, İspanya, Hollanda ve diğer tüm Avrupa ülkeleri için vize sürecinizi pürüzsüz hale getiriyoruz. Doğru yönlendirme ile uzun süreli ve çok girişli vize onayı şansınızı maksimize ediyoruz.
                    </p>
                </div>

                <div className="grid3" style={{ gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '24px' }}>Schengen Vizesi Almanın Püf Noktaları</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Schengen vizesi (Avrupa Birliği ortak vize sistemi), 27 farklı ülkeye serbest seyahat hakkı sunan son derece önemli bir vize tipidir. Son dönemlerde kotaların sıkışması ve randevu tarihlerinin zor bulunması gibi sebeplerle profesyonel destek almak neredeyse şart hale gelmiştir.
                            </p>
                            <ul style={{ color: 'var(--muted)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Doğru Ülke Seçimi:</strong> Seyahat planınıza (ilk giriş yapılacak ülke ve en çok kalınacak ülke kuralı) uygun doğru ülkenin konsolosluğundan/aracı kurumdan başvuru yapmanızı sağlarız. Aksi takdirde red almanız kaçınılmaz olur.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Evrak Mükemmelliği:</strong> Sigorta poliçelerinizin (en az 30.000€ teminatlı), otel/uçak rezervasyonlarınızın geçerliliğini yetkili acente belgeleriyle sunarız.</li>
                                <li style={{ marginBottom: '10px' }}><strong>VIP & Premium Randevu Çözümleri:</strong> Normal randevu bulunamadığı durumlarda Premium Lounge sistemlerinden faydalanmanızı sağlayarak başvurunuzun yetişmesini sağlıyoruz.</li>
                                <li><strong>Özel Dilekçe Yazımı:</strong> Konsolosluğa hitaben gidiş ve dönüş taahhüdünüzü bildiren güçlü ve samimi niyet mektupları hazırlarız.</li>
                            </ul>
                        </div>

                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Parmak İzi ve Biyometri Süreci</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Eğer son 59 ay içerisinde alınmış bir VIS'li (biyometri verilmiş) Schengen vizeniz yoksa, randevu merkezine kişisel olarak gitmeniz gerekir. Ancak parmak iziniz sistemde kayıtlıysa, tüm işlemleri siz yorulmadan ve konsolosluğa gitmenize gerek kalmadan vekaleten sizin adınıza biz yürütüp pasaportunuzu adresinize ulaştırabiliyoruz!
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Gerekli Temel Evraklar</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', fontSize: '14px', lineHeight: 1.6 }}>
                                <li>En az 6 ay geçerliliği olan pasaport</li>
                                <li>2 adet biometrik fotoğraf (Schengen formatında)</li>
                                <li>Tam vukuatlı nüfus kayıt örneği</li>
                                <li>İkametgah belgesi</li>
                                <li>Güncel banka dökümleri ve çalışma evrakları</li>
                            </ul>
                            <div style={{ height: '16px' }}></div>
                            <h3 style={{ marginTop: 0, fontSize: '16px' }}>Popüler Schengen Ülkeleri</h3>
                            <div className="chipRow" style={{ gap: '6px', marginBottom: '16px' }}>
                                <span className="chip" style={{ fontSize: '12px' }}>Almanya</span>
                                <span className="chip" style={{ fontSize: '12px' }}>Fransa</span>
                                <span className="chip" style={{ fontSize: '12px' }}>İtalya</span>
                                <span className="chip" style={{ fontSize: '12px' }}>İspanya</span>
                                <span className="chip" style={{ fontSize: '12px' }}>Hollanda</span>
                            </div>
                            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>Yukarıdaki ülkeler dahil toplam 27 Avrupa Birliği ülkesi için danışmanlığımız tam kapsamlıdır.</p>
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Dosyanızı İnceleyelim</a>
                            </div>
                        </div>

                        <SidebarContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
