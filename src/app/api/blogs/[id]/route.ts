import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateSlug } from '@/lib/utils'

// GET /api/blogs/[id] - Fetch a single blog post
export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const blog = await prisma.blogPost.findUnique({
            where: { id: parseInt(id) }
        })

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
        }

        return NextResponse.json(blog)
    } catch (error) {
        console.error('Failed to fetch blog:', error)
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
    }
}

// PUT /api/blogs/[id] - Update a blog post
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await request.json()
        const { title, content, excerpt, coverImage, published } = body

        const dataToUpdate: any = {
            content,
            excerpt,
            coverImage,
            published,
        }

        // Only update and re-generate slug if title changed
        if (title) {
            dataToUpdate.title = title
            dataToUpdate.slug = generateSlug(title)

            // Basic slug uniqueness check for updates
            const existing = await prisma.blogPost.findUnique({ where: { slug: dataToUpdate.slug } })
            if (existing && existing.id !== parseInt(id)) {
                dataToUpdate.slug = `${dataToUpdate.slug}-${Date.now()}`
            }
        }

        const updatedBlog = await prisma.blogPost.update({
            where: { id: parseInt(id) },
            data: dataToUpdate
        })

        return NextResponse.json(updatedBlog)
    } catch (error) {
        console.error('Failed to update blog:', error)
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
    }
}

// DELETE /api/blogs/[id] - Delete a blog post
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await prisma.blogPost.delete({
            where: { id: parseInt(id) }
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Failed to delete blog:', error)
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
    }
}
