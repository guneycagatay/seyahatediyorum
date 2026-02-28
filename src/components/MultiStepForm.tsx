'use client';

import { useState } from 'react';

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [country, setCountry] = useState('');
    const [purpose, setPurpose] = useState('');
    const [name, setName] = useState('');

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Merhaba, ${country} vizesi için başvurmak istiyorum. Amacım: ${purpose}. İsmim: ${name}.`;
        const url = `https://api.whatsapp.com/send?phone=905550000000&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="wrap" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="ctaCard reveal" data-reveal="true">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '28px', marginBottom: '8px', marginTop: 0, textAlign: 'center' }}>Vize Asistanı</h3>
                    <p className="lead2" style={{ marginBottom: '30px', fontSize: '15px', textAlign: 'center' }}>Size en uygun rotayı çizmemiz için birkaç sorumuza yanıt verin.</p>

                    <div style={{ marginBottom: '24px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ height: '4px', width: '40px', borderRadius: '4px', background: step >= i ? 'rgba(43, 124, 255, 1)' : 'rgba(0,0,0,0.1)', transition: 'background 0.3s' }}></div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.4s' }}>
                                <label style={{ fontSize: '15px', fontWeight: 600 }}>1. Hangi Ülkeye Gitmek İstiyorsunuz?</label>
                                <select value={country} onChange={(e) => setCountry(e.target.value)} required style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '15px', outline: 'none', width: '100%', appearance: 'none', cursor: 'pointer' }}>
                                    <option value="" disabled>Ülke Seçiniz...</option>
                                    <option value="Amerika">Amerika</option>
                                    <option value="Schengen">Schengen</option>
                                    <option value="İngiltere">İngiltere</option>
                                    <option value="Kanada">Kanada</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="Çin">Çin</option>
                                    <option value="Diğer">Diğer</option>
                                </select>
                                <button type="button" className="btn primary" onClick={handleNext} disabled={!country} style={{ padding: '14px', width: '100%', marginTop: '10px' }} data-ripple="true">İleri →</button>
                            </div>
                        )}

                        {step === 2 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.4s' }}>
                                <label style={{ fontSize: '15px', fontWeight: 600 }}>2. Seyahat Amacınız Nedir?</label>
                                <select value={purpose} onChange={(e) => setPurpose(e.target.value)} required style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '15px', outline: 'none', width: '100%', appearance: 'none', cursor: 'pointer' }}>
                                    <option value="" disabled>Amaç Seçiniz...</option>
                                    <option value="Turistik">Turistik</option>
                                    <option value="Ticari / İş">Ticari / İş Gezisi</option>
                                    <option value="Eğitim">Eğitim / Öğrenci</option>
                                    <option value="Aile Ziyareti">Aile / Arkadaş Ziyareti</option>
                                    <option value="Diğer">Diğer</option>
                                </select>
                                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                                    <button type="button" className="btn" onClick={handleBack} style={{ flex: 1, padding: '14px' }}>← Geri</button>
                                    <button type="button" className="btn primary" onClick={handleNext} disabled={!purpose} style={{ flex: 2, padding: '14px' }} data-ripple="true">İleri →</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.4s' }}>
                                <label style={{ fontSize: '15px', fontWeight: 600 }}>3. Size Nasıl Hitap Edelim?</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınız Soyadınız" required style={{ padding: '14px 16px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.8)', fontSize: '15px', outline: 'none', width: '100%' }} />
                                <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                                    <button type="button" className="btn" onClick={handleBack} style={{ flex: 1, padding: '14px' }}>← Geri</button>
                                    <button type="submit" className="btn primary" style={{ flex: 2, padding: '14px', background: '#25D366', borderColor: '#25D366', color: '#fff' }} data-ripple="true">WhatsApp'tan Gönder</button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
