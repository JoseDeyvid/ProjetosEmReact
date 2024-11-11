import React from 'react'

const UploadImage = () => {
    return (
        <div className="uploadImage">
            <label>Upload image:
                <input type="file" accept='image/*' />
            </label>
        </div>
    )
}

export default UploadImage