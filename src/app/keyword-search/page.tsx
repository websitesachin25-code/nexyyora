import ScrollToTop from "@/components/common/scroll-to-top";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import KeywordSearch from "@/components/services/keyword-search";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Keyword Research - Digital Marketing & SEO Agency Next js Template", 
};

const index = () => {
    return (
        <Wrapper>
            <KeywordSearch />
            <ScrollToTop style={false} />
            <WhatsAppButton/>
        </Wrapper>
    );
};

export default index;