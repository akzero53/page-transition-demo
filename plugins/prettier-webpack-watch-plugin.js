const exec = require('child_process').exec;

class PrettierWebpackWatchPlugin {
  apply(compiler) {
    compiler.hooks.run.tapAsync('PrettierWebpackWatchPlugin', this.prettify);
    compiler.hooks.watchRun.tapAsync('PrettierWebpackWatchPlugin', this.prettify);
  }

  prettify(_, callback) {
    exec('./prettify.sh', (error, stdout, stderr) => {
      console.log(stdout);
      callback();
    });
  }
}

module.exports = PrettierWebpackWatchPlugin;
