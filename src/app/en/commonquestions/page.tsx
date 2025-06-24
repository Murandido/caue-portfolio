
import OriginCommonquestionsPage from '../../../roots/commonquestions/page'
import { Router } from 'next-roots'

export default function LocalizedCommonquestionsPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/commonquestions")
  {/* @ts-ignore */}
  return <OriginCommonquestionsPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/commonquestions/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/commonquestions"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
