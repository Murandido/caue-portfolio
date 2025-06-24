
import OriginDevinePage from '../../../roots/devine/page'
import { Router } from 'next-roots'

export default function LocalizedDevinePage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/devine")
  {/* @ts-ignore */}
  return <OriginDevinePage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/devine/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/devine"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
