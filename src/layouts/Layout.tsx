import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    DocumentArrowDownIcon,
    MegaphoneIcon,
    PhoneArrowUpRightIcon,
    PhoneArrowDownLeftIcon,
    ArrowRightOnRectangleIcon,
    ArrowDownOnSquareIcon,
    UserPlusIcon,
    TagIcon,
    BanknotesIcon,
    ArrowRightCircleIcon,
    PowerIcon
} from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/ornate-logo.avif';


const adminNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Tüm Yönlendirmeler', href: '/inquiries', icon: ArrowRightCircleIcon, current: false },
    { name: 'Tüm Kullanıcılar', href: '/users', icon: UsersIcon, current: false },
    { name: 'Kullanıcı Oluştur', href: '/create-user', icon: UserPlusIcon, current: false },
    { name: 'Arama Talepleri', href: '/call-requests', icon: PhoneArrowUpRightIcon, current: false },
    { name: 'Tüm Satışlar', href: '/sales', icon: BanknotesIcon, current: false },
    { name: 'Satış Oluştur', href: '/create-sale', icon: TagIcon, current: false },
    { name: 'Fatura Oluştur', href: '/invoices', icon: DocumentArrowDownIcon, current: false },
]
const salesNavigation = [
    { name: 'Yölendirmelerim', href: '/my-inquiries', icon: ArrowRightOnRectangleIcon, current: false },
    { name: 'Yönlendirme Oluştur', href: '/create-inquiry', icon: ArrowDownOnSquareIcon, current: true },
    { name: 'Arama Taleplerim', href: '/my-call-requests', icon: PhoneArrowUpRightIcon, current: false },
    { name: 'Arama Talebi Oluştur', href: '/create-call-request', icon: PhoneArrowDownLeftIcon, current: false },
    { name: 'Satışlarım', href: '/my-sales', icon: BanknotesIcon, current: false },
    { name: 'Satış Duyuruları', href: '/sale-notice', icon: MegaphoneIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { userSession } = useSelector((state: RootState) => state.auth);
    const location = useLocation()

    const [sidebarOpen, setSidebarOpen] = useState(false)



    const navigation = userSession?.role === 'admin' ? adminNavigation : salesNavigation

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Layout component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                    <div className="flex shrink-0 items-center">
                                        <img
                                            className="h-12 w-auto"
                                            src={Logo}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                to={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-gray-800 text-white'
                                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                )}
                                                            >
                                                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* onClick={handleLogout} */}
                                        <button className="mt-auto w-full py-2 text-left text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
                                            <span className="flex items-center">
                                                <PowerIcon className="h-6 w-6" aria-hidden="true" />
                                                <span className="ml-3">Logout</span>
                                            </span>
                                        </button>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Layout component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
                    <div className="flex shrink-0 items-center">
                        <img
                            className="h-12 w-auto"
                            src={Logo}
                            alt="Your Company"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                to={item.href}
                                                className={classNames(
                                                    item.href == location.pathname
                                                        ? 'bg-gray-800 text-white'
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                )}
                                            >
                                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="-mx-6 mt-auto flex justify-between">
                                <Link
                                    to="#"
                                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                                >
                                    <img
                                        className="h-8 w-8 rounded-full bg-gray-800"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <span className="sr-only">Your profile</span>
                                    <span aria-hidden="true">Tom Cook</span>

                                </Link>
                                <button data-tooltip-target="tooltip-light" data-tooltip-style="light" className="gap-x-4 px-6 py-3 text-left text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
                                    <span className="flex items-center">
                                        <PowerIcon className="h-6 w-6" aria-hidden="true" />

                                    </span>
                                </button>
                                <div id="tooltip-light" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
                                    Tooltip content
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </li>
                        </ul>

                    </nav>
                </div>
            </div>

            <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
                <Link to="#">
                    <span className="sr-only">Your profile</span>
                    <img
                        className="h-8 w-8 rounded-full bg-gray-800"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </Link>

            </div>

            <main className="py-10 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    )
}
export default Layout
