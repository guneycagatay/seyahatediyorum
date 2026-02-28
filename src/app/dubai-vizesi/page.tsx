import { Metadata } from 'next';
import Link from 'next/link';
import SidebarContactForm from '@/components/SidebarContactForm';

export const metadata: Metadata = {
    title: 'Dubai (BAE) Vizesi Danışmanlığı | SeyahatEdiyorum',
    description: 'Dubai (Birleşik Arap Emirlikleri) hızlı ve tamamen e-vize danışmanlığı. Uçak biletinize uygun anında e-vize başvuru merkezi.',
};

export default function DubaiVizesi() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>%100 Online & Hızlı</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Dubai (BAE) Vizesi Danışmanlığı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Arap Emirlikleri'ne (Dubai, Abu Dabi, Şarika vs.) yapacağınız turistik, ticari veya fuar ziyaretleri için hızlı garantili ve evraksız E-Vize danışmanlığımız ile tanışın.
                    </p>
                </div>

                <div className="grid3" style={{ gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '24px' }}>Dubai Evrak Derdi Olmayan Bir Vize Türü!</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Dubai E-Vize sistemi, diğer ülkelerin vizeleri gibi (örneğin Avrupa ve Amerika) banka dökümü, SGK dökümü ya da iş yeri evrakları gerektirmez. Seyahatinizin tamamen elektronik ortamda onaylanmasını sağlayan modern bir protokole sahiptir. Bize sadece birkaç belgenizi WhatsApp ya da mail üzerinden göndermeniz yeterlidir.
                            </p>
                            <ul style={{ color: 'var(--muted)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Onay Süresi:</strong> Ortalama olarak 24 ile 48 saat (iş günü) içinde barkodlu vizeleriniz PDF formatında size ulaştırılır. Bazen aynı gün bile onay alabiliyoruz!</li>
                                <li style={{ marginBottom: '10px' }}><strong>Vize Seçenekleri:</strong> 30 Günlük tek girişli, 30 Günlük çok girişli (Multiple), 60 Günlük tek girişli ve 60 Günlük çok girişli seçeneklerimizle seyahat amacınıza en uygun olan paketi sunuyoruz.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Gitmek Asla Zor Değil:</strong> Uçağa binerken E-Vize çıktınızı ve pasaportunuzu yanınıza almanız yetiyor. Biyometri, konsolosluk mülakatı veya uzun evrak bekleyişleri yok!</li>
                                <li><strong>Kimler İçin Zorunlu?</strong> Türkiye Cumhuriyeti Bordo (Umuma Mahsus) Pasaport sahipleri uçmadan önce kesinlikle vize almak zorundadır. Siyah, Yeşil ve Gri pasaportlar Dubai'ye vizesiz seyahat edebilir.</li>
                            </ul>
                        </div>

                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Neden Acente Aracı Olmalıdır?</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                BAE göçmenlik bürosu (GDRFA / ICA) bireysel direkt başvurular yerine sistemi havayolları ve anlaşmalı akredite acenteler (sponsorlar) üzerinden yürütür. Bireysel başvuruda yapılan küçük yükleme hataları vizenizin ret olmasına neden olur ve hiçbir harcı geri iade alamazsınız. Sistemlerimizde hataya yer yoktur.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Dubai E-Vizesi İçin İstenen Evraklar</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', fontSize: '14px', lineHeight: 1.6 }}>
                                <li>Pasaportun kimlik bilgilerini içeren sayfasının net fotoğrafı veya renkli taraması</li>
                                <li>1 Adet güncel ve arka fonu beyaz biyometrik vesikalık fotoğraf</li>
                                <li>(Bazı istisna başvurularda) Uçak gidiş-dönüş bileti görüntüsü</li>
                            </ul>
                            <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5, marginTop: '16px' }}>Bu kadar basit! Bizimle iletişime geçtiğiniz an işleminiz sıraya alınır.</p>
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Evrakları Gönder</a>
                            </div>
                        </div>

                        <SidebarContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
