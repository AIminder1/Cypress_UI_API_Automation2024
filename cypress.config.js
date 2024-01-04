module.exports = {
  e2e: {
    baseUrl: "https://technovaschool.github.io/TechNovaBank",
    setupNodeEvents(on, config) {
      videoComprasion: 
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
      // implement node event listeners here
    },
  },
};
