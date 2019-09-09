const {override, fixBabelImports, addLessLoader,addDecoratorsLegacy,addWebpackAlias} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    }),
    addDecoratorsLegacy(),
    //配置路劲别名，简化路径
    addWebpackAlias({

    })
);

