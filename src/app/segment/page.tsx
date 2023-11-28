import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps)
  return (<>
  <h2>Cock</h2>
  </>)
}