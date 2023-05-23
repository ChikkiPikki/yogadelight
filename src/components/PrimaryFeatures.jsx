import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Physical fitness, weight loss, and flexibility.',
    description:
      'Yoga improves strength, balance, and coordination while increasing flexibility and toning muscles',
    icon: ArrowLongRightIcon,
  },
  {
    name: 'Stress reduction and mental clarity.',
    description: 'Yoga reduces stress, promotes relaxation, and enhances mental clarity through deep breathing and mindfulness techniques.',
    icon: ArrowLongRightIcon,
  },
  {
    name: 'Mind-body connection and emotional well-being.',
    description: 'Yoga fosters a stronger mind-body connection, encouraging self-reflection, self-acceptance, and emotional resilience.',
    icon: ArrowLongRightIcon,
  },
]

export function PrimaryFeatures() {
  return (
    <div className="overflow-hidden bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Yoga?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits of Yoga</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A regular Yoga practice offers numerous benefits for physical, mental, and emotional well-being.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="/3.svg"
              alt="Yoga Delight"
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
