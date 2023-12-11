import { useGetUserPermissions } from '@/api/Profile/ProfileApi'
import { WhoHasAccessListType } from '@/configs/routing'
import { ROUTES } from '@/constants'
import { useUserAuth } from '@/providers/ApiProvider'

import { CalculationOfAuthorization } from '@/utils/Auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const useAuthentication = (
  hasAccess: WhoHasAccessListType,
  needLogin: boolean,
  userPermission: string[],
) => {
  const navigator = useNavigate()

  useEffect(() => {
    const useIsLogin = !!localStorage.getItem('token')
    if (!needLogin || useIsLogin) return
    navigator(ROUTES.LOGIN)
  }, [])

  return hasAccess === 'ALL' || CalculationOfAuthorization(hasAccess, userPermission)
}
