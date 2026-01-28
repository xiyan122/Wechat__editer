---
name: 功能请求：一键打包下载（粘贴包/导出包）
about: 希望支持一键导出 ZIP：HTML/CSS/图片等，方便公众号发布或归档（偏产品功能）
title: "feat: export bundle"
labels: ["type: feature", "scope: export"]
assignees: ""
---

> 如果你只是想下载“当前可运行的构建包（dist.zip）”，请用另一个模板：「一键下载构建包（ZIP）」。

## 你希望一键打包导出什么？

- [ ] ZIP（完整 HTML + CSS + 资源）
- [ ] ZIP（正文 HTML + CSS + 资源）
- [ ] 两者都要

## 打包内容（可多选）

- [ ] index.html（含 `<style>` 或引用 css）
- [ ] article.html（仅正文内容）
- [ ] theme.css / article.css（主题与排版 CSS）
- [ ] inline.html（内联样式版本，便于粘贴）
- [ ] images/（将 Base64 图片提取成文件并重写引用）
- [ ] manifest.json（记录版本/主题/导出时间等元信息）

## 期望的 ZIP 文件结构（可选）

例如：

```
wechat-export.zip
├─ index.html
├─ css/
│  └─ wechat.css
└─ images/
   ├─ img-001.png
   └─ img-002.jpg
```

## 图片处理期望（关键）

- Base64 图片：是否要转存到 images/ 并替换 src？
- 外链图片 URL：是否允许保留外链（可能有跨域限制）？是否需要尝试下载？
- 文件名规则：是否需要保留 alt/原文件名？

## 验收标准（建议写清楚）

例如：

- 点击“导出粘贴包”会下载一个 zip
- zip 内包含 index.html + css + images
- 用浏览器打开 index.html 样式正确，图片能显示

## 你的使用场景/痛点

（例如：需要把文章归档到本地、交给同事二次编辑、更稳定公众号粘贴等）

## 其他补充

（截图、示例 HTML、主题名、复现步骤等）
