import "./App.css";
import Header from "./componentcorner/src/Header";
import Hero from "./componentcorner/src/Hero";
import ProductCard from "./componentcorner/src/ProductCard";
import Footer from "./componentcorner/src/Footer";
function App() {
  return (
    <div>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your one-stop shop for awesome products"
        ctaText="Shop Now"
      />

      <div className="product-grid">
        <ProductCard
          name="Wireless Headphones"
          price="99.99"
          image="https://placehold.co/600x400"
          description="High-quality sound with noise cancellation."
        />
        <ProductCard
          name="Smart Watch"
          price="149.99"
          image="https://placehold.co/600x400"
          description="Track your fitness and stay connected."
        />
        <ProductCard
          name="Bluetooth Speaker"
          price="79.99"
          image="https://placehold.co/600x400"
          description="Portable speaker with powerful sound."
        />
      </div>

      <Footer storeName="ComponentCorner" email="support@componentcorner.com" />
    </div>
  );
}

export default App;
