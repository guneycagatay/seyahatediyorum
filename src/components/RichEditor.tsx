'use client'

import React, { useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill-new/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface RichEditorProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export default function RichEditor({ value, onChange, placeholder }: RichEditorProps) {
    const quillRef = useRef<any>(null)

    const imageHandler = () => {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()

        input.onchange = async () => {
            const file = input.files ? input.files[0] : null
            if (!file) return

            const formData = new FormData()
            formData.append('file', file)

            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                })
                const json = await res.json()
                const imageUrl = json.url || json.data?.path + json.data?.files?.[0]

                // Insert image into editor
                if (quillRef.current) {
                    const editor = quillRef.current.getEditor()
                    const range = editor.getSelection()
                    editor.insertEmbed(range?.index || 0, 'image', imageUrl)
                }
            } catch (err) {
                console.error('Fotoğraf yüklenemedi', err)
                alert('Fotoğraf yüklenirken bir hata oluştu.')
            }
        }
    }

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ['link', 'image', 'video'],
                ['clean'],
            ],
            handlers: {
                image: imageHandler,
            },
        },
    }), [])

    return (
        <div className="bg-white">
            <ReactQuill
                forwardedRef={quillRef}
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                placeholder={placeholder || 'İçeriğinizi buraya yazın...'}
                className="h-[400px] mb-12" // mb-12 to account for the absolute positioned toolbar in Quill
            />
        </div>
    )
}
