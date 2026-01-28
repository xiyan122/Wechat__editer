export type BuiltInWeChatThemeId =
  | 'clean'
  | 'warm'
  | 'tech'
  | 'mint'
  | 'sunset'
  | 'grape'
  | 'ink'
  | 'royal'

export type WeChatThemeId = BuiltInWeChatThemeId | `custom:${string}`

export type WeChatCustomTheme = {
  id: string
  name: string
  vars: Record<string, string>
  extraCss?: string
}
