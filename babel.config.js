// babel.config.js
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            // This needs to correspond to tsconfig.json
            components: "./app/components",
            constant: "./app/constant",
            interfaces: "./app/interfaces",
            navigation: "./app/navigation",
            styles: "./app/styles",
            screens: "./app/screens",
          },
        },
      ],
    ],
  }
}