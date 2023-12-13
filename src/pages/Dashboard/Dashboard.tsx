import React from 'react'

interface DashboardProps {
  onLogout: () => void
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}
