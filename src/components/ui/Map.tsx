// components/Map.tsx
import React from 'react';

const Map: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21609.439660232696!2d8.457619517237152!3d47.38892156469887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9fb2ea5ea9%3A0x4c70776a3e64eb37!2sDream%20Team%20Boxing!5e0!3m2!1spt-BR!2spt!4v1730742568187!5m2!1spt-BR!2spt"
                width="600"
                height="450"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default Map;