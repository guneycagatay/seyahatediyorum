import { NextResponse } from 'next/server'
import { loginUser } from '@/lib/session'

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '123456'

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json()

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            await loginUser(username)

            return NextResponse.json({ success: true, message: 'Giriş başarılı' }, { status: 200 })
        }

        return NextResponse.json({ success: false, message: 'Geçersiz kullanıcı adı veya şifre' }, { status: 401 })
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json({ success: false, message: 'Bir hata oluştu' }, { status: 500 })
    }
}
