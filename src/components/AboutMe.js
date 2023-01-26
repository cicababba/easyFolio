const AboutMe = ({skillSet: {aboutMe, hardSkills, softSkills}, profilePictureUrl}) => {
    return <div
        className={`card-side rounded-none lg:rounded-2xl card bg-gray-700 lg:w-5/6 h-full w-full lg:h-5/6`}>
        <figure>
            <div className="avatar hidden lg:block">
                <div className="w-36 lg:w-80 h-full w-2/6">
                    <img src={profilePictureUrl} alt="Profile"/>
                </div>
            </div>
        </figure>
        <div className="card-body lg:w-4/6">
            <h2 className="card-title">More about me</h2>
            <p className="flex-none">{aboutMe}</p>
            <div className="divider"/>
            <h2 className="card-title">Here's a list of my skills</h2>
            <div className="flex-row w-full hidden lg:flex">
                <div className="w-2/4">
                    <h4>Hard skills:</h4>
                    <ul className="list-none">
                        {hardSkills.map(el => <li className="mt-2 flex">
                            <input type="checkbox" checked className="checkbox checkbox-secondary"/>
                            <div className="ml-2 badge badge-primary">{el}</div>
                        </li>)}
                    </ul>
                </div>
                <div className="w-2/4">
                    <h4>Soft skills:</h4>
                    <ul className="list-none">
                        {softSkills.map(el => <li className="mt-2 flex">
                            <input type="checkbox" checked className="checkbox checkbox-primary"/>
                            <div className="ml-2 badge badge-secondary">{el}</div>
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className="lg:hidden block">
                <h2 className="mb-2">Hard skills:</h2>
                {hardSkills.map(el =>
                    <div className="m-2 badge badge-primary">{el}</div>)}
            </div>
            <div className="lg:hidden block">
                <h2 className="mb-2">Soft skills:</h2>
                {softSkills.map(el =>
                    <div className="m-2 badge badge-secondary">{el}</div>)}
            </div>
        </div>
    </div>
}
export default AboutMe
