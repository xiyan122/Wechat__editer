import type { BuiltInWeChatThemeId, WeChatCssVarName } from './themeTypes'

export type BuiltInWeChatThemeDef = {
  id: BuiltInWeChatThemeId
  label: string
  vars?: Record<WeChatCssVarName, string>
  extraCss?: string
}

export const BUILT_IN_THEMES: BuiltInWeChatThemeDef[] = [
  {
    id: 'clean',
    label: '清爽',
  },
  {
    id: 'warm',
    label: '暖色',
    vars: {
      '--wechat-accent': '#b42318',
      '--wechat-accent-soft': 'rgba(180, 35, 24, 0.10)',
      '--wechat-accent-softer': 'rgba(180, 35, 24, 0.06)',
      '--wechat-heading': '#7a271a',
      '--wechat-quote-border': 'rgba(180, 35, 24, 0.35)',
      '--wechat-quote-bg': 'rgba(180, 35, 24, 0.06)',
    },
  },
  {
    id: 'tech',
    label: '科技',
    vars: {
      '--wechat-accent': '#0f766e',
      '--wechat-accent-soft': 'rgba(15, 118, 110, 0.10)',
      '--wechat-accent-softer': 'rgba(15, 118, 110, 0.06)',
      '--wechat-heading': '#0f172a',
      '--wechat-pre-bg': 'rgba(2, 6, 23, 0.06)',
    },
  },
  {
    id: 'mint',
    label: '薄荷',
    vars: {
      '--wechat-accent': '#16a34a',
      '--wechat-accent-soft': 'rgba(22, 163, 74, 0.10)',
      '--wechat-accent-softer': 'rgba(22, 163, 74, 0.06)',
      '--wechat-heading': '#0f172a',
      '--wechat-quote-border': 'rgba(22, 163, 74, 0.28)',
      '--wechat-quote-bg': 'rgba(22, 163, 74, 0.06)',
    },
  },
  {
    id: 'sunset',
    label: '日落',
    vars: {
      '--wechat-accent': '#ea580c',
      '--wechat-accent-soft': 'rgba(234, 88, 12, 0.10)',
      '--wechat-accent-softer': 'rgba(234, 88, 12, 0.06)',
      '--wechat-heading': '#7c2d12',
      '--wechat-quote-border': 'rgba(234, 88, 12, 0.32)',
      '--wechat-quote-bg': 'rgba(234, 88, 12, 0.06)',
    },
  },
  {
    id: 'grape',
    label: '葡萄',
    vars: {
      '--wechat-accent': '#7c3aed',
      '--wechat-accent-soft': 'rgba(124, 58, 237, 0.10)',
      '--wechat-accent-softer': 'rgba(124, 58, 237, 0.06)',
      '--wechat-heading': '#2e1065',
      '--wechat-quote-border': 'rgba(124, 58, 237, 0.30)',
      '--wechat-quote-bg': 'rgba(124, 58, 237, 0.06)',
    },
  },
  {
    id: 'ink',
    label: '墨黑',
    vars: {
      '--wechat-accent': '#111827',
      '--wechat-accent-soft': 'rgba(17, 24, 39, 0.08)',
      '--wechat-accent-softer': 'rgba(17, 24, 39, 0.05)',
      '--wechat-heading': '#111827',
      '--wechat-quote-border': 'rgba(17, 24, 39, 0.24)',
      '--wechat-quote-bg': 'rgba(17, 24, 39, 0.04)',
      '--wechat-pre-bg': 'rgba(17, 24, 39, 0.06)',
    },
  },
  {
    id: 'royal',
    label: '紫金边框',
    vars: {
      '--wechat-accent': '#7c3aed',
      '--wechat-accent-soft': 'rgba(124, 58, 237, 0.12)',
      '--wechat-accent-softer': 'rgba(124, 58, 237, 0.07)',
      '--wechat-heading': '#3b1a6f',
      '--wechat-quote-border': 'rgba(124, 58, 237, 0.30)',
      '--wechat-quote-bg': 'rgba(124, 58, 237, 0.06)',
      '--wechat-pre-bg': 'rgba(124, 58, 237, 0.06)',
    },
    extraCss: `
/* subtle paper-like frame */
.wechat-article {
  border: 2px solid rgba(124, 58, 237, 0.55);
  border-radius: 16px;
  padding: 14px 14px 6px;
  background: linear-gradient(180deg, rgba(124, 58, 237, 0.08), rgba(255, 255, 255, 0.0) 26%),
    #fff;
}

.wechat-article h1 {
  border: 1px solid rgba(124, 58, 237, 0.22);
  background: linear-gradient(90deg, rgba(124, 58, 237, 0.12), rgba(255, 255, 255, 0.0));
}

.wechat-article h2.titlebar {
  border-left-color: rgba(124, 58, 237, 0.95);
}

.wechat-article h3.badge {
  border-color: rgba(124, 58, 237, 0.20);
}

.wechat-article blockquote.card,
.wechat-article blockquote.guide {
  border-color: rgba(124, 58, 237, 0.22);
}

.wechat-article p.divider {
  color: rgba(124, 58, 237, 0.55);
}
`.trim(),
  },
]

export function getBuiltInThemeCss(id: BuiltInWeChatThemeId): string {
  const found = BUILT_IN_THEMES.find((t) => t.id === id)
  if (!found || id === 'clean') return `\n/* clean theme: base only */\n`.trim()

  const vars = Object.entries(found.vars ?? {})
    .filter(([k, v]) => k.startsWith('--wechat-') && String(v).trim().length > 0)
    .map(([k, v]) => `  ${k}: ${String(v).trim()};`)
    .join('\n')

  const extraCss = (found.extraCss ?? '').trim()
  return `
.wechat-article {
${vars}
}
${extraCss ? `\n\n${extraCss}` : ''}
`.trim()
}

export function getBuiltInThemeVars(id: BuiltInWeChatThemeId): Record<string, string> {
  const found = BUILT_IN_THEMES.find((t) => t.id === id)
  return { ...(found?.vars ?? {}) }
}
