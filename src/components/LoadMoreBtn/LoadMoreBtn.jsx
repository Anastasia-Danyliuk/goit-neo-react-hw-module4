export default function LoadMoreBtn({ onClick }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <button 
                onClick={onClick}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
            >
                Load More
            </button>
        </div>
    );
}
