const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin =
   require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "producer",
        filename: "remoteEntry.js",
        exposes:{
          "./Search":"./src/components/Search.vue",
          "./Result":"./src/components/Search.vue",
        },
      }),
    ],
  },
})
