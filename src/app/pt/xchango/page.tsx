
import OriginXchangoPage from '../../../roots/xchango/page'
import { Router } from 'next-roots'

export default function LocalizedXchangoPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/xchango")
  {/* @ts-ignore */}
  return <OriginXchangoPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/xchango/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/xchango"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
