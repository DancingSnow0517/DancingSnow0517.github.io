module.exports = {
    globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}'],
    globDirectory: 'public',
    swDest: 'public/service-worker.js',
    maximumFileSizeToCacheInBytes: 10485760,
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [

    ]
}