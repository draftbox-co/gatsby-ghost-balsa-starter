// loading env
const activeEnv = process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

let siteConfig;
let ghostConfig;

// loading site config
try {
  siteConfig = require(`./siteConfig`);
} catch (e) {
  siteConfig = null;
}

// loading ghost config
try {
  ghostConfig = require(`./.ghost`);
} catch (e) {
  ghostConfig = {
    development: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      version: process.env.GHOST_VERSION
    },
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      version: process.env.GHOST_VERSION
    }
  };
} finally {
  const { apiUrl, contentApiKey } =
    process.env.NODE_ENV === `development`
      ? ghostConfig.development
      : ghostConfig.production;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    ghostConfig = null; //allow default config to take over
  }
}

// setting up plugins
let gatsbyPlugins = [
  {
    resolve: `@draftbox-co/gatsby-ghost-balsa-theme`,
    options: {
      ghostConfig: ghostConfig,
      siteConfig: siteConfig
    }
  }
]

if(process.env.SEGMENT_KEY) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-segment-js`,
    options: {
      prodKey: process.env.SEGMENT_KEY,
      devKey: process.env.SEGMENT_KEY,
      trackPage: true,
      delayLoad: true,
      delayLoadTime: 1000
    }
  });
}

if(process.env.GA) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA,
      head: true
    }
  });
}

if (process.env.GATSBY_MIXPANEL_TOKEN) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-mixpanel`,
    options: {
      apiToken: process.env.GATSBY_MIXPANEL_TOKEN,
      enableOnDevMode: true,
      pageViews: 'all'
    },
  });
}

if (process.env.GATSBY_HOTJAR_ID) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-hotjar`,
    options: {
      id: process.env.GATSBY_HOTJAR_ID,
      sv: process.env.GATSBY_HOTJAR_SV
    }
  });
}

if (process.env.GATSBY_GTAG_MANAGER_ID) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: process.env.GATSBY_GTAG_MANAGER_ID,
      includeInDevelopment: true
    },
  });
}

if (process.env.GATSBY_TAWK_ID) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-tawk`,
    options: {
      tawkId: process.env.GATSBY_TAWK_ID,
    }
  });
}

if (process.env.GATSBY_CRISP_ID) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-crisp-chat`,
    options: {
      websiteId: process.env.GATSBY_CRISP_ID,
      enableDuringDevelop: true
    }
  });
}

if (process.env.GATSBY_OLARK_ID) {
  gatsbyPlugins.unshift({
    resolve: `gatsby-plugin-olark`,
    options: {
      olarkSiteID: process.env.GATSBY_OLARK_ID,
    }
  });
}


console.log(JSON.stringify(gatsbyPlugins, null, 2));
module.exports = {
  plugins: gatsbyPlugins
};
