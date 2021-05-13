# vue-blog-admin

> 该项目采用vue-admin-template制作。
>
> vue-admin-template是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

## Extra

写了一个系列的教程配套文章，如何从零构建一个完整的博客管理项目(更新中)。

- [vue后台管理系统开发流程全记录(一)_环境搭建 & 脚手架启动](https://blog.csdn.net/weixin_45809580/article/details/114369239)
- [vue后台管理系统开发流程全记录(二)_初始化和修改项目配置](https://blog.csdn.net/weixin_45809580/article/details/114369541)
- [vue后台管理系统开发流程全记录(三)_EasyMock虚拟后台接口对接创建](https://blog.csdn.net/weixin_45809580/article/details/115148129)
- [vue后台管理系统开发流程全记录(四)_侧边栏实现原理及配置 | 路由配置](https://blog.csdn.net/weixin_45809580/article/details/115984085)
- [vue后台管理系统开发流程全记录(五)_类别管理功能开发: 表单 | 表格 | 分页](https://blog.csdn.net/weixin_45809580/article/details/116535220)
- [vue后台管理系统开发流程全记录(六)_类别管理功能开发: 类别新增](https://blog.csdn.net/weixin_45809580/article/details/116609545)
- [vue后台管理系统开发流程全记录(七)_类别管理功能开发: 类别修改](https://blog.csdn.net/weixin_45809580/article/details/116613877)
- [vue后台管理系统开发流程全记录(八)_标签管理功能开发: 表单 | 表格 | 分页](https://blog.csdn.net/weixin_45809580/article/details/116709883)
- [vue后台管理系统开发流程全记录(九)_标签管理功能开发: 标签新增](https://blog.csdn.net/weixin_45809580/article/details/116747801)

## Build Setup

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 友情支持

你也可以通过 点赞 关注 评论 [我的CSDN博客](https://blog.csdn.net/weixin_45809580?spm=1001.2014.3001.5343) ，或者为本项目献上 Star 的方式来支持发布者， - 每贡献一份支持，我们将获得 2 天的快乐。


