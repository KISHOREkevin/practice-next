'use client'

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"

const Navbar = () => {
    const handleLogoClick = () => {
        posthog.capture('logo_clicked', {
            nav_location: 'header',
        });
    };

    const handleNavLinkClick = (linkName: string) => {
        posthog.capture('navbar_link_clicked', {
            link_name: linkName,
            nav_location: 'header',
        });
    };

    return (
        <header>
            <nav>
                <Link href={"/"} className="logo" onClick={handleLogoClick}>
                    <Image src={"/icons/logo.png"} alt="logo" width={24} height={24} />
                    <p>DevEvent</p>
                </Link>

                <ul>
                    <Link href={"/"} onClick={() => handleNavLinkClick('Home')}>Home</Link>
                    <Link href={"/"} onClick={() => handleNavLinkClick('Events')}>Events</Link>
                    <Link href={"/"} onClick={() => handleNavLinkClick('Create Event')}>Create Event</Link>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar