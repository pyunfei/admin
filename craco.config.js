// const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");
const path = require('path');
const pathResolve = pathUrl => path.join(__dirname, pathUrl);

module.exports = {
  plugins: [
    // {
    //   plugin: CracoAntDesignPlugin,
    //   options: {
    //     customizeThemeLessPath: path.join(
    //       __dirname,
    //       "src/styles/antd.theme.less"
    //     ),
    //   },
    // },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        },
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = path.join(__dirname, 'node_modules');
          return lessRule;
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json"
      }
    }
  ],
  babel: {
    // 支持装饰器模式语法
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }]
    ]
  },
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
      // 此处是一个示例，实际可根据各自需求配置
    }
  }
};