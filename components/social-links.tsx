import { cn } from "@/lib/utils"
import { Github, Globe, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export const socialLinks = [
  {
    name: "Website",
    link: "https://carlosreyes.me",
    icon: Globe,
  },
  {
    name: "GitHub",
    link: "https://github.com/carlosreyesdev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/carlosreyesdev",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/carlosreyesdev",
    icon: Instagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/carlosreyesdev_",
    icon: Twitter,
  },
]

interface SocialLinksProps {
  className?: string
}
export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <TooltipProvider>
      <ul className={cn("inline-flex space-x-1", className)}>
        {socialLinks.map(({ name, link, icon: Icon }) => (
          <li key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon">
                  <a href={link} target="_blank">
                    <Icon className="w-5" />
                    <span className="sr-only">{name}</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{name}</TooltipContent>
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  )
}
