import { NextResponse } from 'next/server'
import { logoutUser } from '@/lib/session'

export async function POST() {
    try {
        await logoutUser()
        return NextResponse.json({ success: true, message: 'Çıkış yapıldı' }, { status: 200 })
    } catch (error) {
        console.error('Logout error:', error)
        return NextResponse.json({ success: false, message: 'Bir hata oluştu' }, { status: 500 })
    }
}
