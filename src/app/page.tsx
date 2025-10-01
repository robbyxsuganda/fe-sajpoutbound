import HeroBanner from "@/components/views/Home/HeroBanner/HeroBanner";
import VisiMisi from "@/components/views/Home/VisiMisi/VisiMisi";
import ProductsShow from "@/components/views/Home/ProductsShow/ProductsShow";
import Slogan from "@/components/views/Home/Slogan/Slogan";
import WhyChooseUs from "@/components/views/Home/WhyChooseUs/WhyChooseUs";
import BlogsShow from "@/components/views/Home/BlogsShow/BlogsShow";
import Location from "@/components/views/Home/Location/Location";
import Reviews from "@/components/views/Home/Reviews/Reviews";
import CallToAction from "@/components/views/Home/CallToAction/CallToAction";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <VisiMisi />
      <ProductsShow />
      <Slogan />
      <WhyChooseUs />
      <BlogsShow />
      <Location />
      <Reviews />
      <CallToAction />
    </>
  );
}
