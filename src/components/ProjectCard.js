import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectCard = ({name, description, technologies, url}) => {

    return <div className="lg:card bg-gray-700 lg:ml-36 w-full h-full lg:w-4/6 lg:h-5/6 lg:mr-14">
        <figure><img src="https://placeimg.com/2000/2000/any" alt="Album"/></figure>
        <div className="card-body">
            {url &&
                <div className="flex flex-row cursor-pointer items-center" onClick={() => window.open(url, "_blank")}>
                    <h2 className="mr-2 card-title">{name}</h2>
                    <OpenInNewIcon/>
                </div>}
            {!url && <h2 className="card-title">{name}</h2>}
            <p>{description}</p>
            {!!technologies.length && <div className="card-actions justify-end">
                {technologies.map(el => <span
                    className="indicator-item badge badge-primary">{el}</span>)}
            </div>}
        </div>
    </div>
}

export default ProjectCard
