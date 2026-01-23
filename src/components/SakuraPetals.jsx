import React, { useState } from 'react';
import './SakuraPetals.css';

const SakuraPetals = () => {
    const [petals] = useState(() => {
        const petalCount = 15;
        return Array.from({ length: petalCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 10 + 10 + 's', // 10-20s duration
            animationDelay: Math.random() * 5 + 's',
            width: Math.random() * 10 + 10 + 'px', // 10-20px size
            height: Math.random() * 10 + 10 + 'px',
        }));
    });

    return (
        <div className="sakura-container">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="sakura-petal"
                    style={{
                        left: petal.left,
                        animationDuration: petal.animationDuration,
                        animationDelay: petal.animationDelay,
                        width: petal.width,
                        height: petal.height,
                    }}
                />
            ))}
        </div>
    );
};

export default SakuraPetals;
