import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
    const handleClick = () => onClick(image);

    return (
        <div className={css['image-card']} onClick={handleClick}>
            <img
                src={image.urls.small}
                alt={image.alt_description || 'Фото'}
            />
        </div>
    );
}
