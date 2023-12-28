const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, //esse comando diz que não vou utilizar a pasta Fixture, agr se eu rodar o npx cypress open ele não vai criar essa pasta de novo.
  video: false, //desligando a funcionalidade de gerar videos, qnd rodar em modo redlless.
})
