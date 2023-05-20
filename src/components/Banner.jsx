import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { useState, useEffect } from 'react';




export function Banner({ children, time }) {
  // Later add all this to store
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [hidden, setHidden] = useState("")

  const handleClick = (event) => {
    setHidden("hidden")
  }

  const deadline = "December, 31, 2023";

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
    <>
      <div className={`h-0.5 bg-white ${hidden ? "" : "hidden"}`}>

      </div>
      <div className={`sticky inset-0 z-50 isolate flex items-center gap-x-6 overflow-hidden bg-secondary-light px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${hidden}`}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6">
            Hurry up! Limited time offer for {days} {hours} {minutes} {seconds}
          </p>
          <Link
            href="/#join"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className={`flex flex-1 justify-end`} >
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleClick}>
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  )
}
