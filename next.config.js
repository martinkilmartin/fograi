const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  extends: ['plugin:@next/next/recommended'],
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
  swcMinify: true,
})
