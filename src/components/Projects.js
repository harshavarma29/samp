import React, {useState} from 'react';
import '../styles/projects.css';
import {project} from '../components/data';
import popup from 'react-dom';

const Projects = () => {
    const titles = Object.keys(project);

    const [pop, setPop] = useState({'element': ''});

    const openSelector = () => {

        setPop({
            'element': popup.createPortal(
                <div>
                    Harsha is writing code
                </div>,
                document.getElementById('selector')
            )
        })

        

    }

    return <React.Fragment>
        {pop.element}
        <div className='about'>
            {
                titles.map((title) => {

                    return <div className="block">
                                <div className="left">
                                    <div style={{overflow: 'auto'}}>
                                    <span className="block-title">{title}</span>
                                    </div>
                                    <input placeholder="Search project" className="search"/>
                                </div>
                                <div className="right">
                                    {
                                        project[title].map(projectDetails => {
                                            console.log(projectDetails.image)
                                            return <div className="project-card">
                                                <div className='image-block' id='image'>
                                                    <div className='container'>
                                                        <div className='project-name'>
                                                            <span className='pro-name'>{projectDetails['project name']}</span>
                                                        </div>
                                                        <div className='access'>
                                                            <button className='open' onClick={openSelector}>Open</button>
                                                            {pop.element}                                   
                                                        </div>
                                                    </div>
                                                 </div>
                                                <div className='description'>
                                                    {projectDetails.description}
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                })
            }
        </div>
    </React.Fragment>
}

export default React.memo(Projects);