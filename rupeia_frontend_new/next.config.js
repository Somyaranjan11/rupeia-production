// next.config.js

/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/]
  })
  
  module.exports = withPWA({
    reactStrictMode: true,
  })