# GitHub Labels 建议

本仓库已提供 GitHub Actions 自动同步 labels：

- 配置文件：`.github/labels.yml`
- 工作流：`.github/workflows/labels.yml`

默认不会删除你手动创建的旧 label（`skip-delete: true`），只做新增/更新。

下面这份清单也可作为语义参考：

## 类型（type）

- `type: bug` — Bug 报告 / 缺陷
- `type: feature` — 新功能
- `type: enhancement` — 增强优化
- `type: docs` — 文档
- `type: chore` — 杂项（依赖/脚手架/CI 等）

## 作用域（scope）

- `scope: theme` — 主题（`src/wechat/themes/`）
- `scope: library` — 组件/模板/套版（`src/wechat/library/`）
- `scope: export` — 导出/内联（`src/wechat/wechatStyles.ts` / `src/wechat/inlineWeChat.ts`）
- `scope: editor` — 编辑器 UI/交互（`src/wechat/WeChatEditor.tsx`）

## 状态/流程

- `good first issue` — 适合新贡献者
- `help wanted` — 需要帮助
- `blocked` — 被阻塞
- `needs repro` — 需要复现步骤
- `needs design` — 需要设计讨论

## 兼容性（公众号粘贴相关）

- `wechat: paste` — 公众号后台粘贴相关
- `wechat: export` — 导出相关

## 建议用法

- Issue：至少打 `type:*` + `scope:*` 之一（越清晰越好）
- PR：尽量和提交分区一致（例如主题 PR 打 `scope: theme`）
