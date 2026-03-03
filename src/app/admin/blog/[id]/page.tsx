'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, UploadCloud } from 'lucide-react'
import RichEditor from '@/components/RichEditor'

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const { id } = use(params)

    const [loading, setLoading] = useState(false)
    const [initialLoading, setInitialLoading] = useState(true)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        coverImage: '',
        published: true,
    })

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setUploadingImage(true)
        const data = new FormData()
        data.append('file', file)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data,
            })

            const json = await res.json()
            if (json.url) {
                setFormData(prev => ({ ...prev, coverImage: json.url }))
            } else if (json.data?.path && json.data?.files?.[0]) {
                setFormData(prev => ({ ...prev, coverImage: json.data.path + json.data.files[0] }))
            }
        } catch (err) {
            console.error('Kapak fotoğrafı yüklenemedi', err)
            alert("Fotoğraf yüklenirken bir hata oluştu.")
        } finally {
            setUploadingImage(false)
        }
    }

    useEffect(() => {
        fetchBlog()
    }, [id])

    const fetchBlog = async () => {
        try {
            const res = await fetch(`/api/blogs/${id}`)
            if (res.ok) {
                const blog = await res.json()
                setFormData({
                    title: blog.title,
                    content: blog.content,
                    excerpt: blog.excerpt || '',
                    coverImage: blog.coverImage || '',
                    published: blog.published,
                })
            } else {
                setError('Blog yazısı bulunamadı.')
            }
        } catch (err) {
            setError('Veriler yüklenirken bir hata oluştu.')
        } finally {
            setInitialLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                router.push('/admin/blog')
                router.refresh()
            } else {
                const data = await res.json()
                setError(data.error || 'Yazı güncellenemedi.')
            }
        } catch (err) {
            setError('Bir hata oluştu.')
        } finally {
            setLoading(false)
        }
    }

    if (initialLoading) {
        return <div className="admin-container p-4">Yükleniyor...</div>
    }

    return (
        <div className="admin-container max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/blog" className="text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <h1 className="text-2xl font-semibold text-gray-900">Blog Yazısını Düzenle</h1>
                </div>
            </div>

            {error && (
                <div className="mb-6 bg-red-50 p-4 rounded-md">
                    <p className="text-sm text-red-700">{error}</p>
                </div>
            )}

            {!error && (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Yazı Başlığı <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md border p-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            İçerik <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 bg-white">
                            <RichEditor
                                value={formData.content}
                                onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Bloğunuzun ana içeriği. Üst barlardaki resim ikonuna tıklayarak bilgisayarınızdan resim yükleyebilirsiniz.</p>
                    </div>

                    <div>
                        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
                            Kısa Özet
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="excerpt"
                                name="excerpt"
                                rows={3}
                                value={formData.excerpt}
                                onChange={handleChange}
                                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                                placeholder="Blog listesinde görünecek kısa açıklama..."
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Kapak Görseli
                        </label>
                        <div className="mt-1 flex items-center gap-4">
                            {formData.coverImage && (
                                <div className="h-24 w-32 relative rounded border border-gray-200 overflow-hidden bg-gray-50">
                                    <img src={formData.coverImage} alt="Kapak Önizleme" className="object-cover h-full w-full" />
                                </div>
                            )}
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    disabled={uploadingImage}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    title="Kapak Fotoğrafı Seçin"
                                />
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    <UploadCloud className="mr-2 h-5 w-5 text-gray-400" />
                                    {uploadingImage ? 'Yükleniyor...' : formData.coverImage ? 'Yeni Görsel Seç' : 'Görsel Seç / Yükle'}
                                </button>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Blog listesinde ve detay sayfasında en üstte görünecek fotoğraf.</p>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="published"
                            name="published"
                            type="checkbox"
                            checked={formData.published}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                            Yayında
                        </label>
                    </div>

                    <div className="pt-5 border-t border-gray-200 flex justify-end">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {loading ? 'Güncelleniyor...' : 'Güncelle'}
                            <Save className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}
