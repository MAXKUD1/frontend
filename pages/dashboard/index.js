import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch('frontend-eight-gray-66.vercel.app/api/users/');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}

export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter()

  const handleDelete = async (id) => {
    //console.log("ID :", id);
    fetch('frontend-eight-gray-66.vercel.app/api/users/' + id,{
    method: 'DELETE',
    })
    return router.reload('/dashboard')
  }
  
  if (session) {
    return (
      <>
      
    <header data-bs-theme="dark">
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand"><img src="/Angel of Death.png" width="80" height="60"></img>Angel of Death</a>
        <form className="d-flex" role="search">
        <div align="right"> Signed in as {session.user.firstname}  {session.user.lastname} <button type="button" className="btn btn-danger" onClick={() => signOut()}>ออกจากระบบ</button> </div> 
          
        </form>
    </div>
  </nav>
</header>
<br>
</br>
    <div className="col-md-auto">
      <div className="container">
        <div className="row">
           <div className="col">
        Signed in as {session.user.username} <br />
        {session.user.firstname}  {session.user.lastname} <br />
          </div>
        </div>
      </div>
        <br></br>
        <br></br><div align="right" ><button type="button" className="btn btn-success text-end"><Link href="./dashboard/user/add">เพิ่มสมาชิก</Link></button> </div><br></br>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr className="bg-warning">
                    <th>ID</th>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>status</th>
                    <th>Edit/Delete</th> {/* เพิ่มคอลัมน์ Action */}
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post) => (
                    <tr key={post.id}>
                      <td className="text-center">{post.id}</td>
                      <td className= "text-center">{post.studentid}</td>
                      <td className= "text-center">{post.firstname}</td>
                      <td className= "text-center">{post.lastname}</td>
                      <td>{post.username}</td>
                      <td>{post.password}</td>
                      <td>{post.status}</td>
                      <td>
                      <Link href={`/dashboard/user/edit/${post.id}`} class="btn btn-warning" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></Link> {/* ปุ่ม Edit */}
                        <button type="button" class="btn btn-danger" onClick={() => handleDelete(post.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                       <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                       </svg></button> {/* ปุ่ม Delete */}
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