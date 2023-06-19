import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialIcon() {
    return (
        <div className="flex justify-center mt-8">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4 text-white">
                <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4 text-white">
                <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={24} />
            </a>
        </div>
    );
}
