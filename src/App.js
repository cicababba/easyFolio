import './App.css';
import {useEffect, useState} from "react";
import Fullpage, {FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import ProjectCard from "./components/ProjectCard";
import data from "./data/local_data.json"
import ProfileSection from "./components/ProfileSection";
import ProgressBar from "./components/ProgressBar";
import AboutMe from "./components/AboutMe";

function App() {

    const [isLoading, setIsLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    const SectionsStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [loadedData] = useState(data)
    const profile = loadedData.profile
    const skillSet = loadedData.profile.skillSet
    const theme = loadedData.theme

    const projects = loadedData.projects.map(({name, description, technologies, url, imageUrl}) => {
        return <FullpageSection style={SectionsStyle}>
            <ProjectCard name={name}
                         description={description}
                         technologies={technologies}
                         url={url}
                         imageUrl={imageUrl}/>
        </FullpageSection>
    })

    useEffect(() => {
        setTimeout(() => setFadeOut(true), 1800)
        setTimeout(() => setIsLoading(false), 2000)
    })

    return (
        <div className="flex flex-row" data-theme={theme}>
            {isLoading &&
                <div className={`flex flex-col ${fadeOut && 'animate-out fade-out duration-500'}`}
                     style={SectionsStyle}>
                    <ProgressBar/>
                    <p className="mt-10">Awesomeness loading...</p>
                </div>}
            {!isLoading && <Fullpage>
                <div className="hidden lg:block">
                    <FullpageNavigation/>
                </div>
                <FullPageSections>
                    <FullpageSection style={SectionsStyle}>
                        <ProfileSection profileData={profile}/>
                    </FullpageSection>
                    {/* {skillSet && <FullpageSection style={SectionsStyle}>
                        <AboutMe skillSet={skillSet} profilePictureUrl={profile.profilePictureUrl}/>
                    </FullpageSection>} */}
                    {projects}
                </FullPageSections>
            </Fullpage>}
        </div>
    );
}

export default App;


// https://www.youtube.com/watch?v=a_f4vsNlKek for fullscreen scroller
