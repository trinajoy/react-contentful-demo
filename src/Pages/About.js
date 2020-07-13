import React, { Component } from 'react'
import client from './Client'
import BlackLoader from '../images/black-loader.gif'
import marked from 'marked'

class About extends Component {
  constructor() {
    super()
    this.state = { aboutpage: [] }
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: 'about',
      })
      .then((entries) => {
        this.setState({ aboutpage: entries.items[0] }) // 200
      })
  }

  getParsedMarkdown(aboutDescription) {
    return {
      __html: marked(aboutDescription, { sanitize: true }),
    }
  }

  render() {
    return (
      <div>
        <section id="about" className="pt-4">
          <div className="container">
            <div className="text-center">
              {this.state.aboutpage.length === 0 ? (
                <div align="center" className="pt-5">
                  <img src={BlackLoader} alt="Loader" />
                </div>
              ) : (
                <div
                  // to get markdown content from contentful
                  dangerouslySetInnerHTML={this.getParsedMarkdown(
                    this.state.aboutpage.fields.aboutDescription
                  )}
                ></div>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default About
