import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import MarketingAnalysis from "@/components/services/marketing-analysis";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
    title: "Marketing analysis - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <MarketingAnalysis />
            <ScrollToTop  />
            <WhatsAppButton/>            
        </Wrapper>
    );
};

export default index;