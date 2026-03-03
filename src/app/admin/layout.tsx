'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FileText, MessageSquare, LogOut, Menu, X } from 'lucide-react'
import '../admin.css'

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Blog Yazıları', href: '/admin/blog', icon: FileText },
    { name: 'İletişim Formları', href: '/admin/iletisim', icon: MessageSquare },
]

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' })
            router.push('/giris')
            router.refresh()
        } catch (error) {
            console.error('Logout failed', error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Mobile sidebar visibility toggle */}
            <div className="lg:hidden fixed z-20 top-4 left-4">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 rounded-md bg-white shadow-sm text-gray-500 hover:text-gray-900"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile sidebar ovleray */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-30 lg:hidden" onClick={() => setSidebarOpen(false)}>
                    <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 text-white left-0 z-40 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
                    <span className="text-xl font-semibold text-white">Yönetim Paneli</span>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 text-gray-400 hover:text-white"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex-1 px-4 py-6 overflow-y-auto">
                    <nav className="space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive
                                        ? 'bg-gray-800 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    <Icon
                                        className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                                            }`}
                                    />
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="p-4 bg-gray-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors"
                    >
                        <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-gray-400" />
                        Çıkış Yap
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 w-full lg:pl-0">
                <main className="flex-1 overflow-y-auto focus:outline-none">
                    <div className="py-6 pt-16 lg:pt-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
