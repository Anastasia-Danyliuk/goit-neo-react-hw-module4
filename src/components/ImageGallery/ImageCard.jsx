export default function ImageCard({ image, onClick }) {
    const handleClick = (e) => {
        onClick(e);

        const currentLi = document.getElementById(`image-${image.id}`);
        const allLiElements = Array.from(document.querySelectorAll('ul li[id^="image-"]'));
        const currentIndex = allLiElements.indexOf(currentLi);
        const nextIndex = (currentIndex + 1) % allLiElements.length;
        const nextLi = allLiElements[nextIndex];

        if (nextLi) {
            nextLi.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div 
            onClick={handleClick}
            style={{
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                height: '100%'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <img 
                src={image.urls.small} 
                alt={image.alt_description} 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
}
