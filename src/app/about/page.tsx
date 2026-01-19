import About from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
    title: "About - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <About />
            <ScrollToTop />
            <WhatsAppButton />
        </Wrapper>
    );
};

export default index;