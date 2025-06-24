
import OriginXchangoPage from '../../../roots/xchango/page'
import { Router } from 'next-roots'

export default function LocalizedXchangoPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/xchango")
  {/* @ts-ignore */}
  return <OriginXchangoPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/xchango/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/xchango"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
