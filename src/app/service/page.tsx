import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
import Service from '@/components/inner-pages/service';
import WhatsAppButton from '@/components/common/WhatsAppButton';

export const metadata = {
    title: "Service - Digital Marketing & SEO Agency Next js Template", 
};
const index = () => {
    return (
        <Wrapper>
            <Service />
            <ScrollToTop style={false} />
            <WhatsAppButton/>
        </Wrapper>
    );
};

export default index;