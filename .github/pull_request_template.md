## 变更类型

- [ ] 主题（`src/wechat/themes/`）
- [ ] 组件/模板/套版（`src/wechat/library/`）
- [ ] 样式/导出（`src/wechat/wechatStyles.ts` / `src/wechat/inlineWeChat.ts`）
- [ ] 编辑器核心（`src/wechat/WeChatEditor.tsx`）
- [ ] 文档

## 变更说明

（简要描述你做了什么、为什么这么做）

## 截图/预览（可选）

（可贴编辑区/预览区截图，或说明如何复现）

## 自检清单

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] 新主题/组件在 UI 可见且可用
- [ ] 导出 CSS / 复制内联 HTML 表现合理

## 发布检查清单（仅维护者 / 需要发布时）

- [ ] 已更新 `CHANGELOG.md`（把 `Unreleased` 整理到本次版本段落）
- [ ] 已更新 `package.json` 的 `version`（遵循 SemVer）
- [ ] 将要打的 tag 为 `vMAJOR.MINOR.PATCH`（例：`v0.2.0`）
- [ ] 已确认本次变更类型：
	- [ ] `PATCH`：修复/小优化
	- [ ] `MINOR`：新增主题/组件/模板/套版等向后兼容能力
	- [ ] `MAJOR`：破坏性变更
