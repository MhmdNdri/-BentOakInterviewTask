import { ROUTES } from '../constants'
import { Dashboard, Login } from '../pages'

export const ROUTING = {
  Dashboard: {
    path: ROUTES.DASHBOARD,
    component: Dashboard,
    hasFooter: false,
    hasHeader: true,
  },
  Login: {
    path: ROUTES.LOGIN,
    component: Login,
    hasFooter: false,
    hasHeader: false,
  },
}
