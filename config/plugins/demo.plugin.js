class DemoPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    // Tap into compilation hook which gives compilation as argument to the callback function
    compiler.hooks.compilation.tap("DemoPlugin", compilation => {
      // Now we can tap into various hooks available through compilation
      compilation.hooks.optimize.tap("DemoPlugin", () => {
        console.log('Assets are being optimized.')
      })
    })
  }
}
module.exports = DemoPlugin