import React from 'react';
import { Link } from 'gatsby';
import github from '../img/social/github.svg';
import facebook from '../img/social/facebook.svg';
import linkedin from '../img/social/linkedin.svg';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ''
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({ navBarActiveClass: 'is-active' })
					: this.setState({ navBarActiveClass: '' });
			}
		);
	};

	render() {
		return (
			<nav className="navbar is-white" role="navigation" aria-label="main-navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item" title="Logo">
							<h1>Brandon Martin</h1>
						</Link>
						<a
							className="navbar-item"
							href="https://github.com/brandonmartin101"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon">
								<img src={github} alt="Github" />
							</span>
						</a>
						<a
							className="navbar-item"
							href="https://www.facebook.com/brandon.martin.5205622"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon">
								<img src={facebook} alt="Facebook" />
							</span>
						</a>
						<a
							className="navbar-item"
							href="https://www.linkedin.com/in/brandon-martin/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="icon">
								<img src={linkedin} alt="LinkedIn" />
							</span>
						</a>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
