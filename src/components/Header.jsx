import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Reviews', href: '/#reviews' },
  { name: 'Free Sessions', href: '/#join' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>

      <header className="bg-blue h-16 md:h-20 lg:h-24 w-full" >
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 p-2.5">
            <a href="#" className="flex">
              <span className="sr-only">Yoga Delight</span>
              <Image className="h-16 w-auto" height={1000} width={1000} src="/logo.svg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-mt-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-background"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-background">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Yoga Delight</span>
                <Image
                  className="h-24 w-auto"
                  width={1000}
                  height={1000}
                  src="/logo.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>

  )
}
