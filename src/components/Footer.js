import React from 'react'

import github from '../img/social/github.svg'
import facebook from '../img/social/facebook.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-8 about-contact">
                <section>
                  <p>Curious about me? I'm a web developer in Oshkosh, WI, interested in React, Vue, Node, and other JavaScript-based frameworks. Reach out to me below!</p>
                  <a
                    class="typeform-share button"
                    href="https://brandonmartin1.typeform.com/to/ClfHiR"
                    data-mode="popup"
                    data-submit-close-delay="5" target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Me
                  </a>
                </section>
              </div>
              <div className="column is-4 social has-text-right">
                <a title="github" href="https://github.com/brandonmartin101">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="facebook" href="https://www.facebook.com/brandon.martin.5205622">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/in/brandon-martin/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
