import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, onImageClick, hasSearched, loading }) {
    if (hasSearched && images && images.length === 0 && !loading) {
        return <p className={css.noImages}>Зображення не знайдено.</p>;
    }

    return (
        <ul className={css.gallery}>
            {images && images.map(image => (
                <li key={image.id} className={css['gallery-item']}>
                    <ImageCard image={image} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
}
