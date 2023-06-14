import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function index() {
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
          <Link class="nav-link active" aria-current="page" href="/"> หน้าแรก</Link>
          </li>
          <li className="nav-item">
          <Link class="nav-link active" aria-current="page" href="about"> เกี่ยวกับเรา</Link>
          </li>
          <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle"Link href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    บริการของเรา
  </a>
  <ul className="dropdown-menu">
  <Link class="nav-link active" aria-current="page" href="serve"> บริการของเรา</Link>
    <li><a className="dropdown-item"Link href="#">Another action</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item"Link href="#">Something else here</a></li>
  </ul>
</li>

          <li className="nav-item">
          <Link class="nav-link active" aria-current="page" href="contact"> ติดต่อเรา</Link>
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
<div>
  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">บริการของเรา</h1>
        <p className="lead text-body-primary">บริการของเรานั้นมีการขายกล้องถ่ายรูปแล้วรับถ่ายรูปให้กับคนที่สนใจไม่ว่าจะเป็นรูปแบบไหนเราก็สามารถถ่ายภาพออกมาอย่างมีคุณภาพและมีทิวทัศน์ที่สวยงามได้</p>
      </div>
    </div>
  </section>
  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/14.jpg" className="bd-placeholder-img card-img-top" alt="14" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Shoot quality, beautiful landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/15.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Shoot quality, beautiful landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/17.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Shoot quality, beautiful landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/18.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Shoot quality, beautiful landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/19.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Shoot quality, beautiful landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/20.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Stop Motion</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/21.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">movement of rivers and streams in nature</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/22.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Take pictures of beautiful natural landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <Image src="/23.jpg" className="bd-placeholder-img card-img-top" alt="view3" width={200} height={225}/>
            <div className="card-body">
              <p className="card-text">Take pictures of beautiful natural landscapes.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</main>

<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"></div>
  <div className="row">
    <div className="col-lg-4">
    <Image src="/11.jpg" className="bd-placeholder-img rounded-circle" alt="11" width={140} height={140}/>
      <h2 className="fw-normal">กล้องถ่ายรูป</h2>
      <p>ความสวยงามและเลนส์กล้องที่คมชัด</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <Image src="/12.jpg" className="bd-placeholder-img rounded-circle" alt="12" width={140} height={140}/>
      <h2 className="fw-normal">กล้องถ่ายรูป</h2>
      <p>ใช้งานง่ายมีสายคล้องคอได้และสามารถพกพาได้ง่าย</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <Image src="/13.jpg" className="bd-placeholder-img rounded-circle" alt="13" width={140} height={140}/>
      <h2 className="fw-normal">ถ่ายภาพ</h2>
      <p>การถ่ายภาพนั้นสามารถถ่ายจากบุคคลใดก็ได้ทุกเพศทุกวัย</p>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}</div>

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
          <li className="ms-3"><Link className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></Link></li>
          <li className="ms-3"><Link className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></Link></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

    </>
  )
}