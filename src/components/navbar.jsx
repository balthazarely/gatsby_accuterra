import * as React from 'react';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import AccuterraLogo from '../assets/logos/accuterra_logo_horizontal.svg';
import { Popover, Transition } from '@headlessui/react';
import {
  RssIcon,
  MenuIcon,
  GlobeIcon,
  UserIcon,
  ClipboardListIcon,
  MapIcon,
  DocumentSearchIcon,
  XIcon,
} from '@heroicons/react/outline';

const navItems = [
  {
    name: 'Overview',
    href: '/',
    icon: MapIcon,
  },
  {
    name: 'Plans',
    href: '/plans/',
    icon: ClipboardListIcon,
  },
  {
    name: 'Documentation',
    href: '/documentation/',
    icon: DocumentSearchIcon,
  },
  {
    name: 'Explore Map',
    href: '/explore-map/',
    icon: GlobeIcon,
  },
  {
    name: 'Blog',
    href: '/blog/',
    icon: RssIcon,
  },
];

export default function Navbar() {
  return (
    <Popover className=" z-50 bg-white  border-gray-100  sticky top-0  ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            <div className="flex justify-between items-center h-20 lg:justify-start lg:space-x-10 ">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <span className="sr-only">Accuterra</span>
                {/* should be gatsby image? */}
                <Link to={'/'}>
                  <img
                    className="h-7 sm:h-10 "
                    src={AccuterraLogo}
                    alt="Accuterra Logo"
                  />
                </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden  ">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden lg:flex items-center justify-end lg:flex-1 xl:w-0 ">
                {navItems.map((navItem, index) => (
                  <Link
                    key={navItem.name}
                    partiallyActive={index >= 1 ? true : false}
                    to={navItem.href}
                    activeClassName="active"
                    className="whitespace-nowrap text-sm font-normal  transition duration-200	 text-accuterraBlue-100 hover:text-accuterraBlue-700 ml-6  py-7"
                  >
                    {navItem.name.toUpperCase()}
                  </Link>
                ))}
                <a
                  href="https://account.accuterra.com/account/"
                  className="whitespace-nowrap text-sm font-normal  transition duration-200	 text-accuterraBlue-100 hover:text-accuterraBlue-700 ml-6  py-7"
                >
                  MY ACCOUNT
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link to={'/'}>
                        <img
                          className="h-7 sm:h-8 "
                          src={AccuterraLogo}
                          alt="Accuterra Logo"
                        />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-10">
                    <nav className="grid gap-y-8">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 p-3 flex items-center rounded-md  group hover:bg-gray-50 "
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-accuterraBlue-500  transition duration-200  group-hover:text-accuterraBlue-700"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-normal  transition duration-200  text-accuterraBlue-100 group-hover:text-accuterraBlue-700">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                      <a
                        href="https://account.accuterra.com/account/"
                        className="-m-3 p-3 flex items-center rounded-md  group hover:bg-gray-50 "
                      >
                        <UserIcon
                          className="flex-shrink-0 h-6 w-6 text-accuterraBlue-500  transition duration-200  group-hover:text-accuterraBlue-700"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-normal  transition duration-200  text-accuterraBlue-100 group-hover:text-accuterraBlue-700">
                          My Account
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
