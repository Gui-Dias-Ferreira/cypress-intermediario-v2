const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,
  video: false,
=======
    baseUrl: 'http://localhost/',
    env: {
      hideCredentials: true, //esconde os dados sensíveis como accessToken
      requestMode: true,
      //snapshotOnly: true -> aqui está sendo global //esse comando mostra o que está acontecendo nos teste de API.
    },
  },
  fixturesFolder: false, //esse comando diz que não vou utilizar a pasta Fixture, agr se eu rodar o npx cypress open ele não vai criar essa pasta de novo.
  video: false, //desligando a funcionalidade de gerar videos, qnd rodar em modo redlless.
>>>>>>> dfd93d2cb80d50a297dfb059643ddc48e438846d
})
