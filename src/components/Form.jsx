// import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

// export function Form() {
//   return (
//     <div className="relative isolate bg-primary-light">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
//         <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-primary-medium ring-1 ring-gray-900/10 lg:w-1/2">
//               {/* <svg
//                 className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//                 aria-hidden="true"
//               >
//                 <defs>
//                   <pattern
//                     id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
//                     width={200}
//                     height={200}
//                     x="100%"
//                     y={-1}
//                     patternUnits="userSpaceOnUse"
//                   >
//                     <path d="M130 200V.5M.5 .5H200" fill="none" />
//                   </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" strokeWidth={0} fill="white" />
//                 <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
//                   <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
//                 </svg>
//                 <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
//               </svg> */}
//             </div>
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
//               integer elementum id sem. Arcu sed malesuada et magna.
//             </p>
//             <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Address</span>
//                   <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
//                 </dt>
//                 <dd>
//                   545 Mavis Island
//                   <br />
//                   Chicago, IL 99191
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Telephone</span>
//                   <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
//                 </dt>
//                 <dd>
//                   <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
//                     +1 (555) 234-5678
//                   </a>
//                 </dd>
//               </div>
//               <div className="flex gap-x-4">
//                 <dt className="flex-none">
//                   <span className="sr-only">Email</span>
//                   <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
//                 </dt>
//                 <dd>
//                   <a className="hover:text-gray-900" href="mailto:hello@example.com">
//                     hello@example.com
//                   </a>
//                 </dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//         <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div>
//                 <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                   First name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="first-name"
//                     id="first-name"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
//                   Last name
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="text"
//                     name="last-name"
//                     id="last-name"
//                     autoComplete="family-name"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
//                   Email
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     autoComplete="email"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
//                   Phone number
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     type="tel"
//                     name="phone-number"
//                     id="phone-number"
//                     autoComplete="tel"
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div className="sm:col-span-2">
//                 <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
//                   Message
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     name="message"
//                     id="message"
//                     rows={4}
//                     className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     defaultValue={''}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-end">
//               <button
//                 type="submit"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Send message
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { changeFormDisplay, changeThanksAnimation } from "@/store/index";
import { Container } from './Container';
// import { CircleLoader } from './CircleLoader';
import Link from "next/link"



export function Form() {
  const state = useSelector((state) => state.form)
  console.log(state)
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    dispatch(changeFormDisplay(false))
    event.preventDefault()
    const reqBody = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phone: event.target.phone.value,
      requirements: event.target.requirements.value,
      email: event.target.email.value
    }
    await axios.post("/api/admin/leads", reqBody, { headers: { "Content-Type": "application/json" } }).then((response) => { dispatch(changeThanksAnimation(true)); }).catch((error) => alert(error))
  }
  return (
    <div className="relative isolate bg-blue-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Need something else?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Feel free to let us know if you need more customized solutions. We can make arrangements for graphic design and branding as well. Just fill out this form and our representative will call you soon. <br /><br /> Alternatively, you can also reach out to us directly here:
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-white" href="tel:+916353594722">
                    +91 63535 94722
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-white" href="sales@webslush.in">
                    sales@webslush.in
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {
          <>
            {
              state.formDisplay &&
              <form action="" method="POST" onSubmit={handleSubmit} id="cta-form" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                        First name
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
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input required
                          type="text"
                          name="lastName"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input required
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
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
                      <label htmlFor="requirements" className="block text-sm font-semibold leading-6 text-white">
                        Requirements
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          placeholder='Let us know more about you and your ideas for a website.'
                          name="requirements"
                          id="requirements"
                          rows={5}
                          className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            }

          </>
        }
        {state.thanksAnimation && <Container className="text-white px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"><p className="text-3xl font-bold">Thank you</p><p className="mt-6 text-lg leading-8 text-gray-300">
          Your request has been received. We will get in touch with you shortly. Meanwhile, be sure to check out our porfolio and blog below.
        </p> </Container>}
        {!state.thanksAnimation && !state.formDisplay && <Container className="text-white px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg-py-48">
          {/* <CircleLoader /> */}
        </Container>

        }

      </div>
    </div>
  )
}

