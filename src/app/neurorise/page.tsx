import { Metadata } from 'next';
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'Neuro Rise Official';
const linkProduct = 'https://bit.ly/3vjgZWd';

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