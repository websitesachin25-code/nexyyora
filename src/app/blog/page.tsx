 
import Blog from '@/components/blogs/blog';
import ScrollToTop from '@/components/common/scroll-to-top';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Wrapper from '@/layout/Wrapper';
export const metadata = {
    title: "Blog - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};
const index = () => {
    return (
        <Wrapper>
            <Blog />
            <ScrollToTop />
            <WhatsAppButton />           
        </Wrapper>
    );
};

export default index;