"use client"
import { Popover } from '@headlessui/react'

type BaseOutletProps = {
    className?: string;
    children: React.ReactNode;
    heading?: string;
};

const logo = "https://tailwindui.com/img/logos/mark.svg?color=blue&shade=300";
const companyName = "Your Company";

export default function BaseOutlet({ className, children, heading }: BaseOutletProps) {
    return (
        <>
            <div className="min-h-full">
                <>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="relative flex items-center justify-center py-5 lg:justify-between">
                            <div className="absolute left-0 flex-shrink-0 lg:static">
                                <a href="#">
                                    <span className="sr-only">{companyName}</span>
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt={companyName}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
                <main className="-mt-16 md:-mt-20 pb-8">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
                        <h1 className="sr-only">{heading}</h1>
                        <div className={`bg-white rounded-md shadow ${className}`}>
                            {children}
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                            <span className="block sm:inline">&copy; 2024 {companyName}.</span>{' '}
                            <span className="block sm:inline">All rights reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}