/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "Finland Web Directory",
  author: "Tang Lang",
  headerTitle: "Userful finland websites directory",
  description: "Userful finland websites directory",
  language: "en-us",
  theme: "system",
  siteUrl: "https://suomi.vercel.app/",
  siteRepo: "https://github.com/fansize/suomi",
  siteLogo: "/moomin.svg",
  socialBanner: "",
  mastodon: "https://mastodon.social/@mastodonuser",
  email: "langlang1991@gmail.com",
  github: "https://github.com/fansize",
  twitter: "https://twitter.com/pm_tanglang",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  linkedin: "https://www.linkedin.com/in/tanglang/",
  locale: "en-US",
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
};

module.exports = siteMetadata;
