import { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Ansiklopedi | SeyahatEdiyorum.com',
    description: 'Vize süreçleri, seyahat rehberleri ve konsolosluk güncellemeleri hakkında en güncel yazılarımız.',
}

export const revalidate = 60 // Revalidate cache every 60 seconds

export default async function AnsiklopediPage() {
    const blogs = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' }
    })

    return (
        <main>
            <section className="section" style={{ background: 'var(--bg1)', borderBottom: '1px solid var(--line)' }}>
                <div className="wrap text-center">
                    <h1 className="title" style={{ fontSize: '42px' }}>Ansiklopedi</h1>
                    <p className="lead">
                        Vize başvuru süreçleri, konsolosluk güncellemeleri ve yurtdışı seyahatlerinize dair<br />
                        ihtiyacınız olan tüm detaylı rehberler burada.
                    </p>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg0)' }}>
                <div className="wrap">
                    {blogs.length === 0 ? (
                        <div className="text-center py-20" style={{ color: 'var(--muted)' }}>
                            <p>Henüz içerik eklenmemiş. Çok yakında faydalı rehberlerle burada olacağız!</p>
                        </div>
                    ) : (
                        <div className="grid3" style={{ gap: '30px' }}>
                            {blogs.map((blog) => (
                                <div key={blog.id} className="card" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(0,0,0,0.04)',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s var(--ease)'
                                }}>
                                    <Link href={`/ansiklopedi/${blog.slug}`} className="block relative overflow-hidden bg-gray-50 flex-shrink-0" style={{ paddingBottom: '100%' /* 1:1 Aspect Ratio */ }}>
                                        {blog.coverImage ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={blog.coverImage}
                                                alt={blog.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                                                <span className="text-xs uppercase tracking-widest font-bold opacity-50">Görsel Yok</span>
                                            </div>
                                        )}
                                    </Link>

                                    <div className="cardBody" style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div className="flex items-center gap-1.5 mb-3" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--blue)' }}>
                                            <Calendar size={12} />
                                            {new Date(blog.createdAt).toLocaleDateString('tr-TR', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>

                                        <h3 className="cardTitle" style={{ fontSize: '18px', fontWeight: 700, lineHeight: '1.35', marginBottom: '12px', color: 'var(--ink)' }}>
                                            <Link href={`/ansiklopedi/${blog.slug}`} className="hover:text-blue-600 transition-colors">
                                                {blog.title}
                                            </Link>
                                        </h3>

                                        {blog.excerpt && (
                                            <p className="cardText line-clamp-3" style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                                                {blog.excerpt}
                                            </p>
                                        )}

                                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                                            <Link
                                                href={`/ansiklopedi/${blog.slug}`}
                                                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors group"
                                                style={{ color: 'var(--blue)' }}
                                            >
                                                İncele
                                                <ArrowRight size={14} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--line)' }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
