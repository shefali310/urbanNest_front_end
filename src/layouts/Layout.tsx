import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import NewsletterSignup from "../components/NewsletterSignup";
import Carousel from "../components/Carousel";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto">
        <SearchBar />
      </div>
      <div className="container mt-5 mx-auto">
        <Carousel />
      </div>

     

      <div className="container mx-auto py-10 flex-1">{children}</div>
      <div> </div>

      <NewsletterSignup />

      <Footer />
    </div>
  );
};

export default Layout;
