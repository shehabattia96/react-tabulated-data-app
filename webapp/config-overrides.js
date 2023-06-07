const { override, removeModuleScopePlugin, addExternalBabelPlugin, addWebpackAlias, addBabelPresets, babelInclude } = require('customize-cra')
const path = require('path')

module.exports = override(
    addBabelPresets([
        '@babel/preset-typescript',]),
    addExternalBabelPlugin(['@babel/plugin-syntax-import-assertions',
        { allowNamespaces: true }]),
    removeModuleScopePlugin(),
    addWebpackAlias({
        ['@app']: path.resolve(__dirname, '..')
    }),
    babelInclude([path.resolve(__dirname, 'src'), path.resolve(__dirname, '../mock'), path.resolve(__dirname, '../core')])
)