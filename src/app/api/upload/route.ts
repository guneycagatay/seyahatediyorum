import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(request: Request) {
    try {
        const data = await request.formData()
        const files = data.getAll('file') as File[] || data.getAll('files[0]') as File[] // Jodit sometimes uses files[0]

        // Provide a standardized response for WYSIWYG editors (like Jodit)
        const responses = []

        for (const file of files) {
            if (!file || typeof file === 'string') continue;

            const bytes = await file.arrayBuffer()
            const buffer = Buffer.from(bytes)

            // Ensure uploads directory exists
            const uploadDir = path.join(process.cwd(), 'public', 'uploads')
            if (!existsSync(uploadDir)) {
                await mkdir(uploadDir, { recursive: true })
            }

            // Generate a unique filename
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
            const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.\-]/g, '')}`
            const filepath = path.join(uploadDir, filename)

            // Save file
            await writeFile(filepath, buffer)

            responses.push({
                url: `/uploads/${filename}`,
                name: filename,
                message: 'Resim başarıyla yüklendi'
            })
        }

        if (responses.length === 0) {
            return NextResponse.json({ error: 'Dosya yüklenemedi' }, { status: 400 })
        }

        // Jodit specifically looks for a `files` array or `url` field
        return NextResponse.json({
            success: true,
            data: {
                baseurl: '/',
                messages: [],
                isImages: [true],
                code: 220,
                files: responses.map(r => r.name), // Jodit format
                path: '/uploads/' // Jodit format
            },
            url: responses[0].url // Standard format
        })

    } catch (error) {
        console.error('Upload Error:', error)
        return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
    }
}
