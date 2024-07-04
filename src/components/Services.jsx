import service_bg from '../assets/images/service_bg.png'
import icon1 from '../assets/icons/services/icons.svg'
import icon2 from '../assets/icons/services/icons-1.svg'
import icon3 from '../assets/icons/services/icons-2.svg'
import icon4 from '../assets/icons/services/icons-3.svg'
import icon5 from '../assets/icons/services/icons-4.svg'

export default function Services() {
    return (
        <section id='services-section' className="bg-center py-[120px] flex flex-col gap-[90px] text-navy" style={{
            backgroundImage: `url(${service_bg})`
        }}>
            <section id='title' className="flex flex-col justify-center gap-8">
                <h2 className="font-jakarta-bold text-center text-[50px]">Comprehensive IT Services</h2>
                <p className="font-jakarta-regular text-center text-lg text-navy/60">ProTech offers a wide range of IT solutions to meet your business needs.</p>
            </section>

            <section id='services' className="">
                <div className="grid grid-cols-[repeat(4,14rem)] gap-y-10 gap-x-8 place-content-center place-items-center">

                    <div className="size-56 grid place-content-center place-items-center gap-6">
                        <img src={icon1} alt="" />
                        <p className="font-jakarta-semi-bold text-base w-28 text-center">Managed IT Services</p>
                    </div>

                    <div className="w-[28rem] h-56 col-span-2 bg-gray-600 rounded-2xl" />                    

                    <div className="size-56  grid place-content-center place-items-center gap-6">
                        <img src={icon2} alt="" />
                        <p className="font-jakarta-semi-bold text-base w-28 text-center">Software Development</p>
                    </div>

                    <div className="size-56  grid place-content-center place-items-center gap-6">
                        <img src={icon3} alt="" />
                        <p className="font-jakarta-semi-bold text-base w-28 text-center">Cybersecurity Solutions</p>
                    </div>

                    <div className="size-56 grid place-content-center place-items-center gap-6">
                        <img src={icon4} alt="" />
                        <p className="font-jakarta-semi-bold text-base w-28 text-center">Cloud Integration</p>
                    </div>

                    <div className="size-56  grid place-content-center place-items-center gap-6">
                        <img src={icon5} alt="" />
                        <p className="font-jakarta-semi-bold text-base w-28 text-center">Data Analytics & Resources</p>
                    </div>

                    <div className="size-56  grid place-content-center place-items-center gap-6">
                        <p className="font-jakarta-semi-bold text-base w-44 text-center">Custom software Development</p>
                        <p className="font-jakarta-regular text-sm w-44 text-center">Ensure smooth<br /> operations with proactive IT management.</p>
                    </div>

                </div>
            </section>
        </section>
    )
}