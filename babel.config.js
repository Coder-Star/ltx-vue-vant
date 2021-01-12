const plugins = [
  ["import", {
    libraryName: "vant",
    libraryDirectory: "es",
    style: name => `${name}/style/less`
  }, "vant"]
]

module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
  ],
  plugins
}
