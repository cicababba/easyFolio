import './App.css';
import {useState} from "react";
import Fullpage, {FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import ProjectCard from "./components/ProjectCard";
import ProfileCard from "./components/ProfileCard";
import data from "./data/local_data.json"

function App() {

    // const {isLocal} = useConfiguration()

    const SectionsStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const [loadedData] = useState(data)

    const projects = loadedData.projects.map(({name, description, imageUrl}) => {
        return <FullpageSection style={SectionsStyle}>
            <ProjectCard name={name}
                         description={description}/>
        </FullpageSection>
    })
    console.log(loadedData.profile)
    const profile = loadedData.profile

    return (
        <div>
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    <FullpageSection style={SectionsStyle}>
                        <ProfileCard profileData={profile}/>
                    </FullpageSection>
                    {projects}
                </FullPageSections>
            </Fullpage>
        </div>
    );
}

export default App;
