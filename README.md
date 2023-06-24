# 典读故事汇

## 1、文件结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── debug           # 调试环境证书/私钥文件
│   └── release         # 正式环境证书/私钥文件
└── src
│   ├── assets          # 公用的资源(images/styles/字体...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   └──styles       # 存放 less/css/sass 等公共样式资源
│   │   └──js           # 存储公共 javaScript 代码资源
│   │   └──data         # 模拟数据（开发时应使用真实接口数据）
│   │   └──iconfont     # 存放图标字体
│   ├── helper          # 项目自定义辅助各类工具
│   │   ├──apis         # 存储与后台请求接口相关(已封装好)
│   │   ├──ajax.js      # 对系统提供的 fetch api 进行链式封装
│   │   └──utils        # 存放项目所封装的工具类方法
│   ├── pages           # 统一存放项目页面级代码
│   ├── app.ux          # 应用程序代码的人口文件
│   ├── manifest.json   # 配置快应用基本信息
│   └── components      # 组件
└── package.json        # 定义项目需要的各种模块及配置信息
```