---
name: "功能请求：一键打包下载（粘贴包/导出包）"
description: "希望支持一键导出 ZIP：HTML/CSS/图片等，方便公众号发布或归档"
title: "feat: 一键打包下载（导出粘贴包）"
labels:
  - "type: feature"
  - "scope: export"
body:
  - type: markdown
    attributes:
      value: |
        感谢你的建议！请尽量把期望的“打包内容/文件结构/兼容目标”写清楚，方便实现与验收。

  - type: dropdown
    id: bundle-type
    attributes:
      label: 你希望一键打包导出什么？
      options:
        - ZIP（完整 HTML + CSS + 资源）
        - ZIP（正文 HTML + CSS + 资源）
        - 两者都要
    validations:
      required: true

  - type: checkboxes
    id: include-assets
    attributes:
      label: 打包内容（可多选）
      options:
        - label: index.html（含 <style> 或引用 css）
        - label: article.html（仅正文内容）
        - label: theme.css / article.css（主题与排版 CSS）
        - label: inline.html（内联样式版本，便于粘贴）
        - label: images/（将 Base64 图片提取成文件并重写引用）
        - label: manifest.json（记录版本/主题/导出时间等元信息）

  - type: textarea
    id: expected-structure
    attributes:
      label: 期望的 ZIP 文件结构（可选）
      description: "例如：/index.html /css/style.css /images/xxx.png"
      placeholder: |
        wechat-export.zip
        ├─ index.html
        ├─ css/
        │  └─ wechat.css
        └─ images/
           ├─ img-001.png
           └─ img-002.jpg

  - type: textarea
    id: images
    attributes:
      label: 图片处理期望（关键）
      description: |
        说明你希望如何处理图片：
        - 本地上传 Base64：是否要转文件并写入 images/？
        - 外链图片 URL：是否允许保留外链（可能有跨域限制）？
        - 文件名规则：是否需要保留 alt/原文件名？
      placeholder: |
        - Base64 图片：转存到 images/ 并替换 src
        - 外链图片：先保留外链，不尝试下载
        - 文件名：优先用 alt，其次 img-001

  - type: textarea
    id: acceptance
    attributes:
      label: 验收标准（建议写清楚）
      placeholder: |
        - 点击“导出粘贴包”会下载一个 zip
        - zip 内包含 index.html + css + images
        - 用浏览器打开 index.html 样式正确，图片能显示

  - type: textarea
    id: context
    attributes:
      label: 你的使用场景/痛点
      placeholder: |
        例如：
        - 需要把文章归档到本地
        - 需要交给同事二次编辑
        - 需要更稳定的公众号粘贴

  - type: textarea
    id: additional
    attributes:
      label: 其他补充
      placeholder: |
        任何你认为重要的信息：截图、示例 HTML、主题名、复现步骤等
---
