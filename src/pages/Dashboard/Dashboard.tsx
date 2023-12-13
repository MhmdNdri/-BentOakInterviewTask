import React, { useState } from 'react'
import { Tab, Tabs } from '@mui/material'
import { useQueryClient } from 'react-query'
import Products from './components/Products'
import Charts from './components/Charts'
interface DashboardProps {
  onLogout: () => void
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const queryClient = useQueryClient()
  const [value, setValue] = useState<any>('products')

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleLogout = () => {
    queryClient.clear()
    onLogout()
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <div>
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Charts" value="charts" />
          <Tab label="Products" value="products" />
        </Tabs>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'auto',
          maxHeight: '564px',

          flexDirection: 'row',
        }}
      >
        <div role="tabpanel" hidden={value !== 'charts'}>
          <p>
            <Charts />
          </p>
        </div>
        <div role="tabpanel" hidden={value !== 'products'}>
          <Products />
        </div>
      </div>

      <button style={{ position: 'absolute', top: '24px', left: '24px' }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
