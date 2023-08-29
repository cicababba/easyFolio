import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialIcons = ({contacts}) => {

    return contacts.map(el => {
        let {key, value} = el
        key = key.toLowerCase()
        switch (key) {
            case "linkedin":
                return <span className="m-2 cursor-pointer" onClick={() => window.open(value, '_blank')}>
                            <LinkedInIcon/>
                        </span>
            case "phone":
                return <span className="m-2 cursor-pointer" onClick={() => window.open(`tel:${value}`)}>
                    <PhoneIcon/>
                    </span>
            case "mail":
                return <span className="m-2 cursor-pointer" onClick={() => window.open(`mailto:${value}`, '_blank')}>
                        <AlternateEmailIcon/>
                    </span>
            case "twitter":
                return <span className="m-2 cursor-pointer" onClick={() => window.open(`${value}`, '_blank')}>
                        <TwitterIcon/>
                    </span>
            case "facebook":
                return <span className="m-2 cursor-pointer" onClick={() => window.open(`${value}`, '_blank')}>
                        <FacebookIcon/>
                    </span>
            case "telegram":
                return <span className="m-2 cursor-pointer"
                             onClick={() => window.open(`https://telegram.me/${value}`, '_blank')}>
                        <TelegramIcon/>
                    </span>
            case "instagram":
                return <span className="m-2 cursor-pointer" onClick={() => window.open(`${value}`, '_blank')}>
                        <InstagramIcon/>
                    </span>
            case "whatsapp":
                return <span className="m-2 cursor-pointer"
                             onClick={() => window.open(`whatsapp://send?phone=${value}`, '_blank')}>
                        <WhatsAppIcon/>
                    </span>
                     case "youtube":
                        return <span className="m-2 cursor-pointer"  onClick={() => window.open(value, '_blank')}>
                                <YouTubeIcon/>
                            </span>
            default:
                return <></>

        }
    })
}

export default SocialIcons
