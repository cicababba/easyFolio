const AboutMe = ({skillSet: {aboutMe, hardSkills, softSkills}, profilePictureUrl}) => {

    const softSkillsDOM = <ul className="list-none">
        {softSkills.map(el => <li className="my-4 flex">
            <input readOnly type="checkbox" checked className="checkbox checkbox-primary"/>
            <div className="ml-2 badge badge-secondary">{el}</div>
        </li>)}
    </ul>

    const hardSkillsDOM = hardSkills.map(el => {
        const {name, rating} = el
        return <div className="flex flex-col my-2">
            <span className="mb-1">{name}</span>
            <progress className="progress progress-accent w-56 bg-secondary" value={rating} max="5"></progress>
        </div>
    })


    return <div
        className={`card-side rounded-none lg:rounded-2xl card bg-gray-700 lg:w-5/6 h-full w-full lg:h-5/6`}>
        <figure>
            <div className="avatar hidden lg:block">
                <div className="w-36 lg:w-80 h-full w-2/6">
                    <img src={profilePictureUrl} alt="Profile"/>
                </div>
            </div>
        </figure>
        <div className="card-body lg:w-4/6 bg-neutral text-primary">
            <h2 className="card-title">More about me</h2>
            <p className="flex-none">{aboutMe}</p>
            <div className="divider"/>
            <h2 className="card-title">Here's a list of my skills</h2>
            <div className="flex-row w-full hidden lg:flex">
                <div className="w-2/4">
                    <h4>Hard skills:</h4>
                    {hardSkillsDOM}
                </div>
                <div className="w-2/4">
                    <h4>Soft skills:</h4>
                    {softSkillsDOM}
                </div>
            </div>
            <div className="lg:hidden block">
                <h2 className="mb-2">Hard skills:</h2>
                {hardSkills.map(el =>
                    <div className="flex flex-col mb-2">
                        <span className="text-xs">{el.name}</span>
                        <progress className="mr-2 progress progress-accent w-full bg-secondary" value={el.rating}
                                  max="5">{el.name}</progress>
                    </div>
                )}
            </div>
            <div className="lg:hidden block">
                <h2 className="mb-2">Soft skills:</h2>
                {softSkills.map(el => <div className="m-2 badge badge-accent">{el}</div>)}
            </div>
        </div>
    </div>
}
export default AboutMe
