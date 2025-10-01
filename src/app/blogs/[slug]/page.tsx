import HeroBanner from "@/components/views/Blogs/BlogDetail/HeroBanner/HeroBanner";
import BlogInfo from "@/components/views/Blogs/BlogDetail/BlogInfo/BlogInfo";
import RelatedProducts from "@/components/views/Blogs/BlogDetail/RelatedProducts/RelatedProducts";
import blogDetailData from "@/data/blogs/blogDetail.json";

export default function BlogDetail() {
  const blog = blogDetailData.blog;

  return (
    <>
      <HeroBanner blog={blog} />
      <BlogInfo blog={blog} />
      <RelatedProducts products={blog.products} />
    </>
  );
}
