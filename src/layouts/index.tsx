import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout

// TODO: Remove staticquery above and pass down props from SEO component from each page type

// import * as React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

// import 'modern-normalize'
// import '../styles/normalize'

// import Header from '../components/Header'
// import LayoutRoot from '../components/LayoutRoot'
// import LayoutMain from '../components/LayoutMain'
// import SEO from '../components/SEO'

// const IndexLayout: React.FC = ({ children }) => {
//   const { site } = useStaticQuery(query)

//   const { defaultTitle } = site.siteMetadata
//   return (
//     <LayoutRoot>
//       {/* <SEO /> */}
//       <Header title={defaultTitle} />
//       <LayoutMain>{children}</LayoutMain>
//     </LayoutRoot>
//   )
// }

// export default IndexLayout

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//       }
//     }
//   }
// `
