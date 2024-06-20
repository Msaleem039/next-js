
"use client"
import Link from 'next/link';
import FormControl from 'react-bootstrap/FormControl';

import Form from'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const  Title= () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
   
      <Nav className="mr-auto">
        <Nav.Link href="#home">Amazome Services</Nav.Link>
        <Nav.Link href="#home">Kids Courses</Nav.Link>
        <Nav.Link href="#home">Female Courses</Nav.Link>
        <Nav.Link href="#home">Training Schedule</Nav.Link>
        <Nav.Link href="#home">Fee Structure</Nav.Link>
        <Nav.Link href="#features">Admission</Nav.Link>
      </Nav>
      
    </Navbar>
   
  </>
  )
}

export default Title