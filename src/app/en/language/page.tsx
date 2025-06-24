
import OriginLanguagePage from '../../../roots/language/page'
import { Router } from 'next-roots'

export default function LocalizedLanguagePage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/language")
  {/* @ts-ignore */}
  return <OriginLanguagePage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/language/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/language"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
