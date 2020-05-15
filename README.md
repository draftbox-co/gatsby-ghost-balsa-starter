[![Draftbox](https://res.cloudinary.com/thinkcdnimages/image/upload/v1589291053/Draftbox/draftbox-for-github.svg)](https://draftbox.co)

# gatsby-ghost-balsa-starter 

A Gatsby starter for creating blogs from headless Ghost CMS. 

Turn your Ghost blog into a lightning fast static website. This Gatsby theme is a front-end replacement of the Ghost Handlebars engine featuring the Balsa skin and functionality. All content is sourced from a headless Ghost CMS.

> This starter is being used at [Draftbox](https://draftbox.co). Get lightning fast, secure front-end for your WordPress or Ghost blog, in 5 minutes or less, without coding. For our fellow devs, we also provide code export feature.

## Demo

>Play with the [Demo](https://ghost-balsa-preview.draftbox.co/) to get a first impression.


&nbsp;


## Features

- Balsa Skin from Draftbox
- SEO optimized
- Fully responsive
- Gatsby images
- Styled 404 page
- RSS Feed
- AMP Pages
- Sitemap
- Contact Form
- Subscribe Form
- Social Sharing
- Google Analytics Integration
- Segment Integration
- Disqus Integration
- Composable and extensible


## Getting Started

1. Install this starter by running

    ```bash
    gatsby new try-ghost https://github.com/draftbox-co/gatsby-ghost-balsa-starter
    ```

2. Change directory

    ```bash
    cd try-ghost
    ```

3. Run

    ```bash
    gatsby develop
    ```
    and visit your site at `http://localhost:8000`.


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── static
    ├── .gitignore
    ├── gatsby-config.js
    ├── yarn.lock
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/static`**: This directory will contain all of the static files required by theme such as `favicon`, `logo` and `robot.txt`.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

5. **`yarn.lock`** (See `yarn.lock` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`README.md`**: A text file containing useful reference information about your project.

## Configure

```js
    //siteConfig.js
    module.exports = {
        siteUrl: `https://your-blog.com`, // Do not include a trailing slash!
    
        postsPerPage: 12, //for future use
    
        siteTitleMeta: `Gatsby Starter Ghost CMS`, // This allows an alternative site title for meta data for pages.
        siteDescriptionMeta: `Gastby Starter with Ghost CMS and Casper Skin`, // This allows an site description for meta data for pages.
    
        shareImageWidth: 1000, // Change to the width of your default share image
        shareImageHeight: 523, // Change to the height of your default share image
    
        shortTitle: `Ghost`, // Used for App manifest e.g. Mobile Home Screen
        siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
        backgroundColor: `#e9e9e9`, // Used for Offline Manifest
        themeColor: `#15171A`, // Used for Offline Manifest
    }
```

In the configuration shown above, the most important fields to be changed are `siteUrl`, `siteTitleMeta` and `siteDescriptionMeta`. Update at least those to fit your needs.


## Ghost Content API keys

All content is sourced from a Ghost CMS. If you don't customize the file `.ghost.json` content is fetched from the demo location at `https://cms.gotsby.org`. Surely you want to source your own content. Change the keys to match your own Ghost CMS Content API keys:

```bash

    {
        "development": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fccdb0e4ea5b572e2e5b92942"
        },
        "production": {
            "apiUrl": "http://localhost:2368",
            "contentApiKey": "9fccdb0e4ea5b572e2e5b92942"
        }
    }
```

## Deploy

```bash
    gatsby build
```

After completion of the build process your static site can be found in the `public/` folder. Copy those files over to your webserver.


## Optimizing

You can disable the default Ghost Handlebars theme front-end by enabling the `Make this site private` flag within your Ghost settings. This enables password protection in front of the Ghost install and sets `<meta name="robots" content="noindex" />` so your Gatsby front-end becomes the source of truth for SEO.


## Authors
- Arun Priyadarshi ([@Gunnerforlife](https://github.com/Gunnerforlife)) – [Draftbox](https://draftbox.co)
- Keyur Raval ([@thandaanda](https://github.com/thandaanda)) – [Draftbox](https://draftbox.co)
- Shyam Lohar ([@shyamlohar](https://github.com/shyamlohar)) – [Draftbox](https://draftbox.co)
- Tanmay Desai ([@tanmaydesai89](https://github.com/tanmaydesai89)) – [Draftbox](https://draftbox.co)

## Contributions
PRs are welcome! Consider contributing to this project if you are missing feature that is also useful for others.

# Copyright & License

Copyright (c) 2020 [Draftbox](https://draftbox.co) - Released under the [MIT license](LICENSE).

