import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Best of both worlds.',
    description:
      'With online yoga classes, you can attend from the comfort of your home. And with personalised attention from me, you will receive specific advice to improve.',
    icon: ArrowLongRightIcon,
  },
  {
    name: 'Meditation.',
    description: 'Yoga isn\'t just about fitness and weight loss. It is also about finding peace within yourself. That is why all of my sessions have 10 minutes of meditation practice included in them.',
    icon: ArrowLongRightIcon,
  },
  {
    name: 'Yoga Theory.',
    description: 'I regularly send information on what I taught in a session. This helps my students know more about why we are doing a particular aasan or exercise and makes them more confident.',
    icon: ArrowLongRightIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <div className="overflow-hidden bg-primary-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Why choose Yoga Delight?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal Attention</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Unlike other yoga classes, I focus on Personal Attention. All of us are different.
                With just a few students in a batch,
                I am free to customise yoga plans for every single one of my students.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      <h1 className="text-xl">{feature.name}</h1>
                    </dt>{' '}
                    <dd className="inline font-semibold">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end">
            <img
              src="/3.svg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
