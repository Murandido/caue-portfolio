
import OriginBudgetPage from '../../../roots/budget/page'
import { Router } from 'next-roots'

export default function LocalizedBudgetPage(props:any) {
  Router.setLocale("pt")
  Router.setPageHref("/pt/orcamento")
  {/* @ts-ignore */}
  return <OriginBudgetPage {...props} locale={"pt"} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../roots/budget/page'

export async function generateMetadata(props:any) {
  const getPageHref = () => "/pt/orcamento"
  return generateMetadataOrigin({ ...props, locale: "pt", getPageHref })
}
