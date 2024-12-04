import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items center'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Sally <span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* desktopnav */}
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav />
                </div>

                {/* mobilenav */}
                <div className='xl:hidden'>
                    <MobileNav />
                </div>

            </div>
        </header>
    )
}

export default Header;