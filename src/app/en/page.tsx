
import OriginRootPage from '../../roots/page'
import { Router } from 'next-roots'

export default function LocalizedRootPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en")
  {/* @ts-ignore */}
  return <OriginRootPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../roots/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
