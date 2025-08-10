import React, {useEffect} from 'react';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
ReactModal.setAppElement('#root');

export default function ImageModal({data, onClose}) {
    useEffect(() => {
        if (data) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [data]);

    return (
        <ReactModal
            isOpen={!!data}
            onRequestClose={onClose}
            className={css.content}
            overlayClassName={css.overlay}
            contentLabel="Image Modal"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
            {data && (
                <div className={css.container}>
                    <button
                        onClick={onClose}
                        className={css.closeButton}
                        aria-label="Закрити"
                    >
                        ×
                    </button>

                    <img
                        src={data.urls.regular}
                        alt={data.alt_description}
                        className={css.image}
                    />
                    <div className={css.info}>
                        <p>
                            <strong>Автор:</strong> {data.user.name}
                        </p>
                        <p>
                            <strong>Лайки:</strong> {data.likes}
                        </p>
                        {data.description && (
                            <p>
                                <strong>Опис:</strong> {data.description}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </ReactModal>
    );
}
