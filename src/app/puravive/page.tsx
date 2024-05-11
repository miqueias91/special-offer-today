import { Metadata } from 'next';
import ContentPageSecond from '../../components/ContentPageSecond'
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'Puravive Official';

export default function Home() {
    const title = 'Claim Your Discounted Puravive Below While Stock Lasts'
    const primaryBgColor = '#323FAF'
    const bgColor = '#eee'
    const primaryColor = '#fff'
    const linkProduct = 'https://4036blma82yyxxd9wof8xcec0l.hop.clickbank.net/?tid=google';
    const pathImg = '/img/puravive/img.png';

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