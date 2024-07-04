export default function Projects() {
    return (
        <section id="projects-section" className="py-32 px-12 bg-white flex justify-between text-navy">
            <div className="grid place-content-between place-items-start max-w-64">
                <div className="grid gap-8">
                    <h3 className="font-jakarta-semi-bold text-5xl">See Our Successful Projects</h3>
                    <p className="font-jakarta-regular text-lg text-navy/60">Explore Our Success Stories</p>
                </div>
                <button className="rounded-full flex gap-2 border border-black py-4 px-8">
                    <p className="font-jakarta-regular text-base">See all projects</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
            <div className="flex gap-5">
                <div className="w-52 h-[27rem] bg-gradient-to-b from-zinc-400 to-zinc-200 rounded-[1.25rem] px-7 py-12 space-y-2.5 place-content-end">
                    <h4 className="font-jakarta-bold text-lg">
                        Network Optimization
                    </h4>
                    <p className="font-jakarta-regular text-base leading-[1.325rem]">
                        How we boosted efficiency for a global retailer.
                    </p>
                </div>
                <div className="w-52 h-[27rem] bg-gradient-to-b from-zinc-400 to-zinc-200 rounded-[1.25rem] px-7 pb-12 space-y-2.5 place-content-end">
                    <h4 className="font-jakarta-bold text-lg">
                        Cybersecurity Enhancement
                    </h4>
                    <p className="font-jakarta-regular text-base leading-[1.325rem]">
                        Strengthening defenses for a financial subs.
                    </p>
                </div>
                <div className="w-52 h-[27rem] bg-navy/80 rounded-[1.25rem] px-7 py-11 text-white flex flex-col items-end justify-between">
                    <div className="space-y-2">
                        <h4 className="font-jakarta-bold text-lg">
                            Cloud <br />Migration
                        </h4>
                        <p className="font-jakarta-regular text-base leading-[1.325rem]">
                            Seamless transition for a growing startup. Constantly seeking new and better ways to solve IT challenges. Operating with honesty and ethical behavior.
                        </p>
                    </div>
                    <button className="bg-zinc-400 rounded-full p-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>
                </div>
                <div className="w-52 h-[27rem] bg-gradient-to-b from-zinc-400 to-zinc-200 rounded-[1.25rem] px-7 pb-12 space-y-2.5 place-content-end">
                    <h4 className="font-jakarta-bold text-lg">
                        Data Analytics Success
                    </h4>
                    <p className="font-jakarta-regular text-base leading-[1.325rem]">
                        Turning data into actionable insights for an e-commerce.
                    </p>
                </div>
            </div>
        </section>
    )
}