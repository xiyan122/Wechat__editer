import type { ComponentItem } from './types'

export const COMPONENTS: ComponentItem[] = [
  {
    id: 'titlebarH2',
    name: '标题条（H2）',
    desc: '适合章节开头',
    category: '标题',
    html: `<h2 class="titlebar">章节标题</h2><p></p>`,
  },
  {
    id: 'badgeH3',
    name: '小标题徽章（H3）',
    desc: '适合小节/要点',
    category: '标题',
    html: `<h3 class="badge">要点小标题</h3><p></p>`,
  },
  {
    id: 'card',
    name: '内容卡片',
    desc: '一段重点信息',
    category: '卡片',
    html: `<blockquote class="card"><p class="card__title"><strong>卡片标题</strong></p><p>在这里写卡片内容…</p></blockquote><p></p>`,
  },
  {
    id: 'guide',
    name: '引导块（步骤提示）',
    desc: '适合教程/流程',
    category: '卡片',
    html: `<blockquote class="guide"><p class="guide__kicker"><strong>操作指引</strong></p><ol><li>第一步：…</li><li>第二步：…</li><li>第三步：…</li></ol></blockquote><p></p>`,
  },
  {
    id: 'royalFrame',
    name: '紫金边框容器（海报风）',
    desc: '用于活动/公告/促销开头（更像你截图那种边框）',
    category: '卡片',
    html: `<blockquote class="frame frame--royal"><p class="frame__kicker"><strong>活动标题</strong></p><p>在这里写内容…</p><p class="caption">（上下滑动查看全部内容）</p></blockquote><p></p>`,
  },
  {
    id: 'royalFrameScroll',
    name: '紫金边框 + 内嵌滚动区',
    desc: '框内独立滚动（公众号后台可能因环境而不稳定）',
    category: '卡片',
    content: {
      type: 'blockquote',
      attrs: { class: 'frame frame--royal' },
      content: [
        {
          type: 'paragraph',
          attrs: { class: 'frame__kicker' },
          content: [{ type: 'text', marks: [{ type: 'bold' }], text: '活动公告' }],
        },
        {
          type: 'scrollBox',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '这里是“框内滚动内容”。你可以把长内容放在这里，让外层文章不那么长。',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '示例段落：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
                },
              ],
            },
            {
              type: 'paragraph',
              content: [{ type: 'text', text: '示例段落：你也可以在这里插入图片或列表。' }],
            },
            {
              type: 'bulletList',
              content: [
                {
                  type: 'listItem',
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: '要点 1：……' }] }],
                },
                {
                  type: 'listItem',
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: '要点 2：……' }] }],
                },
                {
                  type: 'listItem',
                  content: [{ type: 'paragraph', content: [{ type: 'text', text: '要点 3：……' }] }],
                },
              ],
            },
            { type: 'paragraph', content: [{ type: 'text', text: '继续补几段内容来触发滚动效果……' }] },
            { type: 'paragraph', content: [{ type: 'text', text: '继续补几段内容来触发滚动效果……' }] },
            { type: 'paragraph', content: [{ type: 'text', text: '继续补几段内容来触发滚动效果……' }] },
          ],
        },
        {
          type: 'paragraph',
          attrs: { class: 'caption' },
          content: [
            {
              type: 'text',
              text: '（框内可滚动；如公众号后台不支持，请改用普通内容或“整篇套版”）',
            },
          ],
        },
        { type: 'paragraph' },
      ],
    },
  },
  {
    id: 'quoteFocus',
    name: '强调引用（金句）',
    desc: '用于观点/金句',
    category: '引用',
    html: `<blockquote class="quote"><p>“一句话金句/观点，适合在段落之间做强调。”</p></blockquote><p></p>`,
  },
  {
    id: 'calloutInfo',
    name: '提示框（信息）',
    category: '引用',
    html: `<blockquote class="callout callout--info"><p><strong>信息</strong></p><p>这里填内容…</p></blockquote><p></p>`,
  },
  {
    id: 'dividerLine',
    name: '分隔线（虚线）',
    category: '分隔',
    html: `<hr /><p></p>`,
  },
  {
    id: 'dividerFancy',
    name: '分隔符（花纹）',
    category: '分隔',
    html: `<p class="divider divider--flower">✦ ✦ ✦</p><p></p>`,
  },
  {
    id: 'checklist',
    name: '要点清单',
    category: '清单',
    html: `<ul><li>要点一</li><li>要点二</li><li>要点三</li></ul><p></p>`,
  },
  {
    id: 'steps',
    name: '步骤清单（1-2-3）',
    category: '清单',
    html: `<ol><li>第一步：写要点</li><li>第二步：补充解释</li><li>第三步：给出结论</li></ol><p></p>`,
  },
  {
    id: 'imageCaption',
    name: '图片 + 图注',
    category: '图片',
    html: `<p><img src="https://placehold.co/900x520/png" alt="示例图片" /></p><p class="caption">图注：一句话说明图片信息</p><p></p>`,
  },
]
