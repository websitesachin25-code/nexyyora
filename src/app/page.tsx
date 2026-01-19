import HomeOne from "@/components/homes/home";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import WhatsAppButton from "@/components/common/WhatsAppButton"
export const metadata = {
  title: "Home Main - SEO Marketing - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
  return (
    <Wrapper> 
       <HomeOne />
       <WhatsAppButton/>
       <ScrollToTop style={false} />
    </Wrapper>
  );
};

export default index;