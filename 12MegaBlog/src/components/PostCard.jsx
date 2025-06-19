import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-transparent rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img
            src={
              appwriteService.getFilePreview(featuredImage).replace("preview", "view") + "&mode=admin"
            }
            alt={title}
            className="rounded-xl"
          />

            </div>
            <h2
            className='text-xl font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-gray-800 border border-gray-800 rounded-lg'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard