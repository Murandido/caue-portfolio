
import OriginReallimpezaPage from '../../../roots/reallimpeza/page'
import { Router } from 'next-roots'

export default function LocalizedReallimpezaPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/reallimpeza")
  {/* @ts-ignore */}
  return <OriginReallimpezaPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/reallimpeza/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/reallimpeza"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
