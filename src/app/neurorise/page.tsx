import { Metadata } from 'next';

const titleProduct = 'Neuro Rise Official';
const linkProduct = 'https://bit.ly/3vjgZWd';

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{titleProduct}</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            {`The best offer today. Don't miss the incredible chance to snag something awesome! This product, almost sold out.`}
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-1 lg:pt-2">
            <div className="flex flex-col items-start">            
              <a href={linkProduct} target='_BLANK' className="w-full text-xl font-bold text-white leading-6 text-white">
              <button
                  type="button"
                  className="w-full flex-none rounded-md bg-indigo-500 px-4 py-4 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Buy Now
                </button>
                </a>
            </div>
            <div className="flex flex-col items-start">            
              <a href={linkProduct} target='_BLANK' className="w-full text-xl font-bold text-white leading-6 text-white">
              <button
                  type="button"
                  className="w-full flex-none rounded-md bg-indigo-400 px-4 py-4 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  More Details
                </button>
                </a>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: titleProduct,
}