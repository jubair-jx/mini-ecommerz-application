/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductCard from "../components/Product/ProductCard";
import HomeSectionTitle from "../components/Shared/SectionTitle";
import Button from "../components/ui/Button";
import ProductCardSkeleton from "../components/ui/Loading";
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
  const [visibleCount, setVisibleCount] = useState(12); // Tracks how many products to show

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

  const addToCartHandler = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Product is added to cart successfully", {
      duration: 1500,
    });
  };

  // Function to load more products
  const loadMoreProducts = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <section>
      <HomeSectionTitle
        mainTitle="All Products"
        subTitle="You can see all kind of products and you can add to cart product"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-8 px-3">
        {loadingProducts || loadingImages
          ? Array.from({ length: visibleCount }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : mergedProducts
              .slice(0, visibleCount)
              .map((product: any) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={() => addToCartHandler(product)}
                />
              ))}
      </div>

      {/* Load More Button */}
      {!loadingProducts &&
        !loadingImages &&
        visibleCount < mergedProducts.length && (
          <div className="text-center my-8">
            <Button
              onClick={loadMoreProducts}
              className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-700"
            >
              Load More Products
            </Button>
          </div>
        )}
    </section>
  );
};

export default ProductListPage;
