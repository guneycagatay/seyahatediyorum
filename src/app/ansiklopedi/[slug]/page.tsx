import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar, ChevronRight, Home } from 'lucide-react'
import './blog.css' // Import custom rich text styles

// Revalidate every 60 seconds
export const revalidate = 60

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const blog = await prisma.blogPost.findUnique({ where: { slug } })

    if (!blog || !blog.published) {
        return { title: 'Sayfa Bulunamadı' }
    }

    return {
        title: `${blog.title} | SeyahatEdiyorum Ansiklopedi`,
        description: blog.excerpt || blog.content.substring(0, 150).replace(/<[^>]+>/g, '') + '...',
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const blog = await prisma.blogPost.findUnique({
        where: { slug }
    })

    // 404 if not found or not published
    if (!blog || !blog.published) {
        notFound()
    }

    return (
        <main style={{ backgroundColor: 'var(--bg0)', minHeight: '100vh', paddingBottom: '100px' }}>
            {/* Breadcrumbs */}
            <div className="wrap" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
                <nav className="flex items-center text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--muted)', gap: '10px' }}>
                    <Link href="/" className="hover:text-blue-600 transition-colors flex items-center">
                        Ana Sayfa
                    </Link>
                    <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--line)' }}></div>
                    <Link href="/ansiklopedi" className="hover:text-blue-600 transition-colors">
                        Ansiklopedi
                    </Link>
                    <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--line)' }}></div>
                    <span style={{ color: 'var(--ink)' }} className="truncate max-w-[150px] sm:max-w-xs">{blog.title}</span>
                </nav>
            </div>

            <article className="wrap" style={{ maxWidth: '720px', marginTop: '20px' }}>
                {/* Post Header */}
                <header style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: 'var(--blue)', fontSize: '12px', marginBottom: '24px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        <Calendar size={14} />
                        <time dateTime={new Date(blog.createdAt).toISOString()}>
                            {new Date(blog.createdAt).toLocaleDateString('tr-TR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>

                    <h1 style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '32px', color: 'var(--ink)' }}>
                        {blog.title}
                    </h1>

                    {blog.excerpt && (
                        <p style={{ fontSize: '20px', lineHeight: 1.6, color: 'var(--muted)', maxWidth: '600px', margin: '0 auto', fontWeight: 500 }}>
                            {blog.excerpt}
                        </p>
                    )}
                </header>

                {/* Cover Image */}
                {blog.coverImage && (
                    <div style={{ borderRadius: '32px', overflow: 'hidden', marginBottom: '60px', boxShadow: '0 20px 50px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                )}

                {/* Rich Text Content */}
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </article>

            {/* Call to Action Bottom */}
            <section className="wrap" style={{ maxWidth: '720px', marginTop: '80px' }}>
                <div className="ctaCard" style={{ borderRadius: '40px', padding: '40px' }}>
                    <h3 style={{ fontSize: '32px' }}>Vize Başvurunuzu Birlikte Yapalım</h3>
                    <p className="lead2" style={{ marginTop: '16px', fontSize: '16px', color: 'var(--muted)' }}>
                        Türkiye'nin dört bir yanından profesyonel danışmanlık hizmeti alarak garantili ve sorunsuz vize başvurusu yapmak için hemen ulaşın.
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <Link href="/iletisim" className="btn primary" style={{ padding: '16px 32px' }}>Ücretsiz Danışmanlık Alın</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
