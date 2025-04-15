// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
<<<<<<< HEAD
import './commands'
=======
import '../../node_modules/cypress-plugin-api'
import './api_commands'
import './gui_commands'

>>>>>>> dfd93d2cb80d50a297dfb059643ddc48e438846d

// Alternatively you can use CommonJS syntax:
// require('./commands')