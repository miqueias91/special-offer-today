import { Metadata } from 'next';
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'Pure Neuro Official';
const linkProduct = 'https://bit.ly/3NKbUg4';

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