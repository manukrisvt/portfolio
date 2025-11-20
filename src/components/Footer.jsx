import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-primary border-t border-white/5">
            <div className="container mx-auto px-6 text-center text-text-muted text-sm">
                <p>&copy; {new Date().getFullYear()} Manu Krishnan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
