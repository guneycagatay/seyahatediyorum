import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sıkça Sorulan Sorular | SeyahatEdiyorum',
    description: 'Vize süreçleri, danışmanlık hizmetlerimiz ve başvuru takvimi hakkında aklınıza takılan tüm soruların kapsamlı yanıtları.',
};

export default function SSS() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>En Çok Sorulanlar</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Sıkça Sorulan Sorular</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Vize başvurusu öncesinde ve sürecinde aklınıza takılabilecek tüm genel detayları şeffaf bir şekilde burada listeledik.
                    </p>
                </div>

                <div className="faq" style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <details className="reveal" data-reveal="true" style={{ padding: '20px' }}>
                        <summary style={{ fontSize: '18px' }}>Vize başvurum ne kadar sürede sonuçlanır? <span className="chev">⌄</span></summary>
                        <p style={{ marginTop: '16px' }}>Başvuru süreleri ülkeden ülkeye konsolosluk yoğunluk durumuna göre çok değişkenlik gösterir. Örneğin; standart bir Dubai vizesi 2 gün içinde onaylanırken, yoğun dönemlerdeki bir Amerika veya Kanada başvurusunun randevu bekleme süresi ve değerlendirme süreci ayları bulabilmektedir. Süreciniz başlarken size en net zaman çizelgesi özel olarak sunulur.</p>
                    </details>

                    <details className="reveal" data-reveal="true" style={{ padding: '20px' }}>
                        <summary style={{ fontSize: '18px' }}>Evrakları benim yerime siz mi hazırlıyorsunuz? <span className="chev">⌄</span></summary>
                        <p style={{ marginTop: '16px' }}>Bizler dilekçeler, yeminli tercümeler, randevu dokümanları, formların İngilizce olarak profesyonelce doldurulması (DS-160, IMM5257, UKVI vs.) gibi asıl teknik kısmı yürütüyoruz. Sizin bize sadece banka dökümü, e-devlet belgeleri gibi kişisel fiziki belgelerinizi taratıp/kargolayıp iletmeniz gerekmektedir.</p>
                    </details>

                    <details className="reveal" data-reveal="true" style={{ padding: '20px' }}>
                        <summary style={{ fontSize: '18px' }}>Danışmanlık ücretlerinize neler dahil? <span className="chev">⌄</span></summary>
                        <p style={{ marginTop: '16px' }}>Danışmanlık ücretimiz; profilinizin incelenmesi, evraklarınızın tasnif ve kontrolü, başvuru formlarınızın doldurulması, randevunuzun alınması, sistemlere dosya yüklemeleri, çeviri/tercüme organizasyonu ve pasaport takip süreçlerini kapsar. <i>Not: Konsolosluk vize harçları, parmak izi (VFS/TLS) servis bedelleri genellikle danışmanlık hizmet bedelinin dışındadır.</i></p>
                    </details>

                    <details className="reveal" data-reveal="true" style={{ padding: '20px' }}>
                        <summary style={{ fontSize: '18px' }}>Vize reddi alırsam paramı iade alabilir miyim? <span className="chev">⌄</span></summary>
                        <p style={{ marginTop: '16px' }}>Konsolosluklara ödenen harçlar ve randevu merkezine ödenen (VFS, TLS Contact, vb.) resmi servis bedelleri vize kararı ne olursa olsun iade edilmez. Bu, uluslararası bir kuraldır.</p>
                    </details>

                    <details className="reveal" data-reveal="true" style={{ padding: '20px' }}>
                        <summary style={{ fontSize: '18px' }}>Başvuru için şahsen gelmem veya görüşmem gerekiyor mu? <span className="chev">⌄</span></summary>
                        <p style={{ marginTop: '16px' }}>Dijital ve şeffaf altyapımız sayesinde ofisimize gelmenize gerek kalmadan, Türkiye'nin ve dünyanın neresinde olursanız olun sürecinizi %100 online (görüntülü görüşme, WhatsApp, E-Posta) ve kargo ile yürütebiliyoruz. Siz sadece son aşamadaki parmak izi randevusu (veya ABD için mülakata) gidersiniz.</p>
                    </details>
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <p className="lead" style={{ marginBottom: '20px' }}>Cevabınızı bulamadınız mı?</p>
                    <Link href="/iletisim" className="btn primary" style={{ padding: '14px 28px', fontSize: '15px' }}>Bize Sorun →</Link>
                </div>

            </section>
        </main>
    );
}
