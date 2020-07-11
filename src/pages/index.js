import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
      <Header headerText="Jamie's Gatsby" />
      <h1>Hello! I'm Jamie.</h1>
      <img
        src="https://source.unsplash.com/random/400x400"
        alt="random from unsplash"
      />
    </div>
  )
}
