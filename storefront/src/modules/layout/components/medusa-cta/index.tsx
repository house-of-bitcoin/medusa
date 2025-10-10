import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  const iconClass = "w-4 h-4 fill-gray-400 hover:fill-gray-600 transition"

  const socials = [
    {
      href: "https://www.instagram.com/domusbitcoin/",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm6.5-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/company/domusbitcoin/",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12.02H3V8.98zm7 0h3.64v1.64h.05c.51-.97 1.75-1.99 3.6-1.99 3.85 0 4.56 2.54 4.56 5.84v6.53h-4v-5.79c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.89H10V8.98z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/DomusBitcoin",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M4 4h16v16H4V4zm13.8 3.2h-2.3l-2.2 3.1-2.1-3.1H9.1l3 4.4-3.2 4.5h2.3l2.3-3.2 2.2 3.2h2.3l-3.3-4.6 3.1-4.3z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/DomusBitcoin",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.6 9.6 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.56 1.37.21 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.86-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.57.69.47A10 10 0 0 0 12 2z" />
        </svg>
      ),
    },
    {
      href: "https://www.reddit.com/user/DomusBitcoin/",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M12 2c5.52 0 10 3.58 10 8 0 1.97-1.07 3.73-2.8 5.01.12.38.18.77.18 1.17 0 2.78-3.13 5.04-7.38 5.04S4.62 19.96 4.62 17.18c0-.4.06-.79.18-1.17C3.07 13.73 2 11.97 2 10c0-4.42 4.48-8 10-8zm4.38 15.18a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-8.76 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 14c1.53 0 2.5.8 2.5 1.5S13.53 17 12 17s-2.5-.8-2.5-1.5S10.47 14 12 14z" />
        </svg>
      ),
    },
    {
      href: "https://facebook.com/DomusBitcoin",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.63-1.3 1.28V12h2.2l-.35 3h-1.85v7A10 10 0 0 0 22 12z" />
        </svg>
      ),
    },
    {
      href: "https://www.twitch.tv/domusbitcoin",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M4 2L3 6v15h5v1h3l1-1h3l4-4v-6h-6v3h3v2h-3l-1 1H9v-3H6V4h12v4h2V2H4z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@DomusBitcoin",
      svg: (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M21.8 8s-.2-1.4-.8-2c-.8-.9-1.7-.9-2.1-1-3-.2-7.5-.2-7.5-.2h-.1s-4.5 0-7.5.2c-.4 0-1.3 0-2.1 1-.6.6-.8 2-.8 2S1 9.6 1 11.3v1.4c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.9 1.8.8 2.2.9 1.6.1 7.3.2 7.3.2s4.5 0 7.5-.2c.4 0 1.3 0 2.1-1 .6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.4c0-1.7-.2-3.3-.2-3.3zM9.8 14.6v-5.2l5.2 2.6-5.2 2.6z" />
        </svg>
      ),
    },
  ]

  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Follow us:
      <div className="flex gap-x-2 items-center">
        {socials.map(({ href, svg }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer">
            {svg}
          </a>
        ))}
      </div>
    </Text>
  )
}

export default MedusaCTA
