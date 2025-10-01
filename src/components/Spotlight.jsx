import { useState,useEffect } from "react";



function Spotlight() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        };

        // Tambahkan event listener saat komponen dipasang
        window.addEventListener('mousemove', handleMouseMove);

        // Hapus event listener saat komponen dilepas untuk mencegah memory leak
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 171, 110, 0.2),rgba(255, 79, 52, 0.07), transparent 60%)`,
        
        }}
        />
    );

}
export default Spotlight