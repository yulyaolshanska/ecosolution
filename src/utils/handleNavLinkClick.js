// useHandleNavLinkClick.js
import { useNavigate } from 'react-router-dom';

const useHandleNavLinkClick = () => {
    const navigate = useNavigate();

    const handleNavLinkClick = (e, to) => {
        e.preventDefault();
        const targetElement = document.querySelector(to);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });

            navigate(to);
        }
    };

    return handleNavLinkClick;
};

export default useHandleNavLinkClick;
