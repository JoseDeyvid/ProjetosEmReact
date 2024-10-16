import React, { useState } from 'react';
import "./styles.css"

const Album = ({ photos }) => {
    return (
        <div className='gallery'>
            {photos.map((photo) => (
                <img key={photo.id} src={photo.urls.small_s3} alt={photo.description} />
            ))}
        </div>
    )
}

export default Album