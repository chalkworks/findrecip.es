# findrecip.es

> A place to discover recipes

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## File Structure

- `src`: main folder for components and assets
  - `App.vue`: Main app file, this is the parent of all other components
  - `main.js`: Main app scripts, this sets up the `App` component
  - `components`: All child components are in this directory
  - `assets`: All assets (images, fonts, etc) should be in this directory, this will be optimized and included **in** the final build files
  - `router`: Router Setup
    -  `index.js`: This is the main file for defining routes
- `static`: used for any static files NOT used in components

## Component CSS Style guide

- All CSS should be written in Stylus, by providing `lang="stylus"` in the `style` element of the component.
- All components should use the variables provided in `./assets/config.styl`
