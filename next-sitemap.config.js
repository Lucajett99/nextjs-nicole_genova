/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.logopedistanicolegenova.it',
    generateRobotsTxt: true,
    changefreq: 'weekly',

    priority: {
        // Pagine principali
        '/': 1.0,     
        '/treatments': 0.9,
        '/myAproach': 0.9,
        '/whoIam': 0.8,

        // Pagine di secondarie
        '/contacts': 0.6,
    },

    exclude: [
        '/404'
    ],

    // Configurazione robots.txt
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ],
        additionalSitemaps: [
            'https://www.logopedistanicolegenova.it/sitemap.xml'
        ]
    }
}