import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import MediaMarkiting from "@/components/services/media-markiting";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
    title: "Social Media Marketing - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <MediaMarkiting />
            <ScrollToTop style={false} />
            <WhatsAppButton />
        </Wrapper>
    );
};

export default index;