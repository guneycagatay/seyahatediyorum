import { Metadata } from 'next';
import Link from 'next/link';
import SidebarContactForm from '@/components/SidebarContactForm';

export const metadata: Metadata = {
    title: 'Amerika Vizesi Danışmanlığı | SeyahatEdiyorum',
    description: 'Amerika Birleşik Devletleri seyahatleriniz için DS-160 form hazırlığı, mülakat simülasyonu ve uçtan uca uzman vize danışmanlığı.',
};

export default function AmerikaVizesi() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>En Çok Tercih Edilen</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Amerika Vizesi Danışmanlığı</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Amerika Birleşik Devletleri seyahatleriniz için karmaşık görünen vize sürecini sizin için basitleştiriyor, DS-160 vize başvuru formundan mülakat provasına kadar her adımda profesyonel rehberlik sunuyoruz.
                    </p>
                </div>

                <div className="grid3" style={{ gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 1fr)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '24px' }}>Kapsamlı Vize Süreci Desteği</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Amerika vizesi süreçleri diğer ülkelere kıyasla mülakat odaklı bir sistem üzerine kuruludur. Uzman ekibimiz, profilinize uygun ve ABD Konsolosluğu'nun aradığı kriterlere en uygun şekilde dosyanızı hazırlarken, randevu gününüzde mülakatta karşılaşabileceğiniz olası senaryolara karşı sizi hazırlar.
                            </p>
                            <ul style={{ color: 'var(--muted)', lineHeight: '1.7', paddingLeft: '20px' }}>
                                <li style={{ marginBottom: '10px' }}><strong>Birebir Profil Analizi:</strong> Gidiş amacınız (Turizm, Eğitim, İş Gezisi) ve finansal/mesleki durumunuz incelenerek riskler minimize edilir.</li>
                                <li style={{ marginBottom: '10px' }}><strong>DS-160 Form Doldurma Desteği:</strong> En kritik adım olan bu göçmen olmayan vize formunun sıfır hatayla, İngilizce olarak profesyonelce doldurulması.</li>
                                <li style={{ marginBottom: '10px' }}><strong>Erkene Alınmış Randevu:</strong> Normal şartlarda çok ileri tarihlere verilen ABD randevularını, özel sistemlerimizle takip edip uygun boşluklarda tarihinizi erkene (öne) çekiyoruz.</li>
                                <li><strong>Mülakat Simülasyonu:</strong> Konsoloslukta sorulması muhtemel kritik sorular ve verilmesi gereken ideal cevaplarla sizi mülakata psikolojik olarak da hazırlarız.</li>
                            </ul>
                        </div>

                        <div className="card reveal" data-reveal="true" style={{ padding: '30px' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Neden Profesyonel Destek Almalısınız?</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                Bireysel yapılan DS-160 form hataları veya mülakat esnasında verilen yanlış/eksik beyanlar red alma oranını ciddi düzeyde artırabilir. Bir defa alınan red, sonraki süreçleri ciddi şekilde sekteye uğratmaktadır. Deneyimli ekibimiz bu riskin önüne geçmenizi sağlar.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(245,248,255,1) 100%)' }}>
                            <h3 style={{ marginTop: 0, fontSize: '20px' }}>Gerekli Temel Evraklar</h3>
                            <ul style={{ color: 'var(--muted)', paddingLeft: '20px', fontSize: '14px', lineHeight: 1.6 }}>
                                <li>En az 6 ay geçerliliği olan pasaport</li>
                                <li>2 adet 5x5 cm ebatlarında güncel biometrik fotoğraf</li>
                                <li>Güncel ve hareketli vadesiz banka hesap dökümleri</li>
                                <li>Maaş bordroları ve SGK dökümleri</li>
                                <li>Gidiş amacını destekleyen evraklar (Fuar bileti, Otel/Uçak rezervasyonu, Okul kabul davetiyesi vb.)</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Hemen İletişime Geçin</a>
                            </div>
                        </div>

                        <SidebarContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
