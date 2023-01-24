import './App.css';
import {useState} from "react";
import data from './data/local_data.json'

function App() {

    // const {isLocal} = useConfiguration()

    const [loadedData] = useState(data)


    return (
        <div className="p-10">
            <div className="flex flex-row">
                <div className="w-1/6">
                    <div className="avatar">
                        <div className="rounded-xl max-w-sm mt-5">
                            <img src={loadedData.profilePictureUrl} alt={`${loadedData.name} profile`}/>
                        </div>
                    </div>
                    <div className="divider"/>
                    <p className="card-title">{loadedData.name}</p>
                    <p className="card-title">{loadedData.companyName}</p>
                    <p className="text-">{loadedData.jobTitle}</p>
                    <p className="text-xs">{loadedData.birtDate}</p>
                    <div className="divider"/>
                    <div className="card-title">Contacts</div>
                    <a target="_blank" href={`mailto:${loadedData.email}`}
                       className="text-xs" rel="noreferrer">{loadedData.email}
                    </a>
                    <p className="text-xs">{loadedData.phoneNumber}</p>
                    <a target="_blank" href={loadedData.linkedinUrl} className="text-xs" rel="noreferrer">LinkedIn
                        Profile</a>
                </div>
                <div className="w-4/6 flex flex-col">
                    {loadedData.projects.map(el => {
                        return <div className="card lg:card-side bg-gray-700 shadow-xl m-5">
                            <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{el.name}</h2>
                                <p>{el.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
