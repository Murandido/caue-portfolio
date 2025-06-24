
import OriginBudgetPage from '../../../roots/budget/page'
import { Router } from 'next-roots'

export default function LocalizedBudgetPage(props:any) {
  Router.setLocale("en")
  Router.setPageHref("/en/budget")
  {/* @ts-ignore */}
  return <OriginBudgetPage {...props} locale={"en"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/budget/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/en/budget"
  return generateMetadataOrigin({ ...props, locale: "en", getPageHref })
}
