import type { BuiltInWeChatThemeDef } from '../themeRegistryTypes'

const theme = {
  // 复制本文件后：把文件名改成 <themeId>.ts，并在 themeTypes.ts 中把 themeId 加进 BuiltInWeChatThemeId。
  // 然后到 builtins/index.ts 里把新主题加入 BUILT_IN_THEMES_LIST。
  id: 'clean',
  label: '主题模板（复制后修改）',
  vars: {
    '--wechat-accent': '#0b57d0',
    '--wechat-accent-soft': 'rgba(11, 87, 208, 0.10)',
    '--wechat-accent-softer': 'rgba(11, 87, 208, 0.06)',
    '--wechat-heading': '#111',
    '--wechat-quote-border': 'rgba(0, 0, 0, 0.18)',
    '--wechat-quote-bg': 'rgba(0, 0, 0, 0.03)',
    '--wechat-pre-bg': 'rgba(0,0,0,0.06)',
  },
  extraCss: `
.wechat-article {
  /* 建议只在 .wechat-article 范围内增强 */
}
`.trim(),
} satisfies BuiltInWeChatThemeDef

export default theme
