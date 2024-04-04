import React from 'react'
import { cn } from '~/lib/utils'

export interface FooterProps
    extends React.InputHTMLAttributes<HTMLDivElement> { }

export default function Footer({ className }: FooterProps) {
    return (
        <footer className={cn('text-xs text-[#75757B] text-center', className)}>
            <hr className='h-1 border-gray-400 my-4 w-11/12 mx-auto' />
            <p>
                Important information about procedures for opening a new account: To help the government fight the funding of terrorism and money laundering activities. Federal law requires all financial institutions to obtain, verify, and record information that identities each person who opens an account. What this means for you: When you open an account, we will ask you for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver’s license or other identifying documents.
            </p>
            <p className='underline my-4'>Do Not Sell or Share my personal Information</p>

            <p>Avant branded credit products are issued by WebBank.</p>
            <p>Copyright 2022 Avant, LLC. All rights reserved. Need help? 1.855.752.7012</p>
        </footer>
    )
}