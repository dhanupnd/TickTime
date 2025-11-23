function WhiteButton({children, href, onClick, ...props}) {
    const Component = href ? 'a' : 'button';

    return(
        <>
            <Component
                href={href}
                onClick={onClick}
                className="w-32 sm:w-40 md:w-48 
                flex justify-center items-center 
                text-sm sm:text-base md:text-lg 
                bg-white text-black 
                px-4 sm:px-6 md:px-10 
                py-2 md:py-3 
                rounded-full
                hover:bg-transparent hover:text-white
                hover:border-3 hover:border-white
                hover:scale-[1.05] active:scale-[0.95]
                transition duration-500 ease-in-out"
                {...props}
            >
                {children}
            </Component>
        </>
    )
}

export default WhiteButton;