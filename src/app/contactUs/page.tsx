import HeroBanner from "@/components/views/ContactUs/HeroBanner/HeroBanner";
import FormMessage from "@/components/views/ContactUs/FormMessage/FormMessage";
import GetInTouch from "@/components/views/ContactUs/GetInTouch/GetInTouch";
import Location from "@/components/views/ContactUs/Location/Location";
import Faq from "@/components/views/ContactUs/Faq/Faq";

export default function ContactUs() {
  return (
    <>
      <HeroBanner />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
        <FormMessage />
        <GetInTouch />
      </div>
      <Location />
      <Faq />
    </>
  );
}
