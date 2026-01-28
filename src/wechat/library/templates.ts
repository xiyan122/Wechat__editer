import type { TemplateItem } from './types'

export const TEMPLATES: TemplateItem[] = [
  {
    id: 'dividerTitle',
    name: '章节标题（左侧色条）',
    html: `<h2 class="section">章节标题</h2><p>在这里输入内容…</p>`,
  },
  {
    id: 'lead',
    name: '导语段落',
    html: `<p class="lead">用 1-2 句话写导语，概括全文重点。</p><p></p>`,
  },
  {
    id: 'dividerDots',
    name: '分隔符（点点）',
    html: `<p class="divider">···</p><p></p>`,
  },
  {
    id: 'dividerFlower',
    name: '花纹分隔线（✦）',
    html: `<p class="divider divider--flower">✦ ✦ ✦</p><p></p>`,
  },
  {
    id: 'dividerWave',
    name: '花纹分隔线（≈）',
    html: `<p class="divider divider--wave">≈≈≈≈≈</p><p></p>`,
  },
  {
    id: 'quote',
    name: '金句引用（强调）',
    html: `<blockquote class="quote"><p>“一句话金句/观点，适合在段落之间做强调。”</p></blockquote><p></p>`,
  },
  {
    id: 'qa',
    name: '问答（Q/A）',
    html: `<h3>Q：问题写这里？</h3><p>A：回答写这里…</p><p></p>`,
  },
  {
    id: 'calloutInfo',
    name: '信息提示框',
    html: `<blockquote class="callout callout--info"><p><strong>信息</strong></p><p>这里填内容…</p></blockquote><p></p>`,
  },
  {
    id: 'calloutWarn',
    name: '注意提示框',
    html: `<blockquote class="callout callout--warn"><p><strong>注意</strong></p><p>这里填内容…</p></blockquote><p></p>`,
  },
  {
    id: 'calloutOk',
    name: '成功提示框',
    html: `<blockquote class="callout callout--ok"><p><strong>完成</strong></p><p>这里填内容…</p></blockquote><p></p>`,
  },
  {
    id: 'steps',
    name: '步骤清单（1-2-3）',
    html: `<ol><li>第一步：写要点</li><li>第二步：补充解释</li><li>第三步：给出结论</li></ol><p></p>`,
  },
  {
    id: 'checklist',
    name: '清单（要点）',
    html: `<ul><li>要点一</li><li>要点二</li><li>要点三</li></ul><p></p>`,
  },
  {
    id: 'imageWithCaption',
    name: '图片 + 图注',
    html: `<p><img src="https://placehold.co/900x520/png" alt="示例图片" /></p><p class="caption">图注：一句话说明图片信息</p><p></p>`,
  },
]
