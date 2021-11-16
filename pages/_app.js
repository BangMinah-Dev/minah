import AppLayout from '../src/component/layout/layout'
import 'antd/dist/antd.css'
import '../styles/globals.css'


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
