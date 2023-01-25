import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ProfileSection = ({profileData}) => {
    const {
        profilePictureUrl,
        name,
        companyName,
        jobTitle,
        birthDate,
        profileSectionBackGroundUrl,
        backgroundType,
        email,
        phoneNumber,
        linkedinUrl,
        bio
    } = profileData

    const bgUrl = profileSectionBackGroundUrl || `https://placeimg.com/2000/2000/${backgroundType}`

    return <div className="hero min-h-screen transition ease-in-out -translate-y-1  duration-300"
                style={{backgroundImage: `url("${bgUrl}")`}}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <div className="avatar">
                    <div className="w-36 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profilePictureUrl} alt="Profile"/>
                    </div>
                </div>
                <h1 className="text-5xl font-bold">{name}</h1>
                {companyName && <h1 className="text-3xl font-bold">{companyName}</h1>}
                <h1 className="text-xl font-bold">{jobTitle}</h1>
                <p className="mb-5 text-sm">{birthDate}</p>
                <div className="divider"/>
                <p className="mb-5">{bio}</p>
                <div className="divider"/>
                <div className="text-2xl mb-3">Contacts</div>
                <div className="flex flex-row justify-center">
                    <span className="mx-5 cursor-pointer" onClick={() => window.open(`mailto:${email}`, '_blank')}>
                        <AlternateEmailIcon/>
                    </span>
                    <span className="mx-5 cursor-pointer" onClick={() => window.open(`tel:${phoneNumber}`, '_blank')}>
                    <PhoneIcon/>
                    </span>
                    {linkedinUrl &&
                        <span className="mx-5 cursor-pointer" onClick={() => window.open(linkedinUrl, '_blank')}>
                            <LinkedInIcon/>
                        </span>
                    }
                </div>
                <div className="divider"/>
                <div className="mt-10 hover:animate-bounce">
                    <p className="uppercase">Scroll down for more</p>
                    <ArrowDropDownIcon/></div>
            </div>
        </div>
    </div>
}

export default ProfileSection
