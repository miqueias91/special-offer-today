import { Metadata } from 'next';
import ContentPageSecond from '../../components/ContentPageSecond'

const titleProduct = 'The Smoothie Diet Official';

export default function Home() {
    const title = 'Claim Your Discounted The Smoothie Diet Below While Stock Lasts'
    const primaryBgColor = '#e20045'
    const bgColor = '#fefaf1'
    const primaryColor = '#fff'
    const linkProduct = 'https://cca938vm-5nxxxghomwerzs4ui.hop.clickbank.net/?tid=google';
    const pathImg = '/img/smoothiediet/img.png';

  return (
    <>
        <ContentPageSecond 
            titleProduct={titleProduct} 
            title={title} 
            primaryBgColor={primaryBgColor} 
            bgColor={bgColor} 
            primaryColor={primaryColor} 
            linkProduct={linkProduct} 
            pathImg={pathImg} 
        />
    </>
  )
}

export const metadata: Metadata = {
  title: titleProduct,
}