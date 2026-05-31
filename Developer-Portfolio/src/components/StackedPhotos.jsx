import { useState, useEffect } from 'react';
import Sean from '../assets/Sean.jpg';
import Sean4 from '../assets/Sean4.png';
import Sean3 from '../assets/Sean3.png';
import Sean5 from '../assets/Sean5.png';

const images = [Sean, Sean4, Sean3, Sean5];

// Transform per stack depth (0 = furthest back, 3 = front)
const depthTransforms = [
    'rotate(-9deg) translate(-24px, 22px)',
    'rotate(6deg) translate(22px, 16px)',
    'rotate(-3deg) translate(-10px, 8px)',
    'rotate(0deg) translate(0, 0)',
];

// Initial fan transforms — wide spread like holding playing cards
const fanTransforms = [
    'rotate(-45deg) translate(-180px, 40px)',
    'rotate(-15deg) translate(-70px, 10px)',
    'rotate(15deg) translate(70px, 10px)',
    'rotate(45deg) translate(180px, 40px)',
];

// Stagger delays for converging into the stack (front card first)
const staggerDelays = [60, 100, 120, 160];

const StackedPhotos = () => {
    const [order, setOrder] = useState([0, 1, 2, 3]);
    const [phase, setPhase] = useState('fan');

    useEffect(() => {
        // Double-rAF paints the fan state first, then wait 1s before sliding to stacked
        let timer;
        const id = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                timer = setTimeout(() => setPhase('stacked'), 100);
            });
        });
        return () => {
            cancelAnimationFrame(id);
            clearTimeout(timer);
        };
    }, []);

    const bringToFront = (imgIdx) => {
        setOrder(prev => [...prev.filter(i => i !== imgIdx), imgIdx]);
    };

    const isStacked = phase === 'stacked';

    return (
        <div
            className="relative w-80 h-[28rem]"
            style={{
                transform: isStacked ? 'translateX(0)' : 'translateX(30vw)',
                transition: 'transform 800ms ease-in-out',
            }}
        >
            {order.map((imgIdx, depth) => {
                const isTop = depth === order.length - 1;
                return (
                    <div
                        key={imgIdx}
                        onClick={() => !isTop && bringToFront(imgIdx)}
                        className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg ${
                            isStacked ? 'hover:-translate-y-3 hover:scale-105' : ''
                        } ${isTop ? 'cursor-default' : 'cursor-pointer'}`}
                        style={{
                            zIndex: depth + 1,
                            transform: isStacked ? depthTransforms[depth] : fanTransforms[depth],
                            transformOrigin: '50% 100%',
                            transition: `transform 800ms ease-in-out ${staggerDelays[depth]}ms`,
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
