export type NewsSource = {
  name: string
  url: string
  est: number
  about?: string
  logo?: string
  emos: string[]
  langs?: string[]
  tags?: string[]
  socials?: Record<string, string>
}
