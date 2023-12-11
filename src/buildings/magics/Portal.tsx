import React, { FunctionComponent, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalPropsType extends PropsWithChildren {
  parentId?: string
}

export const Portal: FunctionComponent<PortalPropsType> = ({ children, parentId }) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.getElementById(parentId || 'portal')!) : null
}
