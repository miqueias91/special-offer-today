import { Metadata } from 'next';
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'Joint Genesis Official';
const linkProduct = 'https://bit.ly/3tEUhYa';

export default function Home() {
  return (
    <>
        <ContentPageFirst 
            titleProduct={titleProduct}
            linkProduct={linkProduct} 
        />
    </>
  )
}

export const metadata: Metadata = {
  title: titleProduct,
}