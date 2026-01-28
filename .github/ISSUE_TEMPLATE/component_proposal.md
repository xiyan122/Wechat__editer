---
name: 组件/模板/套版提案
about: 新增组件/模板/套版的提案或 PR 准备清单
title: "library: "
labels: [library]
assignees: ""
---

## 类型

- [ ] 组件（components）
- [ ] 模板（templates）
- [ ] 套版（layout presets）

## 名称与用途

- 名称：
- 使用场景：

## 建议结构

（建议复用现有 class：`lead / section / titlebar / badge / callout / card / guide / divider`）

## HTML 或结构化内容

- 计划使用：
  - [ ] `html` 字符串
  - [ ] `content`（结构化插入，适用于自定义节点，如 `scrollBox`）

## 样式影响

- 是否新增 class？
  - [ ] 否
  - [ ] 是（请列出）：

如果新增 class，请同时计划补齐：

- [ ] `src/wechat/wechatStyles.ts`（预览/导出 CSS）
- [ ] `src/wechat/inlineWeChat.ts`（内联导出映射）

## 自检清单

- [ ] 组件在右侧面板可见，可插入光标位置
- [ ] `npm run build` 通过
- [ ] 复制内联 HTML 粘贴到公众号后台不大面积丢样式
