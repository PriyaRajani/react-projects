import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

export default function PostCard({$id,title,featuredimage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFileView(featuredimage)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}
