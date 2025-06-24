
import OriginReallimpezaPage from '../../../roots/reallimpeza/page'
import { Router } from 'next-roots'

export default function LocalizedReallimpezaPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/reallimpeza")
  {/* @ts-ignore */}
  return <OriginReallimpezaPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/reallimpeza/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/reallimpeza"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
