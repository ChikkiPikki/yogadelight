import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const includedFeatures = [
  'Yogic Aasanas',
  'Yoga for weight loss',
  'Weight loss exercises',
  'Meditation sessions',
  'Stretching and warm-up',
  'Classical Yogic theory',
  'Only six ladies per batch',
  'Diet plans'
]

export function Pricing() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [hidden, setHidden] = useState("")
  const deadline = "May, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-blue-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Free Sessions!</h2>
          <p className="mt-6 text-lg leading-6 text-gray-50">
            Join within {days} days {hours} hours, and get access to three absolutely free yoga sessions with Rachana Shah.
          </p>
        </div>
        <div className="mx-auto mt-16 bg-primary max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Yoga Class Structure</h3>
            <p className="mt-6 text-base leading-7 font-semibold text-gray-700">
              All my batches run 6 days a week, from monday to friday. With only 6 ladies in each batch, everyone gets personalised attention and training
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-dark">What’s included</h4>
              <div className="h-px flex-auto bg-gray-600" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-dark bg-secondary rounded-xl" aria-hidden="true" />
                  <p className='font-semibold'>
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:my-auto lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-primary-light py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Three free sessions, then just</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-2xl font-bold tracking-tight text-red-600"><s>₹2,000</s></span>
                  <span className="text-5xl font-bold tracking-tight text-green-700">₹1,500</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">per month</span>
                </p>
                <Link
                  href="/#join"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join Now
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Offer valid till 1st June!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
