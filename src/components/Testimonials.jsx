export default function Testimonials() {
    return (
        <section id='testimonials-section' className="px-40 py-32 bg-broken-white text-navy space-y-16">
            <p className="font-jakarta-regular text-lg text-navy/60">Discover how ProTech has made an impact.</p>
            <h3 className='font-jakarta-semi-bold text-5xl leading-[1.25]'>"ProTech's unwavering dedication to our IT security transformed our operations. Their comprehensive solutions not only met but exceeded our expectations. Highly recommended."</h3>
            <div className="flex justify-between">
                <div className="flex gap-6 items-center">
                    <div className="bg-gray-500 rounded-full size-24" />
                    <div>
                        <h4 className="font-jakarta-bold text-lg">Alexandro Pierre</h4>
                        <p className="font-jakarta-regular text-base text-navy/60">CEO, Acme Inc.</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <button className="rounded-full p-2.5 bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <button className="rounded-full p-2.5 bg-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}