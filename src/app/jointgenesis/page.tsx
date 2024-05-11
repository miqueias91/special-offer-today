import { Metadata } from 'next';
import ContentPageSecond from '../../components/ContentPageSecond'
import ContentPageFirst from '../../components/ContentPageFirst'

const titleProduct = 'Joint Genesis Official';

export default function Home() {
  const title = 'Claim Your Discounted Joint Genesis Below While Stock Lasts'
  const primaryBgColor = '#049484'
  const bgColor = '#f4f4fc'
  const primaryColor = '#fff'
  const linkProduct = 'https://5b9fcesnwct4t7760dqpv5qkbj.hop.clickbank.net/?tid=google';
  const pathImg = '/img/jointgenesis/img.png';

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