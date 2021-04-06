# phx-webpack-example

> An alternative `assets` dir aiming to integrate [TailwindCSS](https://tailwindcss.com/) and [Alpine.js](https://github.com/alpinejs/alpine) for Phoenix.

## Preface

Initial commit of this project is generated by following command:

```sh
$ mix phx.new phx-webpack-example --app hello --umbrella --live --no-ecto
```

And I recommend you to create your project with:

```sh
$ mix phx.new demo --umbrella --live
```

## Features

- TailwindCSS with useful plugins
  - `@tailwindcss/forms`
  - `@tailwindcss/typography`
  - `@tailwindcss/aspect-ratio`
- Alpine.js with [necessary patch](https://github.com/c4710n/phx-webpack-example/blob/2eac11c8d18247088b80109bb46847a4138fc25d/apps/hello_web/assets/js/index.js#L16)
- set [Inter var](https://rsms.me/inter/) as default font
- [theme-sensitive](https://github.com/c4710n/phx-webpack-example/blob/2eac11c8d18247088b80109bb46847a4138fc25d/apps/hello_web/assets/css/custom-nprogress.css#L7) nprogress
- Webpack 5 + modular configuration, it supports:
  - [all the good things](https://webpack.js.org/blog/2020-10-10-webpack-5-release/) provided by Webpack 5
  - JS:
    - sourcemap
    - uglify
  - CSS:
    - sourcemap
    - minify
    - autoprefixer
    - nested rules
  - fonts: `eot` / `woff` / `woff2` / `ttf`
  - images: `png` / `jpe?g` / `gif` / `svg`

## Usage

### For umbrella projects

1. Replace your `apps/<app>_web/assets` with `apps/hello_web/assets`:

```sh
$ rm -rf <app>_web/assets
$ svn export \
  https://github.com/c4710n/phx-webpack-example/trunk/apps/hello_web/assets \
  apps/<app>_web/assets
```

> SVN provides `export` function which is useful for copying a sub-directory from a repo.

2. Adjust `config/dev.exs` to fit Webpack 5:

```ex
config :hello, HelloWeb.Endpoint,
  # ...
  watchers: [
    node: [
      "node_modules/webpack/bin/webpack.js",
      "--mode",
      "development",
      "--watch",       # watch option for Webpack 5
      # ...
```

### For non-umbrella projects

1. Replace your `assets` with `apps/hello_web/assets`:

```sh
$ rm -rf assets
$ svn export \
  https://github.com/c4710n/phx-webpack-example/trunk/apps/hello_web/assets \
  assets
```

2. Adjust `assets/package.json` in order to fix the path:

```json
// ...

"dependencies": {
  "phoenix": "file:../deps/phoenix",
  "phoenix_html": "file:../deps/phoenix_html",
  "phoenix_live_view": "file:../deps/phoenix_live_view",

// ...
```

3. Adjust `config/dev.exs` to fit Webpack 5:

```ex
config :hello, HelloWeb.Endpoint,
  # ...
  watchers: [
    node: [
      "node_modules/webpack/bin/webpack.js",
      "--mode",
      "development",
      "--watch",       # watch option for Webpack 5
      # ...
```

## More

- [phx_tailwind_generators](https://github.com/wintermeyer/phx_tailwind_generators)

## License

MIT
