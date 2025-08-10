import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from './api';
import css from './App.module.css';

export default function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (!query) return;

        setLoading(true);
        fetchImages(query, page)
            .then(response => {
                const data = response.data;
                if (page === 1) {
                    setImages(data.results || []);
                } else {
                    setImages(prev => [...prev, ...(data.results || [])]);
                }
                setLoading(false);
            })
            .catch(() => {
                toast.error('Помилка при завантаженні зображень');
                setLoading(false);
            });
    }, [query, page]);

    const handleSearch = (newQuery) => {
        if (newQuery === query) return;
        setQuery(newQuery);
        setPage(1);
        setImages([]);
        setHasSearched(true);
    };

    const loadMore = () => {
        setPage(prev => prev + 1);
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <SearchBar onSubmit={handleSearch} />
            <ImageGallery images={images} onImageClick={openModal} hasSearched={hasSearched} loading={loading} />
            {images && images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
            {loading && <p className={css.loadingText}>Завантаження...</p>}
            <ImageModal data={selectedImage} onClose={closeModal} />
            <ToastContainer position="top-center" autoClose={3000} />
        </>
    );
}
