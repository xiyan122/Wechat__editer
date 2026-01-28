---
name: 主题提案 / 新主题
about: 提交一个新主题想法或主题 PR 的准备清单
title: "theme: "
labels: [theme]
assignees: ""
---

## 主题名称

- label（中文名）：
- id（英文短 id，小写唯一）：

## 主题目标

（适用场景：科技/活动海报/品牌色/极简等）

## 变量（vars）

请给出至少这些变量（更多可选）：

```css
--wechat-accent:
--wechat-accent-soft:
--wechat-accent-softer:
--wechat-heading:
--wechat-quote-border:
--wechat-quote-bg:
--wechat-pre-bg:
```

## 额外样式（extraCss，可选）

（建议限制在 `.wechat-article` 范围内）

## 预览截图（可选）

（编辑区/手机预览区截图更有帮助）

## 自检清单

- [ ] 不使用外链资源（字体/图片/JS 等）
- [ ] 选择器尽量简单，避免过深嵌套
- [ ] `npm run build` 通过
- [ ] 主题在下拉中可选，预览/导出/内联复制效果一致
