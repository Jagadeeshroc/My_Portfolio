import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'; 
import React from 'react';

import "tailwindcss";

const navigation = [
  { name: 'Home', to: '/home', current: false },
  { name: 'About', to: '/about', current: false },
  { name: 'Projects', to: '/projects', current: false },
  { name: 'Skills', to: '/skills', current: false },
  { name: 'Contact', to: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button and logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to='/home'>
                <img
                  alt="Your Company"
                  src="https://media-hosting.imagekit.io/c8d1c7be1531417c/J%20(2).png?Expires=1838917812&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DBxQ7DJF6z7Sw3~2Dkm95oeB3d5ZBTFftQzGXJkl8WwB6sCF0Kl8F45iA-KblHLAvbIpzk3Wb0HeQiIsriHNcV9pfSkughh0ksuNo7fIOCNoUpf0llN9UKHTlPbwAed6DuLpWjvgEQNaabee5bZ5~vR3oVCZC5CmyClmNnLxRzcXnmPpMyRBQnV-QtsafVkc6TZr4BtaW8lLdWNbTs~5dMdkkgLTytZ06pWQJYOyyM3iqto4eJ9paOebWFm6eqmuedS9YLhPhAWeOxDzAhgoLYGDtScmPbftC3de9xRCNtMsl5Vn~RMCMPT2Bj1wrhKNOekBRaUePbuFc-fsHBR5aA__"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center">
            {/* Notification button */}
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://media-hosting.imagekit.io/e15d389de9fb459b/Picsart_23-08-16_22-31-59-316.jpg?Expires=1837846489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=arUCwu2NPeQ2-nXDH5Rgi0mtAK1p336jOP2eKXHRbsHJxki5mXaJcAUP5utPbBEjUKRY26HZ7KMgc35ctm93aHF75JEdgYwxt~U13Q0wIr4tMoLU-z-sm32K7dCpgVQWgCuJeuHMBXI-E3zlE9gkaNTXOSs1IjlKbVqC59Uq6bixVP-bCw5AxlTeJZyERR8DcmpaWS-JkQx8bfhYpCsSBRTOJPj2S3rwyM~1JLZTuufiVzGZGai5mxjeTFHH4vSmwvQio1x-mNtR73G8Cr4uvXhesz16EGucOEKiypaeUzcMhHnBavH2zpjgWrJLaSjVuRaTnNQk6cu01WOvxVWdiw__"
                    alt=""
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Link
                      to="/resume"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Resume
                    </Link>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              className={classNames(
                item.current ? 'bg-blue-500 text-white' : 'text-gray-800 hover:bg-gray-100',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}