import * as React from "react"
import { FirstSection } from "../components/Home/FirstSection";
import { PhotoReport } from "../components/Home/PhotoReport";

import Seo from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <FirstSection />
    <PhotoReport />
  </React.Fragment>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
