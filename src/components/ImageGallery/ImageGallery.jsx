import ImageCard from './ImageCard';

export default function ImageGallery({ images, onClick }) {
    if (images.length === 0) return null;

    return (
        <ul style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '16px', 
            listStyle: 'none', 
            padding: 0,
            margin: '20px 0'
        }}>
            {images.map(img => (
                <li key={img.id} id={`image-${img.id}`}>
                    <ImageCard image={img} onClick={() => onClick(img)} />
                </li>
            ))}
        </ul>
    );
}
