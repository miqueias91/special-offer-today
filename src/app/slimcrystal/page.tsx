import { Metadata } from 'next';
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'Slimcrystal Official';
const linkProduct = 'https://bit.ly/41yE0kj';

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