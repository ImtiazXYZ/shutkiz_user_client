/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.shutkiz.com", // 🔗 change this to your domain
  generateRobotsTxt: true, // ✅ also creates robots.txt
  sitemapSize: 7000, // optional: splits large sitemaps
  exclude: ["/admin/*", "/api/*"], // optional: exclude routes
};
