const ProfileDrawer = ({profileData}) => {
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

    return <div className="flex flex-col align-middle">
        <ul className="p-4 w-2/6 bg-base-100 text-base-content">
            <figure><img src={profilePictureUrl} alt="Profile" className="h-full rounded"/></figure>
            <p className="card-title mt-5">{name}</p>
            <p className="card-title">{companyName}</p>
            <p className="text-">{jobTitle}</p>
            <p className="text-xs">{birthDate}</p>
            <div className="divider"/>
            <p>{bio}</p>
            <div className="divider"/>
            <div className="card-title">Contacts</div>
            <a target="_blank" href={`mailto:${email}`}
               className="text-xs" rel="noreferrer">{email}
            </a>
            <p className="text-xs">{phoneNumber}</p>
            <a target="_blank" href={linkedinUrl} className="text-xs" rel="noreferrer">LinkedIn</a>
        </ul>
    </div>
}

export default ProfileDrawer
