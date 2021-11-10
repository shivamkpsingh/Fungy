import React from 'react'

const UploadCover = () => {
    return (
        <div className="mt-10">
            <h1 className="font-medium text-lg">Upload  Cover</h1>
            <div className="mt-5">
                <div className=" upload__file   border-gray-400 flex flex-col items-center rounded-3xl shadow-lg border-2 border-dashed ">
                    <h1 className="mt-16 text-gray-400">JPG,PNG,GIF,MP4 or MP3.Max 100mb</h1>
                    <div className="mt-6">
                        <label htmlFor="upload" className="upload font-bold tracking-widest text-white px-6 py-3 rounded-full shadow-lg">Choose File</label>
                        <input type="file" name="upload" id="upload" className="hidden" />
                    </div>
                </div>
                <p className="text-gray-400 mt-2 font-medium">please add cover image to your media file</p>
            </div>
        </div>
    )
}

export default UploadCover
