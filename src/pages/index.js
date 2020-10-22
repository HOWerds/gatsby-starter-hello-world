import React from "react"
import { Link } from "gatsby"
import "../components/layout"

const indexPage = () => (
  <main>
    <h1>Okta Interview Pages</h1>
    <Link to="/sponsors">sponsors</Link>
    <br></br>
    <Link to="/contact">contact</Link>
    <br></br>
    <Link to="/posts">posts</Link>
    <br></br>
  </main>
)
export default indexPage
