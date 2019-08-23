import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({ image, heading, subheading }) => (
	<div className="hero">
		<div className="container hero-wrap">
			<h1 className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen">{heading}</h1>
			<h2 className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen">{subheading}</h2>
		</div>
		<section className="posts">
			<BlogRoll />
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	heading: PropTypes.string,
	subheading: PropTypes.string
};

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
			}
		}
	}
`;
