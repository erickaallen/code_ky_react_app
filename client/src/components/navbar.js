import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import '../App.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
 
export const AppNavbar = () => {
 return (
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/home">
      <h4 className="home-link">Code KY Meetup Examples</h4>
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
      <Nav>
          <Nav.Link href="/json">
            JSON
          </Nav.Link>
          <Nav.Link href="/promises">
            Promises
          </Nav.Link>
          <Nav.Link href="/database">
            Database
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
 )
}

export const DBNavbar = () => {
  return (
    <Navbar collapseOnSelect bg="light" variant="light" expand="md" className="sub-navbar">
      <Navbar.Brand href="https://www.mongodb.com/languages/mern-stack-tutorial">
        <img 
          alt="MongoDB Logo"
          width={'20%'}
          src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
          />
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav>
            <Nav.Link href="/record">
              List
            </Nav.Link>
            <Nav.Link href="/create">
              Create
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
 }
