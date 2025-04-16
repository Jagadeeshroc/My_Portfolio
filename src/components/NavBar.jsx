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

export default function Example() {
  
  return (
    <>
     <Disclosure as="nav" className="bg-white-800">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center cursor-pointer">
              <Link to='/home'>
              <img
                alt="Your Company"
                src="https://media-hosting.imagekit.io/c8d1c7be1531417c/J%20(2).png?Expires=1838917812&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DBxQ7DJF6z7Sw3~2Dkm95oeB3d5ZBTFftQzGXJkl8WwB6sCF0Kl8F45iA-KblHLAvbIpzk3Wb0HeQiIsriHNcV9pfSkughh0ksuNo7fIOCNoUpf0llN9UKHTlPbwAed6DuLpWjvgEQNaabee5bZ5~vR3oVCZC5CmyClmNnLxRzcXnmPpMyRBQnV-QtsafVkc6TZr4BtaW8lLdWNbTs~5dMdkkgLTytZ06pWQJYOyyM3iqto4eJ9paOebWFm6eqmuedS9YLhPhAWeOxDzAhgoLYGDtScmPbftC3de9xRCNtMsl5Vn~RMCMPT2Bj1wrhKNOekBRaUePbuFc-fsHBR5aA__"
                className="h-14 rounded-4xl"
              />
              
              </Link>
             
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-gray' : 'text-gray-800 hover:bg-gray-700 hover:text-white mt-2',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm cursor-pointer ">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://media-hosting.imagekit.io/e15d389de9fb459b/Picsart_23-08-16_22-31-59-316.jpg?Expires=1837846489&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=arUCwu2NPeQ2-nXDH5Rgi0mtAK1p336jOP2eKXHRbsHJxki5mXaJcAUP5utPbBEjUKRY26HZ7KMgc35ctm93aHF75JEdgYwxt~U13Q0wIr4tMoLU-z-sm32K7dCpgVQWgCuJeuHMBXI-E3zlE9gkaNTXOSs1IjlKbVqC59Uq6bixVP-bCw5AxlTeJZyERR8DcmpaWS-JkQx8bfhYpCsSBRTOJPj2S3rwyM~1JLZTuufiVzGZGai5mxjeTFHH4vSmwvQio1x-mNtR73G8Cr4uvXhesz16EGucOEKiypaeUzcMhHnBavH2zpjgWrJLaSjVuRaTnNQk6cu01WOvxVWdiw__"
                    className="size-14 rounded-xl"
                  />
                 
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link to='/profile'
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/settings'
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/signout'
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Resume
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
  )
}