const ProfileCard = ({profileData}) => {
    const {profilePictureUrl, name, companyName, jobTitle, birthDate, email, phoneNumber, linkedinUrl} = profileData
    console.log(profileData)
    return <div className="card lg:card-side bg-gray-700 shadow-xl m-5">
        <figure><img src={profilePictureUrl} alt="Profile" className="max-h-96"/></figure>
        <div className="card-body">
            <div>
                <div className="divider"/>
                <p className="card-title">{name}</p>
                <p className="card-title">{companyName}</p>
                <p className="text-">{jobTitle}</p>
                <p className="text-xs">{birthDate}</p>
                <div className="divider"/>
                <div className="card-title">Contacts</div>
                <a target="_blank" href={`mailto:${email}`}
                   className="text-xs" rel="noreferrer">{email}
                </a>
                <p className="text-xs">{phoneNumber}</p>
                <a target="_blank" href={linkedinUrl} className="text-xs" rel="noreferrer">LinkedIn
                    Profile</a>
            </div>
        </div>
    </div>
}

export default ProfileCard
