import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
        <section id="contact" className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2>Drop your message here</h2>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
            </div>
            <div className="contact-form">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdtIiYJk1LqfIE2GWHFrZcokpNOH8TzrwpQX5KQaJVF7ysE6g/viewform?embedded=true"
                width="100%"
                height="485"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact
