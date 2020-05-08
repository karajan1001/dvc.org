import React from 'react'
import { graphql } from 'gatsby'
import { Node } from 'unist'

import SEO from '../components/SEO'

import Documentation from '../components/Documentation'

interface IDocHomePageProps {
  data: {
    page: {
      htmlAst: Node
    }
  }
  pageContext: {
    slug: string
    headings: []
  }
}

const DocHomePage: React.FC<IDocHomePageProps> = ({
  data,
  pageContext: { slug, headings }
}) => {
  const {
    page: { htmlAst }
  } = data

  return (
    <>
      <SEO title="Home" />
      <Documentation htmlAst={htmlAst} path={slug} headings={headings} />
    </>
  )
}

export default DocHomePage

export const pageQuery = graphql`
  query DocHomePage($id: String!) {
    page: docsPage(id: { eq: $id }) {
      htmlAst
    }
  }
`
