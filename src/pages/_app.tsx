import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment, ReactNode } from 'react'
import ModalRoot from 'components/modals/ModalRoot'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout =
    (
      Component as typeof Component & {
        layoutProps: {
          Layout: (props: { children: ReactNode } & unknown) => JSX.Element
        }
      }
    ).layoutProps?.Layout || Fragment

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ModalRoot />
    </>
  )
}
export default MyApp
