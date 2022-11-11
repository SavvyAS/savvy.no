/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    outDir: "./out",
    robotsTxtOptions: {
        policies: [
            {
                disallow : process.env.ENV === "production" ? "" : "/",
                userAgent: "*"
            }
        ]
    }
}