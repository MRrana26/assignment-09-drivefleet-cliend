import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return <Link href={href}
    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm flex items-center justify-center
        ${isActive
                ? "border-b border-blue-600 text-blue-600 shadow-sm shadow-red-200 scale-105"
                : "text-slate-600 hover:bg-blue-100 hover:text-blue-600"
            }`}
    >
    {children}</Link>
};

export default NavLinks;