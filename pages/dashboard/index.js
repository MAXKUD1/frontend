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
        <button onClick={() => signOut()}>Sign out</button>
          </div>
        </div>
<br>
</br>
        <button type="button" className="btn btn-success text-end">Add</button>
<br>
</br>
<br>
</br>

            <div className="row">
              <div className="col">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Password</th>
                      <th>edit/delete</th>
                    </tr>
                  </thead>
                   <tbody>
                    {posts.users.map((post) => (
                      <tr key={post.id}>
                        <td>{post.studentid}</td>
                        <td>{post.firstname}</td>
                        <td>{post.lastname}</td>
                        <td>{post.password}</td>
                        <td>
                        <button type="button" class="btn btn-warning">edit</button>
                        <button type="button" class="btn btn-danger">delete</button>
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