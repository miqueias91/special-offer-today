import { Metadata } from 'next';
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'GlucoTrust Official';
const linkProduct = 'https://bit.ly/3vfnZ6H';

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