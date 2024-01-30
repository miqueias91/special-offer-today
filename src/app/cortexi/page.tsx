import { Metadata } from 'next';
import ContentPageSecond from '../../components/ContentPageSecond'

const titleProduct = 'Cortexi Official';

export default function Home() {
    const title = 'Claim Your Discounted Cortexi Below While Stock Lasts'
    const primaryBgColor = '#379884'
    const primaryColor = '#fff'
    const linkProduct = 'https://bit.ly/3HBJWjd';
    const pathImg = '/img/cortexi/img.png';

  return (
    <>
        <ContentPageSecond 
            titleProduct={titleProduct} 
            title={title} 
            primaryBgColor={primaryBgColor} 
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