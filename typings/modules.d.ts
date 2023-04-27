declare module '*.css'

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
