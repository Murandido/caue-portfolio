
import OriginCommonquestionsPage from '../../../roots/commonquestions/page'
import { Router } from 'next-roots'

export default function LocalizedCommonquestionsPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/perguntasfrequentes")
  {/* @ts-ignore */}
  return <OriginCommonquestionsPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/commonquestions/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/perguntasfrequentes"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
