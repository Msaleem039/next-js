import Image from 'next/image'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
  <main className="form-signin  m-auto">
  <form>
    <Image className="mb-4 mx-2" src="/next.svg"  alt="img" width={72} height={57} />
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" defaultValue="remember-me" id="flexCheckDefault" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form>
</main>

    </div>
  )
}
export default Contact
