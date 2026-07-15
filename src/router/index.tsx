import { Dashboard } from '../pages/Dashboard'
import { Trade } from '../pages/Trade'
import { Portfolio } from '../pages/Portfolio'
import { Points } from '../pages/Points'

export const routes = {
  '/': Dashboard,
  '/trade': Trade,
  '/portfolio': Portfolio,
  '/points': Points,
}

export type RoutePath = keyof typeof routes
