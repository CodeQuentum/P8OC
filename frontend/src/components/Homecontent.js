import React from 'react';
import ProjectGallery from './ProjectGallery';
import ContactForm from './ContactForm';
import Apropos from './Apropos';
import Competences from './Competences';
import ProjectDetail from './ProjectDetails';

function HomeContent(){
    return (
        <div>
            <Apropos />
            <Competences />
            <ProjectGallery />
            <ProjectDetail />
            <ContactForm />
        </div>
    );
}


export default HomeContent;