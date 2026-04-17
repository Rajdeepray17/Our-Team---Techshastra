import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileNav = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
    }, [mobileOpen]);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="navbar-inner">
                    <a href="/" className="logo-area" aria-label="Home">
                        {/* Reserved for tech fest logo */}
                    </a>
                    <div className="nav-links">
                        <a href="#" className="nav-link">Home</a>
                        <a href="#" className="nav-link">Events</a>
                        <a href="#" className="nav-link active">Team</a>
                        <a href="#" className="nav-link">Sponsors</a>
                        <a href="#" className="nav-link">Contact</a>
                    </div>
                    <button className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={toggleMobileNav} aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-nav-overlay ${mobileOpen ? 'active' : ''}`}>
                <div className="mobile-nav-content">
                    <a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Home</a>
                    <a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Events</a>
                    <a href="#" className="mobile-nav-link active" onClick={toggleMobileNav}>Team</a>
                    <a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Sponsors</a>
                    <a href="#" className="mobile-nav-link" onClick={toggleMobileNav}>Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
