import axios from 'axios'
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormDisplay, changeThanksAnimation } from "@/store/index";
import { Container } from './Container';
import ContentLoader from 'react-content-loader'
import Select from 'react-select'
import Image from 'next/image';

const options = [
  { value: '6 to 7 morning', label: '6 to 7 morning (batch full)', disabled: true },
  { value: '7 to 8 morning', label: '7 to 8 morning (3 seats left)' },
  { value: '5 to 6 evening', label: '5 to 6 evening (batch full)', disabled: true },
  { value: '6 to 7 evening', label: '6 to 7 evening (2 seats left)' }

]


export function Form() {

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

  const state = useSelector((state) => state.form)
  const [selectedOption, setSelectedOption] = useState(null)
  console.log(state)
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    dispatch(changeFormDisplay(false))
    event.preventDefault()
    const reqBody = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName?.value,
      batch: selectedOption.value,
      phone: event.target.phone.value,
      requirements: event.target.requirements?.value,
      email: event.target.email?.value
    }
    await axios.post("/api/admin/leads", reqBody, { headers: { "Content-Type": "application/json" } }).then((response) => { dispatch(changeThanksAnimation(true)); }).catch((error) => alert(error))
  }
  return (
    <div className="relative isolate bg-blue-dark mx-auto" id="join">
      <div className="mx-auto grid max-w-full grid-cols-1 lg:grid-cols-2">

        <div className='-order-1'>

          {
            state.formDisplay &&
            <form action="" method="POST" onSubmit={handleSubmit}
              id="cta-form"
              className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <Image src="/Logo.svg" alt="Yoga Delight" height={1000} width={1000} className="w-64" />

                <div className="mx-auto text-white max-w-3xl py-10">
                  <h1 className='font-heading text-4xl py-5'>
                    Join now
                  </h1>
                  <p className='py-4'>
                    Lose weight, get fit, and find peace.
                  </p>
                  <p className='pb-4'>
                    Only 5 seats left! Limited time offer for {days} days {hours} hours
                  </p>
                </div>
                <div className="grid justify-evenly grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                      Your name
                    </label>
                    <div className="mt-2.5">
                      <input required
                        type="text"
                        name="firstName"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input required
                        type="tel"
                        name="phone"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="batch" className="block text-sm font-semibold leading-6 text-white">
                      Your preferred batch
                    </label>
                    <div className="mt-2.5">
                      <div className="App">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          isSearchable={false}
                          isOptionDisabled={(option) => option.disabled}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          }
          {
            state.thanksAnimation &&
            <Container
              className="text-white px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <p className="text-3xl font-bold">
                Thank you
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Your phone number has been received. Rachana ma&apos;am will get in touch with you shortly.
              </p>
            </Container>
          }
          {
            !state.thanksAnimation && !state.formDisplay &&
            <Container className="text-white px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg-py-48">
              <ContentLoader
                speed={3}
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="white"
                foregroundColor="blue"
              >
                <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
                <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
                <rect x="48" y="46" rx="3" ry="3" width="150" height="6" />
              </ContentLoader>
            </Container>
          }
        </div>
        <div className="relative bg-blue px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-20">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
              </div>
            </div>

            <div className="relative sm:my-10 lg:my-0 lg:col-span-5 lg:-mr-8">
              <Image
                height={1000}
                width={1000}
                className=""
                src="/3.2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

