import { 
    ChevronsUpDown,
    Sun,
    Moon,
    Laptop,
    ShoppingCart,
    User,
    Lock
 } from 'lucide-react';

import Image from "next/image";

const DefaultLogo = () => (
    <Image src="/logo.svg" alt="Logo" width={100} height={128} />
);

export const Icons = {
    logo: DefaultLogo,
    User: User,
    Access: Lock,
    MyCart:ShoppingCart

};

export const ThemeIcons = {
    Sun: Sun,
    Moon: Moon,
    System: Laptop
};

// ChevronsUpDown and User are not used in the code, so they can be removed
