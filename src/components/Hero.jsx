import { ChevronRightIcon } from '@heroicons/react/20/solid'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-blue-dark ">
      {/* <img src="/HeaderGraphics.svg" className='absolute bottom-0 w-full' /> */}

      <div className="mx-auto relative max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="sticky top-4 mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* <img
            className="h-24 mr-64"
            src="/Logo.svg"
            alt="Yoga Delight"

          /> */}
          <h1 className="mt-10 text-4xl font-semi-bold tracking-tight text-white sm:text-6xl">
            Fitness and Peace
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-50">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 hidden lg:flex rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/3.svg"
                alt="App screenshot"

                className="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
            <div className="-m-2 flex lg:hidden rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/3.jpg"
                alt="App screenshot"

                className="w-[40rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
