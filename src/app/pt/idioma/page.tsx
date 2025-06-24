
import OriginLanguagePage from '../../../roots/language/page'
import { Router } from 'next-roots'

export default function LocalizedLanguagePage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/idioma")
  {/* @ts-ignore */}
  return <OriginLanguagePage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/language/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/idioma"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
