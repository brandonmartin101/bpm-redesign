import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';

class BlogRoll extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<div className="columns is-multiline">
				{posts &&
					posts.map(({ node: post }) => (
						<div className="is-parent column is-paddingless" key={post.id}>
							<Link className="title has-text-primary is-size-4" to={post.fields.slug}>
								<article
									className="has-text-centered has-text-light full-link"
									style={{
										backgroundImage: `url(${
											!!post.frontmatter.image.childImageSharp
												? post.frontmatter.image.childImageSharp.fluid.src
												: post.frontmatter.image
										})`
									}}
								>
									<div>{post.frontmatter.title}</div>
								</article>
							</Link>
						</div>
					))}
			</div>
		);
	}
}

BlogRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogRollQuery {
				allMarkdownRemark(
					sort: { order: ASC, fields: [frontmatter___title] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								image {
									childImageSharp {
										fluid(maxWidth: 2048, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
);
