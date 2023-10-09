"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({onClick,href,className,children}) => {
    const currentPage=usePathname();
    return (
        <Link onClick={onClick} href={href} className={`${currentPage===href&&"font-semibold"} ${className}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;