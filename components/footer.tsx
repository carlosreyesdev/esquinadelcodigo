import { SocialLinks } from "./social-links"
import { Typography } from "./ui/typography"

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container grid justify-items-center gap-y-2 text-center">
        <Typography variant="p">
          Hecho con <span className="animate-pulse">💓</span> por{" "}
          <a
            href="https://carlosreyes.me"
            target="_blank"
            className="text-[#33DFBD] underline-offset-4 hover:underline"
          >
            Carlos Reyes
          </a>
        </Typography>
        <SocialLinks />
      </div>
    </footer>
  )
}
