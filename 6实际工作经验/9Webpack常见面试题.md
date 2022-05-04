# Webpack 常见面试题

[Webpack常见面试题](https://zhuanlan.zhihu.com/p/443964387)

## loader 于 plugin 的区别

- loader 主要是将不同类型的文件解析成对应的资源，负责源文件的转换，操作的是文件。
- plugin 主要是解决Loader无法实现的事：打包优化、压缩、重新定义环境等；针对的是loader结束之后webapck打包的整个过程，并不操作文件。
