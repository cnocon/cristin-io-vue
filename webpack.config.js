import { VueLoaderPlugin } from "vue-loader"

export const module = {
  rules: [
    // ... other rules
    {
      test: /\.vue$/,
      loader: "vue-loader",
    },
    // this will apply to both plain `.scss` files
    // AND `<style lang="scss">` blocks in `.vue` files
    {
      test: /\.scss$/,
      use: ["vue-style-loader", "css-loader", "sass-loader"],
    },
  ],
}
export const plugins = [
  // make sure to include the plugin!
  new VueLoaderPlugin(),
]
