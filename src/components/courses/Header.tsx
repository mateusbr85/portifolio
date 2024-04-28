// import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { Button } from '../formFields/Button';

interface HeaderProps {
    phraseDescription: string;
    offerValue: string;
    actionBuy: () => void;
}

export const Header = ({...props}: HeaderProps) => {

    return (
        <>
            <header className=' z-20
            text-background_light
            bg-third_dark transition-all fixed top-0 left-0 right-0 w-full pt-5  min-h-28 pb-5
            backdrop-filter backdrop-blur-md bg-opacity-75 px-10
            lsg:pr-20 lg:pl-20
        '
            >
                <main className='flex flex-col gap-5 items-center container mx-auto
                    lg:flex-row lg:min-w-full lg:justify-around
                '
                >
                    <div className='flex items-center justify-start flex-row gap-4'>
                        <img
                            className='lg:flex hidden'
                            alt='Imagem que descreve a logo da marca MvCode'
                            width={60}
                            height={60}
                            src={Logo}
                        />
                        <h2 className='text-md text-center'>{props.phraseDescription}</h2>
                    </div>
                    <div>
                        <h2>
                            {props.offerValue}
                        </h2>
                    </div>
                    <div
                        className='min-w-full lg:min-w-10'
                    >
                        <Button
                            colorButton='primary'
                            onClick={props.actionBuy}
                        >
                            Quero Comprar Agora
                        </Button>
                    </div>
                </main>
            </header>

        </>
    )
}