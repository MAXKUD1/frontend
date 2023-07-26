import { useSession, signIn, signOut } from "next-auth/react"

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

export default function Component({ posts }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <div className="container">
        <div className="row">
          <div className="col">
        Signed in as {session.user.email} <br />
        {session.user.fname}  {session.user.lname} <br />
        <button className="btn btn-danger" onClick={() => signOut()}>Sign out</button>
          </div>
        </div>
<br>
</br>
        <button type="button" className="btn btn-success text-end">Add Data</button>
        <br></br><br></br>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr className="bg-warning">
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Password</th>
                    <th>status</th>
                    <th>Action</th> {/* เพิ่มคอลัมน์ Action */}
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post) => (
                    <tr key={post.id}>
                      <td>{post.studentid}</td>
                      <td>{post.firstname}</td>
                      <td>{post.lastname}</td>
                      <td>{post.password}</td>
                      <td>{post.status}</td>
                      <td>
                        <button type="button" class="btn btn-warning">Edit</button> {/* ปุ่ม Edit */}
                        <button type="button" class="btn btn-danger">Delete</button> {/* ปุ่ม Delete */}
                        </td>
                      </tr> 
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
    )
  }
  
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}