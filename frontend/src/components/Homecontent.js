import React from 'react';
import ProjectGallery from './ProjectGallery';
import Apropos from './Apropos';
import Competences from './Competences';
import ContactForm from './ContactForm'


function HomeContent(){
    return (
        <div>
            <Apropos />
            <Competences />
            <ProjectGallery />
            <ContactForm />
        </div>
    );
}


export default HomeContent;