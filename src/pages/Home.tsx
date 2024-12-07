import Hero from "../components/Hero/Hero";
import ScrollToTopButton from "../components/ui/ScrollTopButton";
import ProductListPage from "./ProductListPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductListPage />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
