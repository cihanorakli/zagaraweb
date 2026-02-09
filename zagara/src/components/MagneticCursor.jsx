import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './MagneticCursor.css';

const MagneticCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10); // Center the 20px cursor
            cursorY.set(e.clientY - 10);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('[data-hoverable]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="cursor-dot"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: 1
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="cursor-ring"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
            />
        </>
    );
};

export default MagneticCursor;
