
import OriginMurandidoPage from '../../../roots/murandido/page'
import { Router } from 'next-roots'

export default function LocalizedMurandidoPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/murandido")
  {/* @ts-ignore */}
  return <OriginMurandidoPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/murandido/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/murandido"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
