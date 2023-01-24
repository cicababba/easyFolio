import './App.css';
import {useState} from "react";
import Fullpage, {FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import ProjectCard from "./components/ProjectCard";
import data from "./data/local_data.json"
import Profile from "./components/Profile";

function App() {

    // const {isLocal} = useConfiguration()

    const SectionsStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [loadedData] = useState(data)

    const projects = loadedData.projects.map(({name, description, technologies}) => {
        return <FullpageSection style={SectionsStyle}>
            <ProjectCard name={name}
                         description={description}
                         technologies={technologies}/>
        </FullpageSection>
    })
    const profile = loadedData.profile

    return (
        <div className="flex flex-row">
            <Fullpage>
                <div className="hidden lg:block">
                    <FullpageNavigation/>
                </div>
                <FullPageSections>
                    <FullpageSection style={SectionsStyle}>
                        <Profile profileData={profile}/>
                    </FullpageSection>
                    {projects}
                </FullPageSections>
            </Fullpage>
        </div>
    );
}

export default App;


// https://www.youtube.com/watch?v=a_f4vsNlKek for fullscreen scroller
