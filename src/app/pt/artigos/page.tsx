
import OriginArticlesPage from '../../../roots/articles/page'
import { Router } from 'next-roots'

export default function LocalizedArticlesPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/artigos")
  {/* @ts-ignore */}
  return <OriginArticlesPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/articles/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/artigos"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
