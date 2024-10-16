import React from 'react'

const Album = ({ photos }) => {
    return (
        <div>
            {photos.map((photo) => (
                <img key={photo.id} src={photo.urls.small_s3} alt={photo.description} />
            ))}
        </div>
    )
}

export default Album