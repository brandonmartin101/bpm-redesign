import React from 'react';

import github from '../img/social/github.svg';
import facebook from '../img/social/facebook.svg';
import linkedin from '../img/social/linkedin.svg';
import portrait from '../img/social/portrait-sm.jpg';

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="content">
					<div className="container">
						<div className="columns">
							<div className="column is-8 about-contact">
								<section>
									<p class="is-size-6">
										Curious about me? I'm a web developer in Oshkosh, WI, interested in React, Vue,
										Node, and other JavaScript-based frameworks. I'm active on Github and LinkedIn,
										periodically check in on Facebook, and I avoid Twitter and Instagram. Reach out
										to me below!
									</p>
									<a
										className="typeform-share button"
										href="https://brandonmartin1.typeform.com/to/ClfHiR"
										data-mode="popup"
										data-submit-close-delay="5"
										target="_blank"
										rel="noopener noreferrer"
									>
										Contact Me
									</a>
									<div className="social">
										<a
											href="https://github.com/brandonmartin101"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="icon">
												<img src={github} alt="Github" />
											</span>
										</a>
										<a
											href="https://www.facebook.com/brandon.martin.5205622"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="icon">
												<img src={facebook} alt="Facebook" />
											</span>
										</a>
										<a
											href="https://www.linkedin.com/in/brandon-martin/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="icon">
												<img src={linkedin} alt="LinkedIn" />
											</span>
										</a>
									</div>
								</section>
							</div>
							<div className="column is-4 portrait">
								<img src={portrait} alt="Brandon Martin" />
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
