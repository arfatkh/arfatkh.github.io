const siteConfig = {
  title: "Muhammad Arfat",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Arfat",
    description: "CS Student"
  }
};
const socialLinks = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/arfatkh"
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/arfatkh/"
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:email@arfat.me"
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];
const NAV_LINKS = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Blog",
    path: "/blog"
  },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Archive",
    path: "/archive"
  }
];

export { NAV_LINKS as N, socialLinks as a, siteConfig as s };
