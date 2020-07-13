import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <div className="text-center">
              <span className="text-info pr-3">
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
              <span className="text-info pr-3">
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </span>
              <span className="text-info">
                <a href="https://www.linkedin.com/feed">
                  <i className="fab fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
