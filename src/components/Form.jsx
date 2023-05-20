import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { changeFormDisplay, changeThanksAnimation } from "@/store/index";
import { Container } from './Container';
// import { CircleLoader } from './CircleLoader';
import Link from "next/link"
import Image from 'next/image';



export function Form() {
  const state = useSelector((state) => state.form)
  console.log(state)
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    dispatch(changeFormDisplay(false))
    event.preventDefault()
    const reqBody = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName?.value,
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
            <form action="" method="POST" onSubmit={handleSubmit} id="cta-form" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
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
            <Container className="text-white px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"><p className="text-3xl font-bold">Thank you</p><p className="mt-6 text-lg leading-8 text-gray-300">
              Your request has been received. We will get in touch with you shortly. Meanwhile, be sure to check out our porfolio and blog below.
            </p>
            </Container>
          }
          {
            !state.thanksAnimation && !state.formDisplay &&
            <Container className="text-white px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg-py-48">
              {/* <CircleLoader /> */}
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
              <img
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

