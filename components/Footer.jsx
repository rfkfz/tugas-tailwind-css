import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const footerRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            footerRef.current.classList.remove('slide-up');
        } else {
            footerRef.current.classList.add('slide-up');
        }
    }, [inView]);

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div
                className="container mx-auto flex justify-center items-center slide-up"
                ref={footerRef}
            >
                <p className="text-sm">
                    &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
