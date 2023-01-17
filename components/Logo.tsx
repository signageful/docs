import React from 'react';
import Image from 'next/image';
import { useConfig } from 'nextra-theme-docs';

export const Logo: React.FC = () => {
    const { darkMode } = useConfig();

    return (
        <>
            <Image src="/logo_blk.png" width={150} height={60} alt="Signageful" />

        </>
    )
}