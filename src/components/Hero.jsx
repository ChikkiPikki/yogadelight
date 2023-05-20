import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative bg-blue-dark">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto  max-w-2xl lg:mx-0">
            <Image
              height={1000}
              width={1000}
              className="h-24 w-auto mb-5"
              src="/Logo.svg"
              alt="Your Company"
            />
            <div className="sm:mt-16 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-graphics/50 hover:ring-graphics duration-300">
                Join today, and avail three FREE trial sessions{' '}
                <Link href="/#join" className="whitespace-nowrap font-semibold text-indigo-300">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Join <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-5 text-4xl tracking-tight  text-gray-50 sm:mt-10 sm:text-6xl font-heading">
              Find peace, <br /> Lose weight, <br /> Stay fit...
            </h1>
            <p className="mt-6 text-md leading-8 text-gray-50">
              with Yoga Delight - Yoga classes for women
            </p>
            <hr className="mt-6 max-w-md" />
            <p className="mt-6 text-lg max-w-md leading-8 text-gray-100">
              Find peace and happiness, lose weight and get fit - experience the power of Yoga.
            </p>
            <p className="mt-6 text-lg max-w-md leading-8 text-gray-100">
              Only six ladies per batch. Get personalised yoga training from our expert instructor.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/#join"
                className="rounded-md bg-indigo-600 hover:-translate-y-1 duration-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join for free
              </Link>
              <Link href="/#reviews" className="text-sm  rounded-full hover:translate-x-1 p-4 hover:ring-1 duration-300 font-semibold leading-6 text-gray-100">
                Read reviews <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative  sm:my-10 lg:my-0 lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            height={1000}
            width={1000}
            className="object w-full object-fit lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/3.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
