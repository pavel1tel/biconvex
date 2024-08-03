module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "30em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "75em",
        "mantine-breakpoint-lg": "90em",
        "mantine-breakpoint-xl": "120em",
      },
    },
    autoprefixer: {}
  }
}
