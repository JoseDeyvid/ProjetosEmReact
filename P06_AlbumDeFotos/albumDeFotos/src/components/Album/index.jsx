import React from 'react';
import "./styles.css"

const Album = ({ photos, setPhotoInFocus }) => {
    return (
        <div className='gallery'>
            {photos.map((photo) => (
                <img key={photo.id} src={photo.urls.small_s3} alt={photo.description} onClick={() => {
                    setPhotoInFocus(photo)}} />
            ))}
        </div>
    )
}

export default Album