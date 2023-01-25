import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ProfileSection = ({profileData}) => {
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
                style={{backgroundImage: `url("https://placeimg.com/2000/2000/tech")`}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <div className="avatar">
                    <div className="w-36 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profilePictureUrl} alt="Profile"/>
                    </div>
                </div>
                <h1 className="text-5xl font-bold">{name}</h1>
                {companyName && <h1 className="text-3xl font-bold">{companyName}</h1>}
                <h1 className="mb-5 text-xl font-bold">{jobTitle}</h1>
                <div className="divider"/>
                <p className="mb-5">{bio}</p>
                <div className="divider"/>
                <div className="text-2xl text-left mb-3">Contacts</div>
                <ul className="list-none text-left">
                    <li>
                        <div>
                            <SendIcon/> <a target="_blank" href={`mailto:${email}`}
                                           className="ml-1 text-xs" rel="noreferrer">
                            {email}
                        </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <PhoneIcon/>
                            <button className="ml-2 text-xs">{phoneNumber}</button>
                        </div>
                    </li>
                    {linkedinUrl && <li>
                        <div>
                            <LinkedInIcon/>
                            <a target="_blank" href={linkedinUrl} className="ml-2 text-xs" rel="noreferrer">LinkedIn</a>
                        </div>
                    </li>}
                </ul>
                <div className="divider"/>
                <div className="mt-10 hover:animate-bounce">
                    <p className="uppercase">Scroll down for more</p>
                    <ArrowDropDownIcon/></div>
            </div>
        </div>
    </div>
}

export default ProfileSection
