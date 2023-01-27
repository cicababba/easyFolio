import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SocialIcons from "./SocialIcons";

const ProfileSection = ({profileData}) => {
    const {
        profilePictureUrl,
        name,
        companyName,
        jobTitle,
        birthDate,
        profileSectionBackGroundUrl,
        backgroundType,
        contacts,
        bio
    } = profileData

    const bgUrl = profileSectionBackGroundUrl || `https://placeimg.com/2000/2000/${backgroundType}`

    return <div className="hero min-h-screen animate-in fade-in slide-in-from-bottom duration-1000"
                style={{backgroundImage: `url("${bgUrl}")`}}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                {profilePictureUrl &&
                    <div className="avatar">
                        <div
                            className="w-36 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={profilePictureUrl} alt="Profile"/>
                        </div>
                    </div>}
                {!profilePictureUrl && <div className="avatar placeholder">
                    <div
                        className="bg-neutral-focus text-neutral-content w-36 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <span className="text-3xl">{name[0]}</span>
                    </div>
                </div>}
                <h1 className="text-5xl font-bold">{name}</h1>
                {companyName && <h1 className="text-3xl font-bold">{companyName}</h1>}
                <h1 className="text-xl font-bold">{jobTitle}</h1>
                <p className="mb-5 text-sm">{birthDate}</p>
                <div className="divider"/>
                <p className="mb-5">{bio}</p>
                <div className="divider"/>
                <div className="text-2xl mb-3">Contacts</div>
                <div className="flex flex-row flex-wrap justify-center">
                    <SocialIcons contacts={contacts}/>
                </div>
                <div className="divider"/>
                <div className="mt-10">
                    <p className="uppercase">Scroll down to see more</p>
                    <ArrowDropDownIcon/>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileSection
