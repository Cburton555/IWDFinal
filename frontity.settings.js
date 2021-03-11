const settings = {
  "name": "iwd-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "my-first-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://cburton5.bitlampsites.com/wpd/php/final",
          "postTypes": [
            {
              "type": "books",
              "endpoint": "books",
              "archive": "/books",
            },

          ]
        }

      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
