import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateSlug } from '@/lib/utils'

// GET /api/blogs - Fetch all blog posts
export async function GET() {
    try {
        const blogs = await prisma.blogPost.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(blogs)
    } catch (error) {
        console.error('Failed to fetch blogs:', error)
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
    }
}

// POST /api/blogs - Create a new blog post
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { title, content, excerpt, coverImage, published } = body

        if (!title || !content) {
            return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
        }

        const slug = generateSlug(title)

        // Check if slug already exists (basic uniqueness check)
        const existing = await prisma.blogPost.findUnique({ where: { slug } })
        const finalSlug = existing ? `${slug}-${Date.now()}` : slug

        const newBlog = await prisma.blogPost.create({
            data: {
                title,
                slug: finalSlug,
                content,
                excerpt: excerpt || '',
                coverImage: coverImage || '',
                published: published ?? true,
            }
        })

        return NextResponse.json(newBlog, { status: 201 })
    } catch (error) {
        console.error('Failed to create blog:', error)
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
    }
}
