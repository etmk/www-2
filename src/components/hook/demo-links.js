import { useStaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

export const useDemoLinks = () => {
  const { allDemoLinksJson } = useStaticQuery(
    graphql`
      query DemoLinksData {
        allDemoLinksJson {
          edges {
            node {
              ...DemoLinkFragment
            }
          }
        }
      }
    `
  )

  return map(allDemoLinksJson.edges, 'node')
}
