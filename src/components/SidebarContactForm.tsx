'use client';

import { useState } from 'react';

export default function SidebarContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Merhaba, vize işlemleri için size ulaşıyorum. İsmim: ${name}, Telefonum: ${phone}. Yardımcı olabilir misiniz?`;
        const url = `https://api.whatsapp.com/send?phone=905550000000&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="card reveal" data-reveal="true" style={{ padding: '30px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,0,0,0.06)' }}>
            <h3 style={{ marginTop: 0, fontSize: '20px', marginBottom: '8px' }}>Hızlı Uzman Desteği</h3>
            <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.5, marginBottom: '20px' }}>
                Zaman kaybetmeyin. Bilgilerinizi bırakın, vize uzmanlarımız sizi hemen arasın ve sürecinizi başlatalım.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>Ad Soyad</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adınız Soyadınız"
                        required
                        style={{ padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '14px', outline: 'none', background: '#fff', width: '100%' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>Telefon</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05XX XXX XX XX"
                        required
                        style={{ padding: '12px 14px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '14px', outline: 'none', background: '#fff', width: '100%' }}
                    />
                </div>

                <button
                    type="submit"
                    className="btn primary"
                    style={{ padding: '14px', marginTop: '8px', width: '100%', display: 'flex', justifyContent: 'center', background: '#1d1d1f', border: 'none', color: '#fff' }}
                    data-ripple="true"
                >
                    Sizi Arayalım
                </button>
                <p style={{ fontSize: '11px', textAlign: 'center', color: 'var(--muted)', margin: 0, marginTop: '4px' }}>KVKK aydınlatma metnini okudum ve kabul ediyorum.</p>
            </form>
        </div>
    );
}
