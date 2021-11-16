import AppLayout from '../src/component/layout/layout'
import '../styles/globals.css'
import 'antd/dist/antd.css'


function MinahApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout {...pageProps}>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )

}

export default MinahApp
