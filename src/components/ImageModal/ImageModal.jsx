import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1200
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        position: 'relative'
    }
};

export default function ImageModal({ data, onClose }) {

    return (
        <ReactModal 
            isOpen={!!data} 
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Image Modal"
        >
            {data && (
                <div style={{ textAlign: 'center', position: 'relative' }}>
                    <button 
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            color: '#333',
                            zIndex: 10
                        }}
                    >
                        ×
                    </button>


                    <img 
                        src={data.urls.regular} 
                        alt={data.alt_description} 
                        style={{
                            maxWidth: '100%',
                            maxHeight: '70vh',
                            objectFit: 'contain',
                            marginBottom: '15px',
                            borderRadius: '4px'
                        }}
                    />
                    <div style={{ textAlign: 'left', padding: '0 20px' }}>
                        <p style={{ fontSize: '16px', margin: '8px 0' }}>
                            <strong>Автор:</strong> {data.user.name}
                        </p>
                        <p style={{ fontSize: '16px', margin: '8px 0' }}>
                            <strong>Лайки:</strong> {data.likes}
                        </p>
                        {data.description && (
                            <p style={{ fontSize: '16px', margin: '8px 0' }}>
                                <strong>Опис:</strong> {data.description}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </ReactModal>
    );
}
