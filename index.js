module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",

  "env": {
    "es6": true,
    "jasmine": true
  },

  // Map from global var to bool specifying if it can be redefined
  "globals": {
    "__BUNDLE_START_TIME__": false,
    "__DEV__": true,
    "__dirname": false,
    "__filename": false,
    "__fbBatchedBridgeConfig": false,
    "alert": false,
    "cancelAnimationFrame": false,
    "clearImmediate": true,
    "clearInterval": false,
    "clearTimeout": false,
    "console": false,
    "document": false,
    "escape": false,
    "exports": false,
    "global": false,
    "jest": false,
    "pit": false,
    "Map": true,
    "module": false,
    "navigator": false,
    "process": false,
    "Promise": false,
    "requestAnimationFrame": true,
    "require": false,
    "Set": true,
    "setImmediate": true,
    "setInterval": false,
    "setTimeout": false,
    "window": false,
    "FormData": true,
    "XMLHttpRequest": false,

    // Flow "known-globals" annotations:
    "ReactElement": false,
    "ReactClass": false,
    "Class": false
  },
  "plugins": [
    "flow-vars",
    "flowtype"
  ],
  "rules": {
    "jsx-a11y/no-static-element-interactions": "off",
    "no-param-reassign": "warn",
    "global-require": "off",
    "no-multi-assign": "error",
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off", // test with jest --coverage and no --coverage will gen different snapshot
    "import/no-extraneous-dependencies": "off", // react-native can use @providesModule
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "react/no-multi-comp": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1
  }
}
