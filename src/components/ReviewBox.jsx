import Image from "next/image";
import { useState } from "react"
import { Dialog } from "@headlessui/react"

export function ReviewBox({ name, batch, photo }) {
  let [isOpen, setIsOpen] = useState("")
  return (
    <>
      <figure onClick={() => setIsOpen(!isOpen)} className={`rounded-2xl grid bottom-0 bg-white p-6 h-auto shadow-lg ring-1 ring-gray-900/5 `}>
        <div className="grid grid-rows-4">
          <blockquote className="row-span-3 text-gray-900">
            <Image height={1000} width={1000} src={`/images/reviews/${photo}.jpeg`} className={`${isOpen ? "selected" : ""}`} alt="review" />
          </blockquote>
          <figcaption className="row-span-1  mt-6 flex items-center gap-x-4">
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-gray-600">{`${batch}`}</div>
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}