import navigation_bg from '../assets/images/navigation_bg.png'
import Shape1 from '../assets/images/3DShapes.png'
import Shape2 from '../assets/images/3DShapes1.png'
export default function Hero() {
    const linearGrad = 'linear-gradient(95.7deg, rgba(23, 39, 64, 0.05) 6.43%, rgba(44, 189, 255, 0.28) 55.1%, rgba(94, 244, 178, 0.18) 85.19%)'
    return (
        <header id='hero' className="pt-10 pb-32 px-12 bg-[#d6d6d6] text-white space-y-12">
            
            <nav id='navigation' className="flex justify-between">
                <div className="font-jakarta-bold text-3xl">
                    ProTech
                </div>
                <div className="flex pl-[57px] pr-1 h-12 items-center gap-12 bg-no-repeat" style={{
                    backgroundImage: `url(${navigation_bg})`
                }}>
                    <ul className="flex gap-12">
                        <li>About</li>
                        <li>Service</li>
                        <li>Product</li>
                        <li>Discover more</li>
                    </ul>
                    <ul className="flex gap-2">
                        <li>
                            <button className="rounded-full bg-white p-3">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.312164 1.58882C0.746081 0.998236 1.29439 0.501002 1.92446 0.126719C2.06265 0.0424689 2.22167 -0.00141495 2.38352 3.47917e-05C2.54536 0.00148453 2.70357 0.0482099 2.84023 0.134922L3.45292 0.516121C3.54803 0.574067 3.6312 0.64963 3.69798 0.738754C3.76351 0.828224 3.81165 0.929218 3.83986 1.03647L4.53636 3.63446C4.57813 3.78387 4.57897 3.94176 4.53881 4.09161C4.49865 4.24146 4.41896 4.37777 4.30807 4.48627L3.77022 5.02494C3.63559 5.15582 3.54691 5.32673 3.51741 5.51216C3.48791 5.69759 3.51917 5.88758 3.60654 6.05378C4.04251 6.91319 4.69643 7.77917 5.45875 8.54121C6.22107 9.30325 7.08652 9.95784 7.94684 10.3941C8.11294 10.4814 8.30283 10.5126 8.48813 10.4831C8.67344 10.4535 8.84422 10.3648 8.97496 10.2302L9.51413 9.69134C9.62264 9.58065 9.75888 9.50112 9.90863 9.46105C10.0584 9.42098 10.2161 9.42185 10.3654 9.46357L12.9644 10.1606C13.1811 10.2172 13.3674 10.3556 13.4842 10.5467L13.8647 11.1594C13.9515 11.2964 13.9983 11.4547 13.9999 11.6168C14.0004 11.7782 13.9567 11.9367 13.8735 12.0751C13.6869 12.3896 13.469 12.6845 13.2233 12.9554C12.9773 13.2257 12.7051 13.4708 12.4107 13.6874C12.2317 13.8217 12.0203 13.9063 11.7981 13.9329C11.0859 14.0243 10.3648 14.0225 9.65306 13.9274C7.3275 13.6239 5.08318 12.3907 3.34576 10.6538C1.60973 8.91719 0.376667 6.67289 0.0722494 4.34731C-0.0223306 3.63521 -0.0240586 2.91386 0.0671088 2.20132C0.0806284 2.09076 0.108366 1.98241 0.149632 1.87896C0.191446 1.77582 0.246051 1.67834 0.312164 1.58882Z" fill="#172740" />
                                </svg>

                            </button>
                        </li>
                        <li>
                            <button className="rounded-full bg-white p-3">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.23071 0.479736C3.51168 0.479736 0.482178 3.50923 0.482178 7.22828C0.482178 10.9473 3.51168 13.9827 7.23071 13.9827C8.81923 13.9827 10.2802 13.426 11.4348 12.5017L14.2459 15.3113C14.3877 15.4473 14.5772 15.5223 14.7737 15.5203C14.9702 15.5183 15.1581 15.4394 15.2971 15.3006C15.4362 15.1617 15.5153 14.9739 15.5176 14.7774C15.5199 14.581 15.4451 14.3914 15.3093 14.2493L12.4983 11.4383C13.4234 10.2819 13.9807 8.81863 13.9807 7.22828C13.9807 3.50923 10.9498 0.479736 7.23071 0.479736ZM7.23071 1.97976C10.1391 1.97976 12.4792 4.31991 12.4792 7.22828C12.4792 10.1367 10.1391 12.4827 7.23071 12.4827C4.32234 12.4827 1.98218 10.1367 1.98218 7.22828C1.98218 4.31991 4.32234 1.97976 7.23071 1.97976Z" fill="#172740" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="content" className="flex justify-between items-end">
                <div id='title' className="flex flex-col gap-12">
                    <h1 className="font-jakarta-bold text-[80px] leading-[92px] max-w-[669px]">Innovating IT, Empowering <br />The Technology</h1>
                    <p className="font-jakarta-regular text-lg max-w-[511px]">Your Trusted and Experienced Partner for Driving Continuous Advancement and Innovation in Information Technology Solutions and Services.</p>
                    <div className="flex items-center gap-6">
                        <button className="rounded-full bg-darker-green py-4 px-10 font-jakarta-bold text-lg">Get in Touch</button>
                        <button className="flex gap-4 items-center">
                            Learn more
                            <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5.5L0 10.6962V0.303848L9 5.5Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id='frame' className="flex flex-col items-end gap-8">
                    <div id='numbers' className="rounded-[20px] border border-[rgba(255,255,255,0.25)] space-y-6 py-12 px-14" style={{
                        background: linearGrad,
                    }}>
                        <h3 className="font-jakarta-semi-bold text-5xl">300+</h3>
                        <p className="font-jakarta-semi-bold text-base w-28">Certified IT Professionals</p>
                        <p className="font-jakarta-regular text-sm w-36">A dedicated team of experts driving your success.</p>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex justify-between w-64 relative h-fit">
                            <div className="absolute bottom-0 w-[250px] h-[132px] rounded-[20px] border border-[rgba(255,255,255,0.25)]" style={{
                                background: linearGrad,
                            }}>
                            </div>
                            <div className="z-10">
                                <img src={Shape1} alt="" />
                            </div>
                            <div className="pt-11 space-y-9 w-[87px] pr-7 flex flex-col items-end z-10">
                                <p className="font-jakarta-regular text-sm">Video Projects</p>
                                <button>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.75 1C10.75 0.585786 10.4142 0.25 10 0.25L3.25 0.25C2.83579 0.25 2.5 0.585786 2.5 1C2.5 1.41421 2.83579 1.75 3.25 1.75L9.25 1.75L9.25 7.75C9.25 8.16421 9.58579 8.5 10 8.5C10.4142 8.5 10.75 8.16421 10.75 7.75L10.75 1ZM1.53033 10.5303L10.5303 1.53033L9.46967 0.46967L0.46967 9.46967L1.53033 10.5303Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between w-64 relative h-fit">
                            <div className="absolute bottom-0 w-[250px] h-[132px] rounded-[20px] border border-[rgba(255,255,255,0.25)]" style={{
                                background: linearGrad,
                            }}>
                            </div>
                            <div className="z-10">
                                <img src={Shape2} alt="" />
                            </div>
                            <div className="pt-11 space-y-9 w-[87px] pr-7 flex flex-col items-end z-10">
                                <p className="font-jakarta-regular text-sm">Video Projects</p>
                                <button>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.75 1C10.75 0.585786 10.4142 0.25 10 0.25L3.25 0.25C2.83579 0.25 2.5 0.585786 2.5 1C2.5 1.41421 2.83579 1.75 3.25 1.75L9.25 1.75L9.25 7.75C9.25 8.16421 9.58579 8.5 10 8.5C10.4142 8.5 10.75 8.16421 10.75 7.75L10.75 1ZM1.53033 10.5303L10.5303 1.53033L9.46967 0.46967L0.46967 9.46967L1.53033 10.5303Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
