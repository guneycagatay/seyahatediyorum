import { Metadata } from 'next';
import Link from 'next/link';
import SidebarContactForm from '@/components/SidebarContactForm';

export const metadata: Metadata = {
    title: 'Çin Vizesi Danışmanlığı | SeyahatEdiyorum',
    description: 'Çin fuar vizesi, ticari L vize ve turistik başvurularda resmi davetiye yönergeleri dahil %100 alanında en iyi danışmanlık.',
};

export default function CinVizesi() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>Davetiye ve Fuar Planlaması</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Çin Vizesi Danışmanlığı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Çin Halk Cumhuriyeti için turistik (L Tipi), Ticari (M Tipi) ve Fuar/Kültürel (F Tipi) vize başvurularınızda ağır bürokrasiyi profesyonel ekibimizle hafifletiyoruz. Çin vize başvuru merkezi süreçleriniz emin ellerde.
                    </p>
                </div>

                <div className="grid3" style={{ gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '24px' }}>Neden Çin Vizesi İçin Uzman Destek Şart?</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Çin Konsolosluğu son derece sert prosedürlere tabi olan belge kabul onay sistemine sahiptir. En küçük bir yazım yanlışı veya barkod hatasında randevu ve harcınız yanarak dosyanız kabul edilmeyebilir. Kanton fuarı veya birebir fabrika ziyaretleriniz için hata lüksü olmayan bir süreç izlenmelidir.
                            </p>
                            <ul style={{ color: 'var(--muted)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Form Doldurma Sistemi (COVA):</strong> Çin vize formu 10'dan fazla bölüm içeren ağır ve detaylı bir dokümandır. Sistemin İngilizce ve teknik kelimelerini tam idrak ederek eksiksiz doldurma işlemini biz yapıyoruz.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Fotoğraf Hassasiyeti:</strong> Çin vizesinde kullanılacak fotoğraflar milimetrik düzende olmalı (gözlük olmamalı, takı olmamalı) aksi takdirde sistem dosyayı direk engeller. Ekibimiz fotoğraf tarama uygunluğunuzu denetler.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Davetiye Uyum Kontrolü:</strong> Çin’den gelecek "Belediye Onaylı Resmi Barcode Davetiye (PU Letter)" veya fuar davetiyesi üzerindeki en ufak bilgi eksikliğinde vize onaylanmaz. Bizler siz bu davetiyeyi istemeden veya aldıktan sonra resmiyet kontrolünü yaparız.</li>
                                <li><strong>Grup ve Turistik Kısıtlamalar:</strong> Tekil turistik başvurular şu günlerde kapalı olsa bile en doğru alternatif senaryolar ve transit geçiş vizeleri için sizlere pratik rotalar yaratırız.</li>
                            </ul>
                        </div>

                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Randevu Öncesi Tam Güvence</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Randevu sisteminde Çin Vize Merkezi gişelerinde eksik evrakla dosyanız reddedilmesin diye; bizler online portal üzerinden sizleri ön değerlendirmeye alıyor, evrakta bir zayıflık varsa dosyanıza o an müdahale ediyoruz. Parmak izi (biyometri) verme seansınızda sizi tam bir hazır özgüven ile gönderiyoruz.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Gerekli Olacak Özel Belgeler (Ticari)</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', fontSize: '14px', lineHeight: 1.6 }}>
                                <li>Çin'deki firmadan antetli kağıda imzalı/kaşeli Davetiye (Invitation Letter) ve gerekirse PU Letter</li>
                                <li>Davet eden kurumun/firmanın Faaliyet Belgesi Kopyası</li>
                                <li>Sizin çalıştığınız şirketin güncel Barkodlu Vergi Levhası, Sicil Gazetesi ve Faaliyet Belgesi</li>
                                <li>Yolculuk programınızı anlatan Türkçe/İngilizce Şirket Dilekçesi</li>
                                <li>Çin tarafıyla olan daha önceki iş ilişkilerini ispatlayan Gümrük/Proforma belgeleri veya yazışmalar</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Durumunuzu Netleştirelim</a>
                            </div>
                        </div>

                        <SidebarContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
