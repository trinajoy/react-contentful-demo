import React, { Component } from 'react'
import client from './Client'
import { Link } from 'react-router-dom'

class Blogs extends Component {
  constructor() {
    super()
    this.state = { blogpage: [] }
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: 'blog',
      })
      .then((entries) => {
        this.setState({ blogpage: entries.items })
      })
  }

  render() {
    return (
      <div>
        <section id="blog" className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2> Blogs </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="row">
                {this.state.blogpage.map((item, index) => {
                  console.log(this.state.blogpage)

                  return (
                    <div key={index} className="col-md-6 blog-content">
                      <img
                        src={item.fields.blogThumbnail.fields.file.url}
                        className="img-blog img-fluid"
                        alt=""
                      />
                      <h3>
                        <Link to={`../Blogs/${item.fields.slug}`}>
                          {item.fields.blogTitle}
                        </Link>
                      </h3>

                      <p>{item.fields.blogDescription}</p>
                      <button className="btn btn-primary">
                        <Link to={`../Blogs/${item.fields.slug}`}>
                          Read more...
                        </Link>
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Blogs
