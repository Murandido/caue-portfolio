
import OriginMurandidoPage from '../../../roots/murandido/page'
import { Router } from 'next-roots'

export default function LocalizedMurandidoPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/murandido")
  {/* @ts-ignore */}
  return <OriginMurandidoPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/murandido/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/murandido"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
