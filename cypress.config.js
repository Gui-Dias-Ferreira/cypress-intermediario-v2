const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,
  video: false,
  env: {
      hideCredentials: true,
      requestMode: true,
      // snapshotOnly: true - Pode ser configurado aqui ou nas páginas do teste em si, ele produz o feedback visual do que está acontecendo na api.
    }
  
})
