import tw from "tailwind-styled-components";

export const StyledNavButton = tw.div`
    mx-2
    capitalize
    text-white
    text-sm
    font-bold
    cursor-pointer
    hover:text-blue-500
    transition
    duration-500
    ease-in-out
    border-b-2 
    border-double 
    border-transparent
    hover:border-current
    w-fit
    select-none
`;