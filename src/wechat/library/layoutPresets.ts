import type { LayoutPreset } from './types'

export const LAYOUT_PRESETS: LayoutPreset[] = [
  {
    id: 'layoutStory',
    name: '长文结构（故事/观点）',
    desc: '导语 → 章节 → 金句 → 卡片总结',
    html: `
<h1>在这里写标题</h1>
<p class="lead">用 1-2 句话写导语：概括全文重点，吸引读者继续往下看。</p>

<h2 class="section">第一部分：背景/问题</h2>
<p>用一段话交代背景…</p>

<blockquote class="quote"><p>“插入一句金句/观点，作为节奏切换。”</p></blockquote>

<h2 class="section">第二部分：核心观点</h2>
<h3 class="badge">要点 1</h3>
<p>解释要点 1…</p>
<h3 class="badge">要点 2</h3>
<p>解释要点 2…</p>

<p class="divider divider--flower">✦ ✦ ✦</p>

<blockquote class="card">
  <p class="card__title"><strong>一句话总结</strong></p>
  <p>把本文最重要的结论写在这里。</p>
</blockquote>

<blockquote class="callout callout--info">
  <p><strong>结尾提示</strong></p>
  <p>可以加一句引导关注/转发/评论的话。</p>
</blockquote>
`.trim(),
  },
  {
    id: 'layoutHowTo',
    name: '教程结构（How-to）',
    desc: '标题 → 目标 → 步骤 → 注意事项',
    html: `
<h1>教程标题：如何……</h1>
<p class="lead">本教程将带你完成：……（一句话说明收益）。</p>

<h2 class="titlebar">你将获得什么</h2>
<ul>
  <li>能力/结果 1</li>
  <li>能力/结果 2</li>
  <li>能力/结果 3</li>
</ul>

<h2 class="titlebar">步骤</h2>
<blockquote class="guide">
  <p class="guide__kicker"><strong>跟着做</strong></p>
  <ol>
    <li>第一步：……</li>
    <li>第二步：……</li>
    <li>第三步：……</li>
  </ol>
</blockquote>

<h2 class="titlebar">常见问题</h2>
<h3 class="badge">Q：问题写这里？</h3>
<p>A：回答写这里…</p>

<blockquote class="callout callout--warn">
  <p><strong>注意</strong></p>
  <p>写一个容易踩坑的点。</p>
</blockquote>
`.trim(),
  },
  {
    id: 'layoutList',
    name: '清单结构（要点合集）',
    desc: '分段标题条 + 多个要点',
    html: `
<h1>清单标题：X 个要点</h1>
<p class="lead">一段导语：说明这份清单适合谁，以及读完能解决什么问题。</p>

<h2 class="titlebar">要点清单</h2>
<h3 class="badge">要点 1</h3>
<p>解释要点 1…</p>
<h3 class="badge">要点 2</h3>
<p>解释要点 2…</p>
<h3 class="badge">要点 3</h3>
<p>解释要点 3…</p>

<p class="divider divider--wave">≈≈≈≈≈</p>

<blockquote class="card">
  <p class="card__title"><strong>收藏提示</strong></p>
  <p>加一句“建议收藏”或“下次用得上”的引导。</p>
</blockquote>
`.trim(),
  },
  {
    id: 'layoutNews',
    name: '快讯结构（新闻/通报）',
    desc: '导语 → 要点 → 背景 → 影响 → 结论',
    html: `
<h1>快讯标题：一句话说明发生了什么</h1>
<p class="lead">用 1-2 句话写导语：时间/地点/人物/事件 + 最关键结论。</p>

<h2 class="titlebar">三句话看懂</h2>
<ul>
  <li>要点 1：……</li>
  <li>要点 2：……</li>
  <li>要点 3：……</li>
</ul>

<h2 class="section">背景</h2>
<p>补充背景信息与上下文…</p>

<h2 class="section">影响</h2>
<p>分析对读者/行业/个人的影响…</p>

<blockquote class="card">
  <p class="card__title"><strong>一句话结论</strong></p>
  <p>把最重要的观点收束在这里。</p>
</blockquote>
`.trim(),
  },
  {
    id: 'layoutProduct',
    name: '产品介绍（上新/功能发布）',
    desc: '痛点 → 方案 → 亮点 → 场景 → FAQ',
    html: `
<h1>产品/功能标题：解决什么问题</h1>
<p class="lead">一句话说明：谁用、解决什么、带来什么收益。</p>

<h2 class="section">你是否也遇到这些问题？</h2>
<ul>
  <li>痛点 1：……</li>
  <li>痛点 2：……</li>
  <li>痛点 3：……</li>
</ul>

<h2 class="titlebar">我们提供的解决方案</h2>
<blockquote class="guide">
  <p class="guide__kicker"><strong>快速上手</strong></p>
  <ol>
    <li>打开……</li>
    <li>选择……</li>
    <li>一键完成……</li>
  </ol>
</blockquote>

<h2 class="titlebar">亮点功能</h2>
<h3 class="badge">亮点 1</h3>
<p>解释亮点 1…</p>
<h3 class="badge">亮点 2</h3>
<p>解释亮点 2…</p>

<h2 class="titlebar">FAQ</h2>
<h3 class="badge">Q：适合哪些人？</h3>
<p>A：……</p>

<blockquote class="callout callout--info">
  <p><strong>提示</strong></p>
  <p>可以补一句行动号召：立即试用/关注/私信。</p>
</blockquote>
`.trim(),
  },
  {
    id: 'layoutReview',
    name: '测评结构（对比/评测）',
    desc: '结论先行 → 维度对比 → 推荐人群',
    html: `
<h1>测评标题：A vs B，怎么选？</h1>
<p class="lead">结论先行：一句话告诉读者你更推荐谁，以及理由。</p>

<blockquote class="quote"><p>“如果你只看一句：推荐 XX，原因是……”</p></blockquote>

<h2 class="titlebar">对比维度</h2>
<h3 class="badge">维度 1：体验</h3>
<p>对比 A/B…</p>
<h3 class="badge">维度 2：成本</h3>
<p>对比 A/B…</p>
<h3 class="badge">维度 3：适用场景</h3>
<p>对比 A/B…</p>

<h2 class="titlebar">我更推荐谁？</h2>
<blockquote class="card">
  <p class="card__title"><strong>推荐人群</strong></p>
  <ul>
    <li>适合 A：……</li>
    <li>适合 B：……</li>
  </ul>
</blockquote>
`.trim(),
  },
  {
    id: 'layoutInterview',
    name: '访谈结构（人物/对话）',
    desc: '开场 → 3 轮问答 → 结尾金句',
    html: `
<h1>访谈标题：和 TA 聊了聊……</h1>
<p class="lead">一句话说明这次访谈最值得看的亮点。</p>

<h2 class="section">开场</h2>
<p>用一段话介绍嘉宾/背景…</p>

<h2 class="titlebar">问答</h2>
<h3 class="badge">Q：第一个问题？</h3>
<p>A：回答……</p>
<h3 class="badge">Q：第二个问题？</h3>
<p>A：回答……</p>
<h3 class="badge">Q：第三个问题？</h3>
<p>A：回答……</p>

<blockquote class="quote"><p>“最后留一句金句，强化记忆点。”</p></blockquote>
`.trim(),
  },
  {
    id: 'layoutWeekly',
    name: '周报结构（复盘/进度）',
    desc: '本周完成 → 数据 → 问题 → 下周计划',
    html: `
<h1>周报：2026-01-XX</h1>
<p class="lead">一句话总结本周最重要的进展。</p>

<h2 class="titlebar">本周完成</h2>
<ul>
  <li>事项 1：……</li>
  <li>事项 2：……</li>
  <li>事项 3：……</li>
</ul>

<h2 class="titlebar">数据与结果</h2>
<blockquote class="card">
  <p class="card__title"><strong>关键指标</strong></p>
  <ul>
    <li>指标 1：……</li>
    <li>指标 2：……</li>
  </ul>
</blockquote>

<h2 class="titlebar">问题与风险</h2>
<blockquote class="callout callout--warn">
  <p><strong>注意</strong></p>
  <p>写一个最需要关注的风险点。</p>
</blockquote>

<h2 class="titlebar">下周计划</h2>
<ol>
  <li>计划 1：……</li>
  <li>计划 2：……</li>
  <li>计划 3：……</li>
</ol>
`.trim(),
  },
  {
    id: 'layoutKnowledge',
    name: '科普结构（知识点）',
    desc: '定义 → 原理 → 例子 → 常见误区',
    html: `
<h1>科普标题：X 是什么？</h1>
<p class="lead">一句话说明读完你能明白什么。</p>

<h2 class="titlebar">定义</h2>
<blockquote class="card">
  <p class="card__title"><strong>一句话定义</strong></p>
  <p>把概念说清楚：……</p>
</blockquote>

<h2 class="section">原理</h2>
<p>解释原理…</p>

<h2 class="section">例子</h2>
<p>举例帮助理解…</p>

<h2 class="titlebar">常见误区</h2>
<ul>
  <li>误区 1：……</li>
  <li>误区 2：……</li>
</ul>
`.trim(),
  },
]
