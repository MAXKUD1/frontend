import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function contact() {
  return(
    <>
    <Head>
      <title>Welcome to NextJs</title>
    </Head>
    <header data-bs-theme="dark">
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      <a className="navbar-brand" href="#">Camera</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
          <Link href="/"> หน้าแรก</Link>
          </li>
          <li className="nav-item">
          <Link href="about"> เกี่ยวกับเรา</Link>
          </li>
          <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle"Link href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    บริการของเรา
  </a>
  <ul className="dropdown-menu">
  <Link href="serve"> บริการของเรา</Link>
    <li><a className="dropdown-item"Link href="#">Another action</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item"Link href="#">Something else here</a></li>
  </ul>
</li>

          <li className="nav-item">
          <Link href="contact"> ติดต่อเรา</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>


<main>
<div class="container my-5">
    <div class="bg-body-prinmary p-5 rounded">
    <Image src="/me.jpg" className="bd-placeholder-img rounded-circle" alt="image" width={180} height={180}/>
      <div class="col-sm-8 py-5 mx-auto">
        <h1 class="display-5 fw-normal">สามารถติดต่อเราตามช่องทางดังนี้</h1>
        <p class="fs-5">FB: Max Chan</p>
        <p class="fs-5">Line: 083-5804997</p>
        <p class="fs-5">contact: 082-4071948</p>
    </div>
    </div>
  </div>
    </main>




  <div>
  <div className="b-example" />
  <div className="container">
    <footer className="py-5">
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link href="#" className="" >Home</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Features</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Pricing</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >FAQs</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >About</Link></li>
          </ul>
        </div>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="" >Home</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Features</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Pricing</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >FAQs</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >About</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="#" className="" >Home</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Features</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >Pricing</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >FAQs</Link></li>
            <li className="nav-item mb-2"><Link href="#" className="" >About</Link></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis"Link href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis"Link href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis"Link href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

    </>
  )
}