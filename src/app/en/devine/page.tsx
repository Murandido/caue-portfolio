
import OriginDevinePage from '../../../roots/devine/page'
import { Router } from 'next-roots'

export default function LocalizedDevinePage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/devine")
  {/* @ts-ignore */}
  return <OriginDevinePage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/devine/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/devine"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
