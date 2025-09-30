// Type rfc and click ENTER to get rfc code snippet. rfc means react function component. Similarly, rafc means react arrow function component.

import React from 'react'
import PropTypes from 'prop-types'

// props are javascript objects that are passed from a parent component to a child component. Here, parent component is in App.js
export default function Header(props) {
  return (
    /* In react you will write className and not just class. */
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">ToDos List</a> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>     
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            
            {props.searchBar? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: "No Search Bar"
            }
            {/* This is a ternary operator. If searchBar = true, then it'll display the contents else it'll display No Search Bar message in the above code snippet. */}
          </div>
        </div>
      </nav>
  )
}
/*Default props*/
/*  The below code snippet of Default props is not working, don't know why*/
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired 
}
