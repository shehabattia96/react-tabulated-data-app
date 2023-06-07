const { override, useBabelRc, removeModuleScopePlugin, addExternalBabelPlugin, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
    useBabelRc(),
    addWebpackAlias({
        ['@app']: path.resolve(__dirname, '..')
    }),
    addExternalBabelPlugin(['@babel/plugin-syntax-import-assertions',
        { allowNamespaces: true }]),
    removeModuleScopePlugin(),
)