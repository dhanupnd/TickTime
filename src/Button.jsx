function Button({children, href, onClick, ...props}) {
    const Component = href ? 'a' : 'button';

    return(
        <>
            <Component
                href={href}
                onClick={onClick}
                className="w-48 justify-center items-center text-white text-lg bg-transparent border-3 px-10 py-2 rounded-full hover:bg-white hover:text-black hover:border-3 hover:border-white hover:scale-[1.05] active:scale-[0.95] transition duration-500 ease-in-out"
                {...props}
            >
                {children}
            </Component>
        </>
    )
}

export default Button;