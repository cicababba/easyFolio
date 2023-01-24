const ProfileCard = ({profileData}) => {
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

    return <div className="bg-gray-700 w-full h-full">
        <figure><img src={profilePictureUrl} alt="Profile"/></figure>

        <div className="card-body">
            <ul>
                <p className="card-title">{name}</p>
                <p className="card-title">{companyName}</p>
                <p className="text-">{jobTitle}</p>
                <p className="text-xs">{birthDate}</p>
                <div className="divider"/>
                <p>{bio}</p>
                <div className="divider"/>
                <div className="text-right">
                    <div className="text-2xl">Contacts</div>
                    <a target="_blank" href={`mailto:${email}`}
                       className="text-xs" rel="noreferrer">{email}
                    </a>
                    <p className="text-xs">{phoneNumber}</p>
                    <a target="_blank" href={linkedinUrl} className="text-xs" rel="noreferrer">LinkedIn</a>
                </div>
            </ul>
        </div>
    </div>
}

export default ProfileCard
