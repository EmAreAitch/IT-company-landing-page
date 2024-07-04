import icon1 from '../assets/icons/values/Icon.svg';
import icon2 from '../assets/icons/values/Icon-1.svg';
import icon3 from '../assets/icons/values/Icon-2.svg';
import icon4 from '../assets/icons/values/Icon-3.svg';
import icon5 from '../assets/icons/values/Icon-4.svg';
import icon6 from '../assets/icons/values/Icon-5.svg';

export default function Values() {
  return (
    <section id="values-section" className="py-32 px-12 bg-broken-white flex gap-16 xl:gap-44 justify-between">
      <div id="title" className="flex flex-col gap-10">
        <h3 className="font-jakarta-semi-bold text-5xl max-w-[453px]">All The Core Values We Stand for</h3>
        <p className="font-jakarta-regular text-lg text-navy/60 max-w-[399px]">We are guided by these principles in everything we do to serve you the best services and get the best result at its goals.</p>
      </div>
      <div className="grid grid-cols-[repeat(3,11rem)] gap-10 xl:gap-14">
        <div className="grid gap-8">
          <img src={icon1} alt="Innovation" />
          <div className="grid gap-5">
            <p className="font-jakarta-semi-bold text-base">Innovation</p>
            <p className="font-jakarta-regular text-sm">Constantly seeking new and better ways to solve IT challenges.</p>
          </div>
        </div>
        <div className="grid gap-8">
          <img src={icon2} alt="Integrity" />
          <div className="grid gap-5">
            <p className="font-jakarta-semi-bold text-base">Integrity</p>
            <p className="font-jakarta-regular text-sm">Operating with honesty, transparency, and ethical behavior.</p>
          </div>
        </div>
        <div className="grid gap-8">
          <img src={icon3} alt="Customer-Centricity" />
          <div className="grid gap-5">
            <p className="font-jakarta-semi-bold text-base">Customer-Centricity</p>
            <p className="font-jakarta-regular text-sm">Putting clients' needs at the forefront of our operations.</p>
          </div>
        </div>
        <div className="grid gap-8">
          <img src={icon4} alt="Collaboration" />
          <div className="grid gap-5">
            <p className="font-jakarta-semi-bold text-base">Collaboration</p>
            <p className="font-jakarta-regular text-sm">Working closely with clients to achieve mutual success.</p>
          </div>
        </div>
        <div className="grid gap-8">
          <img src={icon5} alt="Quality" />
          <div className="grid gap-5">
            <p className="font-jakarta-semi-bold text-base">Quality</p>
            <p className="font-jakarta-regular text-sm">Delivering top-notch IT solutions, prices, and services.</p>
          </div>
        </div>
        <div className="grid gap-8">
          <img src={icon6} alt="Flexibility" />
          <div className="grid gap-5">
            <p className="font-jakarta-semi-bold text-base">Flexibility</p>
            <p className="font-jakarta-regular text-sm">Delivering the result with flexible times and solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
