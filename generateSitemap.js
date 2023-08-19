const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

// An array with your links
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/blog", changefreq: "daily", priority: 0.8 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  {
    url: "/blog/python-decorators-what-are-they-and-how-to-use-them",
    changefreq: "daily",
    priority: 0.8,
  },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: "https://mahmed0x1.vercel.app" });

const sitemapPath = "./public/files/sitemap.xml";

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync(sitemapPath, data.toString());
});
