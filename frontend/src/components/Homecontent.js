import React from 'react';
import ProjectGallery from './ProjectGallery';
import Apropos from './Apropos';
import Competences from './Competences';


function HomeContent(){
    return (
        <div>
            <Apropos />
            <Competences />
            <ProjectGallery />
        </div>
    );
}


export default HomeContent;