import type { WeChatCustomTheme, WeChatThemeId } from './wechatStyles'
import { getBuiltInThemeVars } from './themes/builtInThemes'
import type { BuiltInWeChatThemeId } from './themes/themeTypes'

type InlineParams = {
  bodyHtml: string
  theme: WeChatThemeId
  customTheme?: WeChatCustomTheme
}

function styleToString(style: Record<string, string | undefined>): string {
  return Object.entries(style)
    .filter(([, v]) => v && v.trim().length > 0)
    .map(([k, v]) => `${k}:${String(v)}`)
    .join(';')
}

function setStyle(el: HTMLElement, style: Record<string, string | undefined>) {
  const existing = el.getAttribute('style')
  const next = styleToString(style)
  if (!existing || existing.trim().length === 0) {
    el.setAttribute('style', next)
    return
  }
  // Keep existing styles, append ours.
  el.setAttribute('style', `${existing.trim().replace(/;$/, '')};${next}`)
}

function themeVars(theme: WeChatThemeId, customTheme?: WeChatCustomTheme) {
  if (theme.startsWith('custom:') && customTheme) {
    const vars = customTheme.vars
    const pick = (name: string, fallback: string) => {
      const v = vars[name] ?? vars[name.replace('--', '')] ?? vars[name.replace('--wechat-', '')]
      return (v && String(v).trim().length > 0 ? String(v).trim() : fallback)
    }

    return {
      accent: pick('--wechat-accent', '#0b57d0'),
      accentSoft: pick('--wechat-accent-soft', 'rgba(11, 87, 208, 0.10)'),
      accentSofter: pick('--wechat-accent-softer', 'rgba(11, 87, 208, 0.06)'),
      heading: pick('--wechat-heading', '#111'),
      quoteBorder: pick('--wechat-quote-border', 'rgba(0, 0, 0, 0.18)'),
      quoteBg: pick('--wechat-quote-bg', 'rgba(0, 0, 0, 0.03)'),
      preBg: pick('--wechat-pre-bg', 'rgba(0,0,0,0.06)'),
    }
  }

  // Built-in themes: pull from theme registry so updating a theme stays localized.
  const builtIn = theme as BuiltInWeChatThemeId
  const vars = getBuiltInThemeVars(builtIn)
  if (Object.keys(vars).length > 0) {
    const pick = (name: string, fallback: string) => {
      const v = vars[name]
      return (v && String(v).trim().length > 0 ? String(v).trim() : fallback)
    }

    return {
      accent: pick('--wechat-accent', '#0b57d0'),
      accentSoft: pick('--wechat-accent-soft', 'rgba(11, 87, 208, 0.10)'),
      accentSofter: pick('--wechat-accent-softer', 'rgba(11, 87, 208, 0.06)'),
      heading: pick('--wechat-heading', '#111'),
      quoteBorder: pick('--wechat-quote-border', 'rgba(0, 0, 0, 0.18)'),
      quoteBg: pick('--wechat-quote-bg', 'rgba(0, 0, 0, 0.03)'),
      preBg: pick('--wechat-pre-bg', 'rgba(0,0,0,0.06)'),
    }
  }

  return {
    accent: '#0b57d0',
    accentSoft: 'rgba(11, 87, 208, 0.10)',
    accentSofter: 'rgba(11, 87, 208, 0.06)',
    heading: '#111',
    quoteBorder: 'rgba(0, 0, 0, 0.18)',
    quoteBg: 'rgba(0, 0, 0, 0.03)',
    preBg: 'rgba(0,0,0,0.06)',
  }
}

