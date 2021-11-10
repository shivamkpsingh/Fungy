import React from 'react'
import './UploadFile.css'

const UploadFile = () => {
    return (
        <div className="mt-10">
            <h1 className="font-medium text-lg">Upload File</h1>
            <div className="mt-5">
                <div className=" upload__file   border-gray-400 flex flex-col items-center rounded-3xl shadow-lg border-2 border-dashed ">
                    <h1 className="mt-10 text-gray-400">JPG,PNG,GIF,MP4 or MP3.Max 100mb</h1>
                    <p className="mt-3 text-gray-400">(620*620 recommended)</p>
                    <div className="mt-6">
                        <label htmlFor="upload" className="upload font-bold tracking-widest text-white px-6 py-3 rounded-full shadow-lg">Choose File</label>
                        <input type="file" name="upload" id="upload" className="hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadFile
