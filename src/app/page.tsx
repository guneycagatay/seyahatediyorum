import Image from 'next/image';
import Link from 'next/link';
import MultiStepForm from '@/components/MultiStepForm';

export default function Home() {
    return (
        <main id="top">
            {/* HERO */}
            <section className="wrap" style={{ paddingTop: '22px' }}>
                <div className="heroShell reveal" data-reveal="true">
                    <div className="heroParallax" aria-hidden="true" id="heroParallax">
                        <div className="heroGlow" id="heroGlow"></div>
                        <div className="heroNoise"></div>
                    </div>

                    <div className="heroInner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center' }}>
                        <div className="softBox" style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(16px)', padding: '50px 40px', borderRadius: '32px', maxWidth: '850px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid rgba(255, 255, 255, 0.6)' }}>
                            <div className="pill" style={{ marginBottom: '18px' }}>• Güvenilir • Hızlı • Şeffaf</div>
                            <h1>Profesyonel Vize<br />Danışmanlık Hizmetleri</h1>
                            <p className="sub" style={{ margin: '0 auto 24px auto', maxWidth: '600px' }}>Evrak hazırlığından randevu & takip sürecine kadar uçtan uca destek. Başvurunuzu “daha net, daha güçlü, daha kontrollü” hale getiriyoruz.</p>

                            <div className="heroActions" style={{ justifyContent: 'center' }}>
                                <a className="btn primary" href="#basvuru" data-ripple="true">Vize Başvurusu</a>
                                <a className="btn" href="#hizmetler" data-ripple="true">Daha Fazla Bilgi</a>
                            </div>

                            <div style={{ marginTop: '24px' }} className="small">⚡ Ortalama geri dönüş: aynı gün • ✅ Dosya kontrol listeleri • 🧭 Süreç boyunca bilgilendirme</div>
                        </div>
                    </div>

                    <div className="heroMini">
                        <div className="miniItem">
                            <div className="ico" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="2" opacity=".78" />
                                    <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            Vize Başvuru Süreci
                        </div>
                        <div className="miniItem">
                            <div className="ico" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2" opacity=".78" />
                                    <path d="M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 2c3 3 3 17 0 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".92" />
                                </svg>
                            </div>
                            Tüm Ülkeler İçin Vize
                        </div>
                        <div className="miniItem">
                            <div className="ico" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M20 21V8a2 2 0 0 0-2-2h-3V3H9v3H6a2 2 0 0 0-2 2v13" stroke="currentColor" strokeWidth="2" opacity=".78" />
                                    <path d="M8 21v-6h8v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </div>
                            Uzman Danışmanlık
                        </div>
                    </div>
                </div>
            </section>

            <section id="hizmetler" className="section">
                <div className="wrap">
                    <h2 className="title reveal" data-reveal="true">Popüler Vize Hizmetleri</h2>
                    <p className="lead reveal" data-reveal="true">En sık talep edilen başvurular. Ülke ve başvuru tipinize göre evrakları güçlendirip süreci kontrollü yönetiyoruz.</p>

                    <div className="grid3">
                        <article className="card reveal" data-reveal="true" id="amerikan">
                            <div className="cardBody">
                                <h3 className="cardTitle">Amerika Vizesi Danışmanlığı</h3>
                                <p className="cardText">Form hazırlığı, randevu stratejisi ve mülakat hazırlığı için net bir yol haritası.</p>
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

                        <article className="card reveal" data-reveal="true" id="schengen">
                            <div className="cardBody">
                                <h3 className="cardTitle">Schengen Vizesi Danışmanlığı</h3>
                                <p className="cardText">Dosya kurgusu, seyahat planı uyumu ve evrak kontrol listeleriyle daha güçlü başvuru.</p>
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

                        <article className="card reveal" data-reveal="true" id="ingiltere">
                            <div className="cardBody">
                                <h3 className="cardTitle">İngiltere Vizesi Danışmanlığı</h3>
                                <p className="cardText">Online başvuru, belge yükleme ve süreç takibinde uçtan uca destek.</p>
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

                        <article className="card reveal" data-reveal="true" id="kanada">
                            <div className="cardBody">
                                <h3 className="cardTitle">Kanada Vizesi Danışmanlığı</h3>
                                <p className="cardText">Eğitim, çalışma veya turistik seyahatleriniz için eksiksiz dosya hazırlığı ve portal yönetimi.</p>
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

                        <article className="card reveal" data-reveal="true" id="dubai">
                            <div className="cardBody">
                                <h3 className="cardTitle">Dubai (BAE) Vizesi Danışmanlığı</h3>
                                <p className="cardText">Hızlı işlem süreleriyle, tamamen online ve sorunsuz e-vize başvuru süreci.</p>
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
                                <p className="cardText">Ticari, turistik veya fuar katılımlarınız için davetiye onay süreçlerinde tam rehberlik.</p>
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
                </div>
            </section>

            {/* PROCESS */}
            <section className="section" style={{ paddingTop: '10px' }}>
                <div className="wrap">
                    <h2 className="title reveal" data-reveal="true">Vize Başvuru Sürecimiz</h2>
                    <p className="lead reveal" data-reveal="true">Net adımlar, net iletişim. Her aşamada “ne oldu / sırada ne var?” sorusuna hızlı cevap.</p>

                    <div className="steps">
                        <div className="step reveal" data-reveal="true">
                            <div className="num">1</div>
                            <div>
                                <b>Evrak Hazırlığı</b>
                                <p>Başvuru tipine göre evrak listesi, dosya kontrolü ve eksiklerin tamamlanması.</p>
                            </div>
                        </div>

                        <div className="step reveal" data-reveal="true">
                            <div className="num">2</div>
                            <div>
                                <b>Başvuru İşlemleri</b>
                                <p>Formların doğru doldurulması ve gerekli sistem işlemlerinin yönetimi.</p>
                            </div>
                        </div>

                        <div className="step reveal" data-reveal="true">
                            <div className="num">3</div>
                            <div>
                                <b>Randevu & Takip</b>
                                <p>Randevu planlama, teslim süreçleri ve durum güncellemeleriyle takip.</p>
                            </div>
                        </div>

                        <div className="step reveal" data-reveal="true">
                            <div className="num">4</div>
                            <div>
                                <b>Sonuç & Bilgilendirme</b>
                                <p>Sonuç sonrası yönlendirme ve bir sonraki adım önerileri.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT / TRUST + STATS */}
            <section id="hakkimizda" className="section">
                <div className="wrap">
                    <h2 className="title reveal" data-reveal="true">Neden SeyahatEdiyorum?</h2>
                    <p className="lead reveal" data-reveal="true">Premium danışmanlık deneyimi: şeffaf süreç, düzenli bilgilendirme, kontrollü dosya yönetimi.</p>

                    <div className="split">
                        <div className="stats reveal" data-reveal="true">
                            <div className="statsGrid">
                                <div className="stat">
                                    <strong>Şeffaf</strong>
                                    <span>Her adım raporlanır</span>
                                </div>
                                <div className="stat">
                                    <strong>Hızlı</strong>
                                    <span>Dosya & randevu planı</span>
                                </div>
                                <div className="stat">
                                    <strong>Kontrollü</strong>
                                    <span>Checklist ile ilerleme</span>
                                </div>
                                <div className="stat">
                                    <strong>Tek Nokta</strong>
                                    <span>İletişim & takip</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials reveal" data-reveal="true">
                            <div className="quote">
                                <p>“Süreç boyunca sürekli bilgilendirme aldım. Evrak kontrolü sayesinde çok daha rahat ilerledik.”</p>
                                <footer>— Danışan Yorumu</footer>
                            </div>
                            <div style={{ height: '12px' }}></div>
                            <div className="quote">
                                <p>“Ne yapacağımı bilmiyordum. Adım adım plan çıkardılar, randevu ve dosya süreci çok hızlı aktı.”</p>
                                <footer>— Danışan Yorumu</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MULTI STEP FORM */}
            <MultiStepForm />

            {/* FAQ */}
            <section id="sss" className="section" style={{ paddingTop: '10px' }}>
                <div className="wrap">
                    <h2 className="title reveal" data-reveal="true">Sıkça Sorulan Sorular</h2>
                    <p className="lead reveal" data-reveal="true">En çok gelen soruları burada topladık. Detay için iletişime geçebilirsin.</p>

                    <div className="faq">
                        <details className="reveal" data-reveal="true">
                            <summary>Başvuru ne kadar sürer? <span className="chev">⌄</span></summary>
                            <p>Süre ülkeye ve randevu yoğunluğuna göre değişir. Dosyanızı hızlı hazırlayıp randevuyu en doğru şekilde planlarız.</p>
                        </details>

                        <details className="reveal" data-reveal="true">
                            <summary>Evrakları siz mi hazırlıyorsunuz? <span className="chev">⌄</span></summary>
                            <p>Evrak listesi ve dosya düzeni tarafımızdan belirlenir; sizden gelen belgeler kontrol edilip eksikler tamamlatılır.</p>
                        </details>

                        <details className="reveal" data-reveal="true">
                            <summary>Ücretli mi? Ücretsiz danışmanlık var mı? <span className="chev">⌄</span></summary>
                            <p>İlk değerlendirme ve yol haritası için ücretsiz danışmanlık veriyoruz. Süreç paketi başvuru tipine göre netleşir.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA + CONTACT */}
            <section id="iletisim" className="section" style={{ paddingTop: '10px' }}>
                <div className="wrap">
                    <div className="ctaCard reveal" data-reveal="true">
                        <h3 id="basvuru">Ücretsiz Danışmanlık Alın</h3>
                        <p className="lead2">Ülkenizi ve vize türünüzü yazın; size en doğru evrak & randevu yol haritasını hemen çıkaralım.</p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                            <a className="btn primary" href="https://api.whatsapp.com/send?phone=905550000000&text=Merhaba,%20vize%20i%C5%9Flemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" data-ripple="true">Hemen Başlayalım →</a>
                            <a className="btn" href="/hizmetler" data-ripple="true">Hizmetleri İncele</a>
                        </div>

                        <div className="contactBar">
                            <div className="contactItem">📞 <span>0850 123 4567</span></div>
                            <div className="contactItem">✉️ <span>info@seyahatediyorum.com</span></div>
                            <div className="contactItem">📍 <span>İstanbul, Türkiye</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
