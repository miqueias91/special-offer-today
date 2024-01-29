import { Metadata } from 'next';
import ContentPage from '../../components/ContentPage'

const titleProduct = 'Cortexi Official';

export default function Home() {
    const title = 'Claim Your Discounted Cortexi Below While Stock Lasts'
    const primaryBgColor = '#379884'
    const primaryColor = '#fff'
    const linkProduct = 'https://bit.ly/3HBJWjd';

  return (
    <>
        <ContentPage 
            title={title} 
            primaryBgColor={primaryBgColor} 
            primaryColor={primaryColor} 
            linkProduct={linkProduct} 
        />
    </>
  )
}

export const metadata: Metadata = {
  title: titleProduct,
}