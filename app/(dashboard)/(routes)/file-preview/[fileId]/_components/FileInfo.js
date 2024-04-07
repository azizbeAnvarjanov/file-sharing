import Image from 'next/image'
import React from 'react'

const FileInfo = ({file}) => {
  return (
    <div className='shadow-md h-[50vh] rounded-md overflow-hidden relative'>
      <Image src={file?.fileUrl} className='w-full h-full' alt='file' layout='fill' objectFit='cover' />
      <div className='absolute top-0 left-0 w-full h-full'>
        <p className='text-white absolute bottom-[13%] left-[5%]'>{file?.fileName}</p>
        <p className='text-white absolute bottom-[6%] left-[5%]'>{file?.fileType}</p>
      </div>
    </div>
  )
}

export default FileInfo