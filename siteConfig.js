module.exports = {
  siteUrl: "https://ghost-balsa-preview.draftbox.co",
  postsPerPage: 12,
  siteTitleMeta: "Built with Draftbox",
  siteDescriptionMeta:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  shareImageWidth: 1000,
  shareImageHeight: 523,
  shortTitle: "Built with Draftbox",
  siteIcon: "favicon.png",
  backgroundColor: "#e9e9e9",
  themeColor: "#15171A",
  apiUrl: "https://ghost.theasdfghjkl.com",
  header: {
    navigation: [
      {
        label: "Home",
        url: "https://ghost-balsa-preview.draftbox.co/",
      },
      {
        label: "Contact",
        url: "https://ghost-balsa-preview.draftbox.co/contact",
      },
    ],
  },
  footer: {
    copyright: "Built with Draftbox",
    navigation: [
      {
        label: "Home",
        url: "https://ghost-balsa-preview.draftbox.co/",
      },
      {
        label: "Sitemap",
        url: "https://ghost-balsa-preview.draftbox.co/sitemap.xml",
      },
      {
        label: "RSS",
        url: "https://ghost-balsa-preview.draftbox.co/rss.xml",
      },
      {
        label: "Contact",
        url: "https://ghost-balsa-preview.draftbox.co/contact",
      },
      {
        label: "External Link",
        url: "https://spectrum.chat/gatsby-js/themes?tab=posts",
      },
    ],
  },
  subscribeWidget: {
    visible: true,
    title: "Subscribe to Built with Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Built with Draftbox.",
  },
  socialLinks: {
    twitter: "https://twitter.com/draftboxhq",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com",
    github: "https://github.com/draftbox-co",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
  },
  twitterCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "twitterImage.png",
    username: "@DraftboxHQ",
  },
  facebookCard: {
    title: "Built with Draftbox",
    description:
      "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding. Draftbox is a new-age blogging platform for everyone, built on Gatsby.",
    imageUrl: "facebookImage.png",
    appId: "",
    width: 1000,
    height: 523,
  },
  siteTitle: "Built with Draftbox",
  siteDescription:
    "Lightning fast, secure front-end for your WordPress or Ghost blog, without coding.",
  language: "en",
  logoUrl: "logo.svg",
  iconUrl:
    "https://ghost.theasdfghjkl.com/content/images/2020/05/draftbox-colored-icon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "alternateLogo.svg",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#6f42c1`,
      },
      {
        varName: "--primary-color-active",
        value: `#4b2d83`,
      },
      {
        varName: "--primary-color-light",
        value: `#b49ddf`,
      },
      {
        varName: "--sans-font",
        value: `"Inter"`,
      },
      {
        varName: "--sans-font-normal",
        value: `400`,
      },
      {
        varName: "--sans-font-medium",
        value: `500`,
      },
      {
        varName: "--sans-font-semibold",
        value: `600`,
      },
      {
        varName: "--sans-font-bold",
        value: `700`,
      },
      {
        varName: "--serif-font",
        value: `Lora`,
      },
      { varName: "--serif-font-light", value: `400` },
      { varName: "--serif-font-normal", value: `400` },
      { varName: "--serif-font-semibold", value: `600` },
      { varName: "--serif-font-bold", value: `700` },
      { varName: "--serif-font-extrabold", value: `700` },
    ],
    fonts: [
      {
        family: "Inter",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Lora",
        variants: [ "400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
