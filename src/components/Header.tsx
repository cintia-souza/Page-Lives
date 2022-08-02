import { Logo } from "./Logo";

export function Header () {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-pink-500 border-b border-pink-600 ">
            <Logo />
        </header>

    )
};

export default Header;