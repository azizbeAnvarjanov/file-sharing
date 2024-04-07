import React from 'react'

const SendEmailForm = () => {
  return (
    <div className='mt-4 flex flex-col border p-3 rounded-lg'>
        <label>Send to email</label>
        <input type="text" placeholder='Enter email' className='w-full p-3 outline-none border-blue-400 border rounded-lg' />
        <button className='rounded-lg bg-primary text-white p-3 px-4 mt-2'>Send</button>
    </div>
  )
}

export default SendEmailForm