
import OriginRootPage from '../../roots/page'
import { Router } from 'next-roots'

export default function LocalizedRootPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt")
  {/* @ts-ignore */}
  return <OriginRootPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../roots/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
