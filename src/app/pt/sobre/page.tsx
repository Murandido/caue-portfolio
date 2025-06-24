
import OriginAboutPage from '../../../roots/about/page'
import { Router } from 'next-roots'

export default function LocalizedAboutPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/sobre")
  {/* @ts-ignore */}
  return <OriginAboutPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/about/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/sobre"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
