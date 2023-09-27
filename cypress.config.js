module.exports = {
  projectId: 'wtw9rm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    env: {hideXhr : true}, // for not see all xhr requests in test running
    testIsolation: false, // fot not taking blank page error
    baseUrl:"http://10.10.10.79:30003",
    viewportWidth : 1800,
    viewportHeight : 1000,
    reporter: 'cypress-mochawesome-reporter',
    experimentalRunAllSpecs: true, // for all specs run
    watchForFileChanges: false,  // for not automatically running cypress
   
    
  
  },
};
