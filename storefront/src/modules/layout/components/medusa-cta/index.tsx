import { Text } from "@medusajs/ui"
import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Reddit,
  Facebook,
  Twitch,
  Youtube,
} from "lucide-react"

const SocialCTA = () => {
  const iconClass = "w-4 h-4 text-gray-400 hover:text-gray-600 transition"

  const socials = [
    { href: "https://www.instagram.com/domusbitcoin/", Icon: Instagram },
    { href: "https://www.linkedin.com/company/domusbitcoin/", Icon: Linkedin },
    { href: "https://x.com/DomusBitcoin", Icon: Twitter },
    { href: "https://github.com/DomusBitcoin", Icon: Github },
    { href: "https://www.reddit.com/user/DomusBitcoin/", Icon: Reddit },
    { href: "https://facebook.com/DomusBitcoin", Icon: Facebook },
    { href: "https://www.twitch.tv/domusbitcoin", Icon: Twitch },
    { href: "https://www.youtube.com/@DomusBitcoin", Icon: Youtube },
  ]

  return (
    <Text className="flex gap-x-3 items-center txt-compact-small-plus">
      Follow us:
      <div className="flex gap-x-2">
        {socials.map(({ href, Icon }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer">
            <Icon className={iconClass} />
          </a>
        ))}
      </div>
    </Text>
  )
}

export default SocialCTA
