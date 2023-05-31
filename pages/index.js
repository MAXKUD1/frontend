import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export default function index() {
  return(
    <>
    <Head>
      <title>Welcome to NextJs</title>
    </Head>

<div className="text-center" >
  <Image src="/icon.jpg" className="rounded" alt="icon" width={200} height={200} />
</div>
    
    <div className="text-center"><button type="button" className="btn btn-success">Success</button></div>
    </>
  )
}