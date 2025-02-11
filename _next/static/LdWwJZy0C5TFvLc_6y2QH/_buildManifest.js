self.__BUILD_MANIFEST = {
    __rewrites: {
        beforeFiles: [],
        afterFiles: [{
            source: "/resume",
            destination: "/Resume.pdf"
        }],
        fallback: []
    },
    "/": ["static/chunks/pages/index-a66431a9bdcc402f.js"],
    "/_error": ["static/chunks/pages/_error-a4ba2246ff8fb532.js"],
    "/about": ["static/chunks/pages/about-71c27cfa4504a3be.js"],
    "/bmw-m4": ["static/chunks/pages/bmw-m4-e83927a96e867d0c.js"],
    "/cinephiled": ["static/chunks/pages/cinephiled-c443bc4cb5eb7181.js"],
    "/heavenly-bodies": ["static/chunks/pages/heavenly-bodies-fda85bc74ce4ad23.js"],
    "/pixelos": ["static/chunks/pages/pixelos-f95f01f1640ca36f.js"],
    sortedPages: ["/", "/_app", "/_error", "/about", "/bmw-m4", "/cinephiled", "/heavenly-bodies", "/pixelos"]
},
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
