module.exports = {
  presets: ["next/babel", ["babel-preset-expo", { jsxRuntime: "automatic" }]],
  plugins: [
    // https://github.com/expo/expo/issues/14971
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ],
};
