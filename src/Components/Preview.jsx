import React from 'react'
import './Preview.css'

const Preview = () => {
    return (
        <div className="mt-10 ml-10">
        <h1 className="font-medium text-lg">Preview</h1>
        <div className="mt-5">
            <div className=" preview__file   border-gray-400 flex flex-col items-center justify-center rounded-3xl shadow-lg border-2 border-dashed">
                <h1 className=" text-gray-400">Upload file to preview your</h1>
                <p className=" text-gray-400">brand new NFT</p>
            </div>
        </div>
    </div>
    )
}

export default Preview
