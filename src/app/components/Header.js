"use client"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Image src="/images/logo.png" alt="img" width={40} height={30}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link href="/home" className='nav-link'>Home</Link>
          <Link href="/about" className='nav-link'>About</Link>
          <Link href="/contact" className='nav-link'>Contact</Link>
          <Link href="/services" className='nav-link'>Services</Link>
          <Link href="/blog" className='nav-link'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
