import { getFormStats } from '@/actions/formStats'
import Analytics from '@/components/Analytics' 
import React from 'react'

const page = async () => {
  const stats = await getFormStats();
  
  return (
    <div className="w-full">
      <Analytics data={stats} />
    </div>
  )
}

export default page