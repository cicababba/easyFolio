const ProjectCard = ({name, description, technologies}) => {

    return <div className="card bg-gray-700 lg:ml-36 w-full h-full lg:w-4/6 lg:h-5/6 lg:mr-14">
        <figure><img src="https://placeimg.com/2000/2000/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                {technologies.map(el => <span className="indicator-item badge badge-primary">{el}</span>)}
            </div>
        </div>
    </div>
}

export default ProjectCard
