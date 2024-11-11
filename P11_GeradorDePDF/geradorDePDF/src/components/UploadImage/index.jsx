import React from 'react'

const UploadImage = ({imageToPdf, setImageToPdf}) => {
    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageToPdf(reader.result);
        }
    }
    return (
        <div className="uploadImage">
            <label>Upload image:
                <input type="file"  accept="image/png, image/jpeg" onChange={handleImageUpload} />
            </label>
        </div>
    )
}

export default UploadImage