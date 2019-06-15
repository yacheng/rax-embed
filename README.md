## rax-embed

内嵌内容容器，在 weex 下为 `<web>` 实现，在 web 下为 `<iframe>` `<embed>` 实现。

## Install

```
$ npm install rax-embed --save
```

## Import

```
import Embed from 'rax-embed';
```

## API说明

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|style|Object|''|样式|
|src| String| '' | 子页面url|

### url尾部添加 params 说明

| paramName | 值 | 描述 |
|:---------------|:----|:----------|
| `_page_inside_embed_` | 'true' or 'false' | 页面是否在embed中 |
| `_page_home_isweex_` | 'true' or 'false' | 子页面的宿主页面是否是 weex 渲染|
| `useIframeInWeb` | boolean | 是否在 web 下使用iframe|
