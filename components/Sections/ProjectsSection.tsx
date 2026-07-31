import React from 'react'
import Card from '../Card'
import Title from '../Title'

const ProjectsSection = () => {
    const projects = {
        SelfHealingRAG: {
            title: 'Self-Healing RAG',
            description: 'A self-healing Retrieval-Augmented Generation pipeline built with LangGraph, featuring a critic agent that validates answer groundedness and triggers automatic query reformulation, achieving a 0% hallucination rate on a self-built 30-question evaluation set. Combines BM25 keyword search and vector similarity via hybrid retrieval with cross-encoder reranking, improving answer accuracy from 92% to 96% over baseline RAG.',
            image: '/firstlook.png',
            github: 'https://github.com/Rishi-05/self-healing-RAG/blob/main/output/firstlook.png'
        },
        PixelStudio: {
            title: 'Pixel Studio',
            description: 'A full-stack text-to-image generator built with Stable Diffusion, streaming results to a React frontend via FastAPI WebSocket. Achieved 10-12s average generation time on consumer hardware with real-time progress updates, and applied attention slicing to optimize execution on low-VRAM GPUs, reducing OOM crashes by 30%.',
            image: '/gallery.png',
            github: 'https://github.com/Rishi-05/pixelstudio/blob/main/assests/gallery.png'
        },
        SmartAttendance: {
            title: 'Smart Attendance System',
            description: 'A real-time face recognition attendance system that scans and marks students every 2.5 seconds using ArcFace embeddings. Indexed face embeddings with FAISS for sub-second (<50ms) vector search across all registered students, deployed liveness detection via MediaPipe to block photo spoofing, and enforced duplicate-prevention logic ensuring one entry per student per day.',
            image: '/dashboard_chart.png',
            github: 'https://github.com/Rishi-05/smart-attendance/blob/main/screenshots/dashboard_chart.png'
        }
    }

    return (
        <div className='flex-col items-center scroll-mb-20 min-h-screen' id="projects">
            <Title word1="Featured" word2="PROJECTS" className='' />
            <section className="flex justify-center space-x-3 mb-10 max-md:flex-col max-md:-ml-2 ">
                <Card {...projects.self-healing-RAG} />
                <Card {...projects.pixelstudio} />
                <Card {...projects.smart-attendance} />
            </section>
        </div>
    )
}

export default ProjectsSection
