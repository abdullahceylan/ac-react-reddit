import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class ACRedditApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Head>
        <title>AC Reddit Client</title>
      </Head>
      <Component {...pageProps} />
    </Container>
  }
}