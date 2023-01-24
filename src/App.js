import './App.css';
import {useState} from "react";
import data from './data/local_data.json'

function App() {

    // const {isLocal} = useConfiguration()

    const [loadedData, setLoadedData] = useState(data)


    return (
        <div className="p-10">
            <div className="flex flex-row">
                <div className="w-1/6">
                    <div className="drawer drawer-mobile">
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="w-4/6 flex flex-col">
                    {loadedData.projects.map(el => {
                        return <div className="card lg:card-side bg-base-100 shadow-xl m-5">
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
