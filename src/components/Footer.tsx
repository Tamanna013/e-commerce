import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="mx-auto max-w-[1200] relative">
        <div>
          <p className="font-semibold text-gray-500 text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue-500">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue-500">
            other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray-500 text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-500 text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray-500 text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer