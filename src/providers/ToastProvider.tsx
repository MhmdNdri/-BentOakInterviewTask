import { BaseComponentsProps } from '@/types'
import React, { FunctionComponent } from 'react'
import { ToastContainer as Container, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProviderPropsType extends BaseComponentsProps {}

export const ToastProvider: FunctionComponent<ToastProviderPropsType> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Container
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.Fragment>
  )
}
