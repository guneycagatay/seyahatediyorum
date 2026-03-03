export const metadata = {
    title: 'Yönetim Paneli - Seyahat Ediyorum',
}

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Genel Bakış</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder cards to show functionality that will come */}
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Blog Yazıları
                                    </dt>
                                    <dd>
                                        <div className="text-lg font-medium text-gray-900">
                                            0
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <a href="/admin/blog" className="font-medium text-blue-700 hover:text-blue-900">
                                Tümünü görüntüle
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        İletişim Formları
                                    </dt>
                                    <dd>
                                        <div className="text-lg font-medium text-gray-900">
                                            0
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                        <div className="text-sm">
                            <a href="/admin/iletisim" className="font-medium text-blue-700 hover:text-blue-900">
                                Tümünü görüntüle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
