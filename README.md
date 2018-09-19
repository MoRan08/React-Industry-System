## React-Industry-System ##

  基于React的定向的行业管理系统。

## 项目简介

根据市场观察，小型理发店以及一些小型私人的商铺中，对于商品的库存管理、流水记账和会员管理还停留在账本记录，存在效率低、易出错、操作不便等缺点。综上所述：利用现有的技术以及当下趋势，开发一款适用于小型店铺的日常管理系统，该系统由系统管理、服务项目、商品库存、员工管理、提成设置、会员管理、收银中心、营业明细、财务报表、通讯管理和个人中心等几大模块构成。

## 框架与技术栈 ##

1. React16
2. Router4
3. Redux 
4. webpack4 
5. less
6. axios
7. antd
8. proxy


## 配置less ##

1. npm run eject
2. npm install less-loader less --save-dev
3. 修改 webpack.config.dev.js 和 webpack.config-prod.js 配置文件

  ```
  test: /\.css$/ 改为 /\.(css|less)$/, 修改后如下：

    exclude: [
      /\.html$/,
      /\.(js|jsx)$/,
      /\.(css|less)$/,
      /\.json$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/,
    ],
    
  test: /\.css$/ 的 use 数组配置增加 less-loader
  修改后如下：

  {
    test: /\.(css|less)$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
                ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    {
      loader: require.resolve('less-loader') // compiles Less to CSS
    }
  ],
},
  ```

## 设置代理 ##

```
// package.json 文件
 "proxy":{
    "/*":{
       "target":"http://192.168.1.108:8808",
       "changeOrigin": true
     }
   }
```

## 模块热替换(HMR)  

在React 的入口文件 src/index.js中，添加一些配置代码。 

```
if (module.hot) {
  module.hot.accept();
}
```

## 配置简化路径

 修改 webpack.config.dev 与 webpack.config.prod 两个文件 加入相同配置

```
//简化路径配置
const __dirname = '';
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

// 修改
alias: {
      'react-native': 'react-native-web',
      '@': resolve('src')
}

```

