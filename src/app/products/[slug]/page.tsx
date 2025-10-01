import HeroBanner from "@/components/views/Products/ProductDetail/HeroBanner/HeroBanner";
import ProductInfo from "@/components/views/Products/ProductDetail/ProductInfo/ProductInfo";
import GaleryProduct from "@/components/views/Products/ProductDetail/GaleryProduct/GaleryProduct";
import RelatedBlogs from "@/components/views/Products/ProductDetail/RelatedBlogs/RelatedBlogs";
import productDetailData from "@/data/products/productDetail.json";

export default function ProductDetail() {
  const productData = productDetailData.product;

  return (
    <>
      <HeroBanner productData={productData} />
      <ProductInfo productData={productData} />
      <GaleryProduct productData={productData} />
      <RelatedBlogs productData={productData} />
    </>
  );
}
