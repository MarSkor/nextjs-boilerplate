import React from 'react'
import Head from 'next/head'

const PerPageTitle = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />
    </Head>
  )
}

export default PerPageTitle
