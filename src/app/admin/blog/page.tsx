'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2 } from 'lucide-react'

type BlogPost = {
    id: number
    title: string
    slug: string
    published: boolean
    createdAt: string
}

export default function BlogList() {
    const [blogs, setBlogs] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blogs')
            if (res.ok) {
                const data = await res.json()
                setBlogs(data)
            }
        } catch (error) {
            console.error('Failed to fetch blogs', error)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!window.confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
            return
        }

        try {
            const res = await fetch(`/api/blogs/${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                setBlogs(blogs.filter(blog => blog.id !== id))
            } else {
                alert('Silme işlemi başarısız oldu.')
            }
        } catch (error) {
            console.error('Failed to delete blog', error)
            alert('Bir hata oluştu.')
        }
    }

    if (loading) {
        return <div className="p-4 text-gray-500">Yükleniyor...</div>
    }

    return (
        <div className="admin-container">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">Blog Yazıları</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Sistemde kayıtlı olan tüm blog yazılarının listesi.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href="/admin/blog/yeni"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto transition-colors"
                    >
                        <Plus className="-ml-1 mr-2 h-5 w-5" />
                        Yeni Yazı Ekle
                    </Link>
                </div>
            </div>

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Başlık</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Durum</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Oluşturulma</th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">İşlemler</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {blogs.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="whitespace-nowrap py-8 text-center text-sm text-gray-500">
                                                Henüz hiç blog yazısı eklenmemiş.
                                            </td>
                                        </tr>
                                    ) : (
                                        blogs.map((blog) => (
                                            <tr key={blog.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {blog.title}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {blog.published ? (
                                                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                            Yayında
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                                                            Taslak
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <div className="flex justify-end gap-3">
                                                        <Link href={`/admin/blog/${blog.id}`} className="text-blue-600 hover:text-blue-900">
                                                            <Edit className="h-5 w-5" />
                                                            <span className="sr-only">Düzenle</span>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(blog.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            <Trash2 className="h-5 w-5" />
                                                            <span className="sr-only">Sil</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
