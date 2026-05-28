import { useState } from 'react';
import Sean from '../assets/Sean.jpg';
import Sean2 from '../assets/Sean2.jpg';
import Sean3 from '../assets/Sean3.png';
import Sean5 from '../assets/Sean5.png';

const images = [Sean, Sean2, Sean3, Sean5];

// Transform per stack depth (0 = furthest back, 3 = front)
const depthTransforms = [
    'rotate(-9deg) translate(-24px, 22px)',
    'rotate(6deg) translate(22px, 16px)',
    'rotate(-3deg) translate(-10px, 8px)',
    'rotate(0deg) translate(0, 0)',
];

const StackedPhotos = () => {
    const [order, setOrder] = useState([0, 1, 2, 3]);

    const bringToFront = (imgIdx) => {
        setOrder(prev => [...prev.filter(i => i !== imgIdx), imgIdx]);
    };

    return (
        <div className="relative w-80 h-[28rem]">
            {order.map((imgIdx, depth) => {
                const isTop = depth === order.length - 1;
                return (
                    <div
                        key={imgIdx}
                        onClick={() => !isTop && bringToFront(imgIdx)}
                        className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 ${
                            isTop ? 'cursor-default' : 'cursor-pointer'
                        }`}
                        style={{
                            zIndex: depth + 1,
                            transform: depthTransforms[depth],
                        }}
                    >
                        <img
                            src={images[imgIdx]}
                            alt={`Sean photo ${imgIdx + 1}`}
                            className="w-full h-full object-cover object-top scale-150"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default StackedPhotos;
