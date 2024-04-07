import { AlertCircle } from 'lucide-react'
import React from 'react'

const AlertMsg = ({msg}) => {
  return (
    <div className='p-4 bg-red-500 mt-5 text-white rounded-md gap-5 flex items-center'>
        <AlertCircle/>
        <p>{msg}</p>
    </div>
  )
}

export default AlertMsg