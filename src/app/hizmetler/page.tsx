import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | SeyahatEdiyorum',
    description: 'Size özel vize danışmanlık hizmetlerimiz; evrak hazırlığından randevu alımına kadar yanınızdayız.',
};

export default function Hizmetler() {
    return (
        <main id="top">
            <section className="wrap" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div className="pill" style={{ marginBottom: '16px' }}>Tüm Destek Noktalarımız</div>
                    <h1 className="title" style={{ fontSize: '48px' }}>Vize Danışmanlık Hizmetlerimiz</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Dünyanın her noktasına yapacağınız seyahatlerde, eğitim veya iş amaçlı başvurularda yanınızdayız. En çok talep gören vize danışmanlık paketlerimizi aşağıda inceleyebilirsiniz.
                    </p>
                </div>

                <div className="grid3">
                    <article className="card reveal" data-reveal="true">
                        <div className="cardBody">
                            <h3 className="cardTitle">Amerika Vizesi Danışmanlığı</h3>
                            <p className="cardText">Form hazırlığı, randevu stratejisi ve mülakat simülasyonu ile kusursuz başvuru.</p>
                            <div className="chipRow">
                                <span className="chip">Turizm</span>
                                <span className="chip">Eğitim</span>
                                <span className="chip">İş Gezisi</span>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Link href="/amerika-vizesi" className="btn" style={{ width: '100%', padding: '10px', fontSize: '13px' }}>Detayları İncele →</Link>
                            </div>
                        </div>
                    </article>

                    <article className="card reveal" data-reveal="true">
                        <div className="cardBody">
                            <h3 className="cardTitle">Schengen Vizesi Danışmanlığı</h3>
                            <p className="cardText">Avrupa Birliği seyahatleriniz için dosya mükemmelliği ve Premium randevu takibi.</p>
                            <div className="chipRow">
                                <span className="chip">Turizm</span>
                                <span className="chip">Eğitim</span>
                                <span className="chip">İş Gezisi</span>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Link href="/schengen-vizesi" className="btn" style={{ width: '100%', padding: '10px', fontSize: '13px' }}>Detayları İncele →</Link>
                            </div>
                        </div>
                    </article>

                    <article className="card reveal" data-reveal="true">
                        <div className="cardBody">
                            <h3 className="cardTitle">İngiltere Vizesi Danışmanlığı</h3>
                            <p className="cardText">UKVI başvuru formu doldurma ve TLS self-upload portalları için uçtan uca uzmanlık.</p>
                            <div className="chipRow">
                                <span className="chip">Turizm</span>
                                <span className="chip">Eğitim</span>
                                <span className="chip">İş Gezisi</span>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Link href="/ingiltere-vizesi" className="btn" style={{ width: '100%', padding: '10px', fontSize: '13px' }}>Detayları İncele →</Link>
                            </div>
                        </div>
                    </article>

                    <article className="card reveal" data-reveal="true">
                        <div className="cardBody">
                            <h3 className="cardTitle">Kanada Vizesi Danışmanlığı</h3>
                            <p className="cardText">GCKey porta yönetimi, güçlü niyet beyanı (SOP) ve hızlı biyometri aksiyonları.</p>
                            <div className="chipRow">
                                <span className="chip">Turizm</span>
                                <span className="chip">Eğitim</span>
                                <span className="chip">İş Gezisi</span>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Link href="/kanada-vizesi" className="btn" style={{ width: '100%', padding: '10px', fontSize: '13px' }}>Detayları İncele →</Link>
                            </div>
                        </div>
                    </article>

                    <article className="card reveal" data-reveal="true">
                        <div className="cardBody">
                            <h3 className="cardTitle">Dubai (BAE) Vizesi Danışmanlığı</h3>
                            <p className="cardText">Evrak dökümü olmadan, sadece pasaport ile 24-48 saatte onaylanan online hızlı vize.</p>
                            <div className="chipRow">
                                <span className="chip">Turizm</span>
                                <span className="chip">Eğitim</span>
                                <span className="chip">İş Gezisi</span>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Link href="/dubai-vizesi" className="btn" style={{ width: '100%', padding: '10px', fontSize: '13px' }}>Detayları İncele →</Link>
                            </div>
                        </div>
                    </article>

                    <article className="card reveal" data-reveal="true" id="cin">
                        <div className="cardBody">
                            <h3 className="cardTitle">Çin Vizesi Danışmanlığı</h3>
                            <p className="cardText">Kanton fuarı, fabrika denetimi veya ticari seyahatler için barkodlu davetiye onayı (PU).</p>
                            <div className="chipRow">
                                <span className="chip">Turizm</span>
                                <span className="chip">Eğitim</span>
                                <span className="chip">İş Gezisi</span>
                            </div>
                            <div style={{ marginTop: '16px' }}>
                                <Link href="/cin-vizesi" className="btn" style={{ width: '100%', padding: '10px', fontSize: '13px' }}>Detayları İncele →</Link>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </main>
    );
}
