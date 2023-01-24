const Profile = ({profileData}) => {
    const {
        profilePictureUrl,
        name,
        companyName,
        jobTitle,
        birthDate,
        email,
        phoneNumber,
        linkedinUrl,
        bio
    } = profileData

    return <div className="hero min-h-screen"
                style={{backgroundImage: `url("${profilePictureUrl}")`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">{name}</h1>
                <h1 className="text-3xl font-bold">{companyName}</h1>
                <h1 className="mb-5 text-xl font-bold">{jobTitle}</h1>
                <div className="divider"/>
                <p className="mb-5">{bio}</p>
                <div className="divider"/>
                <div className="text-2xl">Contacts</div>
                <a target="_blank" href={`mailto:${email}`}
                   className="text-xs" rel="noreferrer">
                    {email}
                </a>
                <p className="text-xs">{phoneNumber}</p>
                <a target="_blank" href={linkedinUrl} className="text-xs" rel="noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
}

export default Profile
