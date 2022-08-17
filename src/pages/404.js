import { Link } from "gatsby"
import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <React.Fragment>
    <h1>404: Сторінки не існує</h1>
    <Link to="/">повернутись назад</Link>
  </React.Fragment>
)

export const Head = () => <Seo title="Starting Help - 404: Not Found" />

export default NotFoundPage
