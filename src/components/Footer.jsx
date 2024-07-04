const Footer = () => {
    return (
        <footer id='footer' className='py-24 px-12 bg-[#c4c4c4] text-white flex justify-between'>

            <div id='subscription' className='space-y-14 w-[26rem]'>

                <div id="title" className='space-y-10'>
                    <h3 className="font-jakarta-semi-bold text-5xl">Stay Informed with Our Updates and Newsletter</h3>
                    <p className='font-jakarta-regular text-lg'>Subscribe to receive the latest IT updates and articles to make you stay informed with us</p>
                </div>

                <form action="">
                    <div id="email" className='inline-flex content-center justify-between border-b border-white pb-4 w-3/4'>
                        <input type="email" placeholder='Your Email Address' className='bg-transparent placeholder:text-white outline-none w-full' />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </form>

            </div>

            <div id="footer-menu" className='flex flex-col justify-between items-end'>

                <div id="menu" className='flex gap-16'>

                    <div id="menu1" className='font-jakarta-semi-bold text-base space-y-6'>
                        <p>About ProTech</p>
                        <ul className='font-jakarta-regular text-sm space-y-4'>
                            <li>About us</li>
                            <li>Our Services</li>
                            <li>Our Values</li>
                            <li>Our Projects</li>
                        </ul>
                    </div>

                    <div id="menu2" className='font-jakarta-semi-bold text-base space-y-6'>
                        <p>Explore ProTech</p>
                        <ul className='font-jakarta-regular text-sm space-y-4'>
                            <li>Case Studies</li>
                            <li>Testimonials</li>
                            <li>Career</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div id="menu3" className='font-jakarta-semi-bold text-base space-y-6'>
                        <p>Resources</p>
                        <ul className='font-jakarta-regular text-sm space-y-4'>
                            <li>Blog & News</li>
                            <li>Partnership</li>
                            <li>Join Us</li>
                            <li>Location</li>
                        </ul>
                    </div>

                    <div id="menu4" className='font-jakarta-semi-bold text-base space-y-6'>
                        <p>Connect with ProTech</p>
                        <ul className='font-jakarta-regular text-sm space-y-4'>
                            <li>Facebook</li>
                            <li>Linkedin</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>

                </div>

                <p className='font-jakarta-regular text-base text-white/90'>Copyright © 2023 ProTech: All Rights Reserved</p>

            </div>

        </footer>
    );
};

export default Footer;