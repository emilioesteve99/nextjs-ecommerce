import React from 'react';
import Image from 'next/image'

function LayoutLogoComponent() {
    return <Image
        src="/logo.png"
        alt="logo"
        width="75px"
        height="75px"
    />
}

export default LayoutLogoComponent;