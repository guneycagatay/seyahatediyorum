import { Metadata } from 'next';
import Link from 'next/link';
import SidebarContactForm from '@/components/SidebarContactForm';

export const metadata: Metadata = {
    title: 'Kanada Vizesi Danışmanlığı | SeyahatEdiyorum',
    description: 'Kanada turistik, öğrenci veya çalışma vizesi başvurusu. GCKey portal süreci, biyometri ve evrak tercümelerinde tam rehberlik.',
};

export default function KanadaVizesi() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>Uzun Süreli Onay Fırsatı</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Kanada Vizesi Danışmanlığı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Kanada'ya turizm, iş, eğitim veya kalıcı yerleşim amaçlı seyahatleriniz için GCKey portalı üzerinden yürüttüğümüz şeffaf ve profesyonel başvuru süreci ile vize alma olasılığınızı artırıyoruz.
                    </p>
                </div>

                <div className="grid3" style={{ gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '24px' }}>Kanada Vize Başvurusunda Neden Biz?</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Kanada göçmenlik bürosu (IRCC), dünyanın en katı vize değerlendirme sistemlerinden birine (yapay zeka "Chinook" vb.) sahiptir. Dosya düzeniniz, finansal kapasitenizin ispatı ve niyet mektubunuz (SOP) çok büyük bir ciddiyetle incelenir.
                            </p>
                            <ul style={{ color: 'var(--muted)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Etkin Niyet Mektubu (SOP) Desteği:</strong> Seyahat amacınızı, ülkeye bağlarınızı ve geri dönme zorunluluğunu kanıtlayan akademik/profesyonel İngilizce ile yazılmış "Statement of Purpose" metinleri hazırlıyoruz.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Portal (GCKey) Yönetimi:</strong> Formların eksiksiz doldurulması (IMM5257, Aile Bilgi Formu vb.) ve tüm kişisel belgelerinizin belirlenmiş kilobayt (KB) sınırlarında, doğru PDF formatında sisteme yüklenmesi tarafımızca hatasız yürütülür.</li>
                                <li style={{ marginBottom: '10px' }}><strong>VFS Global Biyometri (Parmak İzi):</strong> Başvurunuz online olarak iletildikten sonra gelen Biometric Instruction Letter dahilinde randevunuzu VFS ofisinden hızlıca oluşturuyoruz. Sadece parmak izinizi vermeniz yetiyor.</li>
                                <li><strong>Redden Dönen Dosyalar:</strong> Kanada'dan daha önce red almış iseniz, ATIP (dosya döküm) notlarını Kanada hükümetinden talep ederek red asıl sebebini bulup yeni başvuruyu bu itiraz argümanları üzerine inşa ediyoruz.</li>
                            </ul>
                        </div>

                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Kanada Pasaport Ömrünce Vize Veriyor!</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Doğru ve güçlü bir başvuru sonucunda, Kanada hükümeti genellikle vize bitiş tarihinizi pasaportunuzun geçerlilik süresinin (maksimum 10 yıl) sonuna kadar tanımlar! Bu yüzden başvuru sırasında en az 5-10 yıllık yeni nesil pasaport kullanmanızı ısrarla tavsiye etmekteyiz.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Kanada Danışmanlık Paketimiz</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', fontSize: '14px', lineHeight: 1.6 }}>
                                <li>Birebir Müşteri Profili Değerlendirmesi</li>
                                <li>Size Özel Kanada Evrak Listesi Çıkarılması</li>
                                <li>Yeminli Tercüme ve Çevirilerin Yapılması</li>
                                <li>IMM Formlarının Eksiksiz Doldurulması</li>
                                <li>Resmi Niyet Dilekçesinin (SOP) Hazırlanması</li>
                                <li>GCKey Üzerinden Sisteme Tüm PDF'lerin Yüklenmesi</li>
                                <li>Biyometri Randevunuzun Kesinleştirilmesi</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Bağlantıya Geç</a>
                            </div>
                        </div>

                        <SidebarContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
