import 'focus-visible'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import store, { persistor } from "@/store/"
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head"



export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Yoga Delight - Online Yoga Classes for Ladies</title>
          <meta name='description' content='Online Yoga for Ladies. Experience peace of mind, fitness, and happiness. Join today and avail three free sessions' />
          <meta name="keywords" content="Online yoga classes, yoga classes in vadodara, free online yoga classes, yoga classes for ladies" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/3.svg" />
          <link rel="icon" type="image/png" sizes="32x32" href="/3.svg" />
          <link rel="icon" type="image/png" sizes="16x16" href="/3.svg" />
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
