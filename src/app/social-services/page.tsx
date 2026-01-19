import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SocialServices from "@/components/services/social-services";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata = {
    title: "Link Building Services - Digital Marketing & SEO Agency Next js Template",
};

const index = () => {
    return (
        <Wrapper>
            <SocialServices />
            <ScrollToTop />
            <WhatsAppButton />
        </Wrapper>
    );
};

export default index;