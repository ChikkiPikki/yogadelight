
import { ReviewBox } from "./ReviewBox"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const testimonials = [
  {
    name: "Bhavana D.",
    batch: "5 p.m. evening"
  },
  {
    name: "Nisha K.",
    batch: "5 p.m. evening"
  },
  {
    name: "Yesha D.",
    batch: "5 p.m. evening"
  },
  {
    name: "Niharika A.",
    batch: "7 a.m. morning"
  },
  {
    name: "Nisha K.",
    batch: "5 p.m. evening"
  },
  {
    name: "Yesha D.",
    batch: "5 p.m. evening"
  },
  {
    name: "Niharika A.",
    batch: "7 a.m. morning"
  }
]

export function Reviews() {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className="relative isolate pb-16 sm:pt-32 bg-blue-dark" >
      <div className="mx-auto py-16 lg:py-0 max-w-7xl px-6 lg:px-8" id="reviews">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-light">Reviews</h2>
          <p className="mt-2 text-3xl font-heading  text-white sm:text-4xl">
            What my students say about me:
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {
            testimonials.slice(0, 4).map((review, index) => {
              return (
                <ReviewBox
                  key={index}
                  name={review.name}
                  batch={review.batch}
                  photo={index + 1} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
