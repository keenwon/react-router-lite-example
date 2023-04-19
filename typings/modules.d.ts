declare module '*.css'
declare module '*.svg'
declare module '*.pdf'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.ico'
declare module '*.md'
declare module '*.mdx'
declare module '*?truncate'

declare module '*.less' {
  interface Less {
    [index: string]: string
  }

  const less: Less

  export default less
}

interface Window {
  gtag: ((a: string, b: string) => void) & ((a: string, b: string, c: string) => void)
}
