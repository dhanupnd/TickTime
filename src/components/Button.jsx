function Button({children, href, onClick, ...props}) {
    const Component = href ? 'a' : 'button';

    return(
        <>
            <Component
                href={href}
                onClick={onClick}
                className="w-32 sm:w-40 md:w-48 
                flex justify-center items-center 
                text-sm sm:text-base md:text-lg 
                bg-black text-white 
                px-4 sm:px-6 md:px-10 
                py-2 md:py-3 
                rounded-full border-3 border-white
                hover:bg-white hover:text-black
                hover:border-2 hover:border-white
                hover:scale-[1.05] active:scale-[0.95]
                transition duration-500 ease-in-out"
                {...props}
            >
                {children}
            </Component>
        </>
    )
}

export default Button;