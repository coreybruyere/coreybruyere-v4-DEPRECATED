// import * as React from 'react'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

// import 'modern-normalize'
// import '../styles/normalize'

// import Header from '../components/Header'
// import LayoutRoot from '../components/LayoutRoot'
// import LayoutMain from '../components/LayoutMain'

// interface StaticQueryProps {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//       keywords: string
//     }
//   }
// }

// const IndexLayout: React.FC = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query IndexLayoutQuery {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//       }
//     `}
//     render={(data: StaticQueryProps) => (
//       <LayoutRoot>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: data.site.siteMetadata.description },
//             { name: 'keywords', content: data.site.siteMetadata.keywords }
//           ]}
//         />
//         <Header title={data.site.siteMetadata.title} />
//         <LayoutMain>{children}</LayoutMain>
//       </LayoutRoot>
//     )}
//   />
// )

// export default IndexLayout

// TODO: Remove staticquery above and pass down props from SEO component from each page type

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import Main from '../components/Main'
import SEO, { SEOProps } from '../components/SEO'

interface IndexLayoutProps extends SEOProps {}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, title, description, image, article }) => {
  const { site } = useStaticQuery(query)

  const { defaultTitle, navLinks } = site.siteMetadata
  console.log(navLinks)
  return (
    <LayoutRoot>
      <SEO title={title} description={description} image={image} article={article} />
      <Header title={defaultTitle} navItems={navLinks} sx={{ color: 'red' }} />
      <Main>{children}</Main>
    </LayoutRoot>
  )
}

export default IndexLayout

const query = graphql`
  query Title {
    site {
      siteMetadata {
        defaultTitle: title
        navLinks {
          name
          link
        }
      }
    }
  }
`
