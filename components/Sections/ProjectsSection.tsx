import React from 'react'
import Card from '../Card'
import Title from '../Title'

const ProjectsSection = () => {
    const projects = {
        WildVision: {
            title: 'WildVision',
            description: 'Animal classification system using MobileNetV2 and OpenCV, achieving over 90% accuracy on realworld wildlife and domestic animal images. Utilized OpenCV for image preprocessing, contour detection, and frame extraction, improving classification reliability by 35%.',
            image: '',
            github: 'https://github.com/Rishi-05/Animal-Image-Classification'
        },
        Text2Tone: {
            title: 'Text2Tone',
            description: 'Its an intuitive text-to-audio conversion platform using Flask, enabling users to convert written content into natural-sounding speech with support for multiple languages. Integrated Text-to-Speech APIs and optimized the backend pipeline, reducing audio generation time by 45%',
            image:'',
            github: ''
        },
        CropSense: {
            title: 'Crop-Recommendation-system',
            description: 'A data-driven web application that helps farmers maximize their yield by recommending the most suitable crop based on real-time soil and weather conditions. This project leverages a machine learning model to provide accurate, actionable insights through a simple, user-friendly interface.',
            image: '',
            github: 'https://github.com/Rishi-05/Crop-Recommendation-system'
        }
    }

    return (
        <div className='flex-col items-center scroll-mb-20 min-h-screen' id="projects">
            <Title word1="Featured" word2="PROJECTS" className='' />
            <section className="flex justify-center space-x-3 mb-10 max-md:flex-col max-md:-ml-2 ">
                <Card {...projects.WildVision} />
                <Card {...projects.Text2Tone} />
                <Card {...projects.CropSense} />
            </section>
        </div>
    )
}

export default ProjectsSection