export function buildInlinedWeChatArticleHtml(params: InlineParams): string {
  const vars = themeVars(params.theme, params.customTheme)
  const doc = new DOMParser().parseFromString(
    `<article data-theme="${params.theme}">${params.bodyHtml}</article>`,
    'text/html',
  )
  const article = doc.body.firstElementChild as HTMLElement | null
  if (!article) return params.bodyHtml

  // Root styles
  setStyle(article, {
    color: '#111',
    'background-color': '#fff',
    'font-size': '15px',
    'line-height': '1.8',
    'word-break': 'break-word',
  })

  const all = Array.from(article.querySelectorAll<HTMLElement>('*'))
  for (const el of all) {
    const tag = el.tagName.toLowerCase()

    if (el.classList.contains('frame__scroll')) {
      setStyle(el, {
        'max-height': '360px',
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        padding: '10px 10px',
        'border-radius': '12px',
        border: '1px solid rgba(0, 0, 0, 0.10)',
        'background-color': 'rgba(255, 255, 255, 0.85)',
      })

      const inRoyal = !!el.closest('.frame--royal')
      if (inRoyal) {
        setStyle(el, {
          'border-color': 'rgba(124, 58, 237, 0.22)',
          'background-color': 'rgba(124, 58, 237, 0.04)',
        })
      }
    }

    if (tag === 'p') {
      setStyle(el, { margin: '12px 0' })

      if (el.classList.contains('lead')) {
        setStyle(el, { 'font-size': '16px', color: 'rgba(0,0,0,0.62)', margin: '10px 0 14px' })
      }

      if (el.classList.contains('caption')) {
        setStyle(el, {
          margin: '6px 0 14px',
          color: 'rgba(0,0,0,0.55)',
          'font-size': '13px',
          'text-align': 'center',
        })
      }

      if (el.classList.contains('divider')) {
        setStyle(el, {
          margin: '16px 0',
          color: 'rgba(0,0,0,0.38)',
          'text-align': 'center',
          'letter-spacing': '3px',
          'font-size': '14px',
        })

        if (el.classList.contains('divider--flower')) {
          setStyle(el, { 'letter-spacing': '6px', color: 'rgba(0,0,0,0.42)' })
        }

        if (el.classList.contains('divider--wave')) {
          setStyle(el, { 'letter-spacing': '2px', 'font-size': '15px', color: 'rgba(0,0,0,0.40)' })
        }
      }

      if (el.classList.contains('card__title') || el.classList.contains('guide__kicker')) {
        setStyle(el, {
          margin: '0 0 6px',
          color: vars.heading,
        })
      }

      if (el.classList.contains('frame__kicker')) {
        setStyle(el, {
          margin: '0 0 10px',
          color: vars.heading,
          'font-size': '14px',
        })
      }
    }

    if (tag === 'h1') {
      setStyle(el, {
        margin: '18px 0 10px',
        'line-height': '1.35',
        'font-weight': '700',
        'font-size': '22px',
        color: vars.heading,
        'text-align': 'center',
        'letter-spacing': '0.5px',
        padding: '10px 10px 12px',
        'border-radius': '14px',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        'background-color': vars.accentSofter,
      })
    }

    if (tag === 'h2') {
      setStyle(el, {
        margin: '18px 0 10px',
        'line-height': '1.35',
        'font-weight': '700',
        'font-size': '18px',
        color: vars.heading,
      })

      if (el.classList.contains('section')) {
        setStyle(el, {
          padding: '10px 12px',
          'border-radius': '14px',
          'background-color': vars.accentSoft,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          'border-left': `4px solid ${vars.accent}`,
        })
      }

      if (el.classList.contains('titlebar')) {
        setStyle(el, {
          padding: '10px 12px',
          'border-radius': '14px',
          'background-color': vars.accentSoft,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          'border-left': `4px solid ${vars.accent}`,
        })
      }
    }

    if (tag === 'h3') {
      setStyle(el, {
        margin: '18px 0 10px',
        'line-height': '1.35',
        'font-weight': '700',
        'font-size': '16px',
        color: vars.heading,
        'padding-left': '10px',
        'border-left': `3px solid ${vars.accent}`,
      })

      if (el.classList.contains('badge')) {
        setStyle(el, {
          display: 'inline-block',
          padding: '6px 10px',
          'border-radius': '999px',
          'background-color': vars.accentSofter,
          border: `1px solid ${vars.accentSoft}`,
          'padding-left': '10px',
          'border-left': 'none',
        })
      }
    }

    if (tag === 'a') {
      setStyle(el, { color: vars.accent, 'text-decoration': 'none' })
    }

    if (tag === 'blockquote') {
      setStyle(el, {
        margin: '14px 0',
        padding: '10px 12px',
        'border-left': `4px solid ${vars.quoteBorder}`,
        'background-color': vars.quoteBg,
      })

      if (el.classList.contains('quote')) {
        setStyle(el, {
          'border-left': `4px solid ${vars.accent}`,
          'background-color': 'rgba(0,0,0,0.02)',
        })
      }

      if (el.classList.contains('card')) {
        setStyle(el, {
          padding: '12px',
          'border-radius': '14px',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          'background-color': vars.accentSofter,
          'border-left': 'none',
        })
      }

      if (el.classList.contains('guide')) {
        setStyle(el, {
          padding: '12px',
          'border-radius': '14px',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          'background-color': vars.accentSoft,
          'border-left': `4px solid ${vars.accent}`,
        })
      }
    }

    if (tag === 'ul' || tag === 'ol') {
      setStyle(el, { margin: '12px 0 12px 24px', padding: '0' })
    }

    if (tag === 'li') {
      setStyle(el, { margin: '6px 0' })
    }

    if (tag === 'hr') {
      setStyle(el, {
        border: 'none',
        height: '0',
        'border-top': '1px dashed rgba(0, 0, 0, 0.22)',
        margin: '16px 0',
      })
    }

    if (tag === 'img') {
      setStyle(el, {
        'max-width': '100%',
        height: 'auto',
        display: 'block',
        margin: '10px auto',
        'border-radius': '8px',
      })
    }

    if (tag === 'code') {
      // Avoid styling code inside pre separately (we style pre and clear code bg)
      const inPre = !!el.closest('pre')
      if (!inPre) {
        setStyle(el, {
          'font-family':
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          'font-size': '0.92em',
          'background-color': 'rgba(0,0,0,0.06)',
          padding: '0.1em 0.35em',
          'border-radius': '6px',
        })
      }
    }

    if (tag === 'pre') {
      setStyle(el, {
        overflow: 'auto',
        'background-color': vars.preBg,
        padding: '12px',
        'border-radius': '10px',
      })
      const codeInPre = el.querySelector<HTMLElement>('code')
      if (codeInPre) {
        setStyle(codeInPre, { 'background-color': 'transparent', padding: '0' })
      }
    }

    // Callouts (templates): blockquote.callout
    if (tag === 'blockquote' && el.classList.contains('callout')) {
      setStyle(el, {
        margin: '14px 0',
        padding: '12px',
        'border-radius': '12px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
      })

      if (el.classList.contains('callout--info')) {
        setStyle(el, {
          'background-color': 'rgba(11, 87, 208, 0.06)',
          'border-color': 'rgba(11, 87, 208, 0.22)',
        })
      }

      if (el.classList.contains('callout--warn')) {
        setStyle(el, {
          'background-color': 'rgba(245, 158, 11, 0.10)',
          'border-color': 'rgba(245, 158, 11, 0.28)',
        })
      }

      if (el.classList.contains('callout--ok')) {
        setStyle(el, {
          'background-color': 'rgba(34, 197, 94, 0.10)',
          'border-color': 'rgba(34, 197, 94, 0.28)',
        })
      }
    }

    if (tag === 'blockquote' && el.classList.contains('frame')) {
      setStyle(el, {
        margin: '14px 0',
        padding: '14px 12px',
        'border-radius': '16px',
        border: '2px solid rgba(0, 0, 0, 0.10)',
        'background-color': '#fff',
        'border-left': 'none',
      })

      if (el.classList.contains('frame--royal')) {
        setStyle(el, {
          'border-color': 'rgba(124, 58, 237, 0.55)',
          'box-shadow': '0 10px 26px rgba(124, 58, 237, 0.12)',
          'background-color': vars.accentSofter,
        })
      }
    }
  }

  // Return outerHTML of article only, suitable for WeChat backend.
  return article.outerHTML
}
