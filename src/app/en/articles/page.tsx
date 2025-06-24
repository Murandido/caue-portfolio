
import OriginArticlesPage from '../../../roots/articles/page'
import { Router } from 'next-roots'

export default function LocalizedArticlesPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/articles")
  {/* @ts-ignore */}
  return <OriginArticlesPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/articles/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/articles"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
