/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import HomeSectionTitle from "../components/Shared/SectionTitle";
import {
  useGetProductImagesQuery,
  useGetProductsQuery,
} from "../redux/features/api/productApi";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/slices/cartSlice";

const ProductListPage = () => {
  const { data: products, isLoading: loadingProducts } = useGetProductsQuery(
    {}
  );
  const { data: images, isLoading: loadingImages } = useGetProductImagesQuery(
    {}
  );
  const dispatch = useAppDispatch();
  const [mergedProducts, setMergedProducts] = useState([]);

  useEffect(() => {
    if (products && images) {
      const merged = products.map((product: any, index: number) => ({
        id: product.id,
        name: product.title,
        price: Math.floor(Math.random() * 100) + 1,
        image: images[index]?.url,
      }));
      setMergedProducts(merged);
    }
  }, [products, images]);

  if (loadingProducts || loadingImages) return <div>Loading...</div>;

  return (
    <section>
      <HomeSectionTitle
        mainTitle="All Products"
        subTitle="You can see all kind of products and you can add to cart product"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-8">
        {mergedProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={() => dispatch(addToCart(product))}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductListPage;
