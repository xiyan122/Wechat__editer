import { Node } from '@tiptap/core'

// A WeChat-friendly embedded scroll container.
// We cannot rely on raw <div> HTML insertion because ProseMirror will sanitize
// unknown nodes. This node renders as <div class="frame__scroll" data-scroll-box="1">…</div>
// and allows block content inside.
export const ScrollBox = Node.create({
  name: 'scrollBox',

  group: 'block',

  content: 'block+',

  defining: true,

  parseHTML() {
    return [
      { tag: 'div.frame__scroll' },
      { tag: 'div[data-scroll-box]' },
    ]
  },

  renderHTML() {
    return ['div', { class: 'frame__scroll', 'data-scroll-box': '1' }, 0]
  },
})
