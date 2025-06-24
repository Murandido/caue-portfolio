
import OriginAboutPage from '../../../roots/about/page'
import { Router } from 'next-roots'

export default function LocalizedAboutPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/about")
  {/* @ts-ignore */}
  return <OriginAboutPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/about/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/about"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
