import { useState, useEffect } from 'react';
import { fetchImages } from './api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css';

export default function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalData, setModalData] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (query) {
            setLoading(true);
            fetchImages(query, page)
                .then(res => {
                    const newImages = res.data.results;
                    setImages(prev => (page === 1 ? newImages : [...prev, ...newImages]));

                    if (newImages.length === 0 || newImages.length < 12) {
                        setHasMore(false);
                    } else {
                        setHasMore(true);
                    }
                })
                .catch(() => setError('Помилка завантаження'))
                .finally(() => setLoading(false));
        }
    }, [query, page]);

    const handleSearch = text => {
        setQuery(text);
        setPage(1);
        setImages([]);
        setError('');
        setHasMore(true);
    };

    return (
        <>
            <SearchBar onSubmit={handleSearch} />

            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                padding: '0 16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
            }}>
                {error ? (
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <ErrorMessage message={error} />
                    </div>
                ) : (
                    <ImageGallery images={images} onClick={setModalData} />
                )}

                {loading && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        <Loader />
                    </div>
                )}

                {!loading && images.length > 0 && hasMore && (
                    <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
                )}

                {!loading && images.length > 0 && !hasMore && (
                    <p style={{ textAlign: 'center', margin: '20px 0', color: '#666' }}>
                        No more images to load
                    </p>
                )}
            </div>

            <ImageModal 
                data={modalData} 
                onClose={() => setModalData(null)} 
            />
        </>
    );
}
