import React from 'react'
import Card from '../Card'
import Title from '../Title'

const ProjectsSection = () => {
    const projects = {
        "self-healing-RAG": {
            title: 'Self-Healing RAG',
            description: 'A self-healing Retrieval-Augmented Generation pipeline built with LangGraph...',
            image: '/firstlook.png',
            github: 'https://github.com/Rishi-05/self-healing-RAG'
        },
        "pixelstudio": {
            title: 'Pixel Studio',
            description: 'A full-stack text-to-image generator built with Stable Diffusion...',
            image: '/gallery.png',
            github: 'https://github.com/Rishi-05/pixelstudio'
        },
        "smart-attendance": {
            title: 'Smart Attendance System',
            description: 'A real-time face recognition attendance system...',
            image: '/smart_attandence.png',
            github: 'https://github.com/Rishi-05/smart-attendance'
        }
    }

    return (
        <div className='flex-col items-center scroll-mb-20 min-h-screen' id="projects">
            <Title word1="Featured" word2="PROJECTS" className='' />
            <section className="flex justify-center space-x-3 mb-10 max-md:flex-col max-md:-ml-2 ">
                
                <Card {...projects["self-healing-RAG"]} />
                <Card {...projects["pixelstudio"]} />
                <Card {...projects["smart-attendance"]} />

            </section>
        </div>
    )
}

export default ProjectsSection
