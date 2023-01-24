const ProjectCard = ({name, description, imageUrl}) => {

    return <div className="card lg:card-side bg-gray-700 shadow-xl m-5">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
            </div>
        </div>
    </div>
}

export default ProjectCard
