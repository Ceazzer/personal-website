import tw from "tailwind-styled-components";

export const StyledButtonContainer = tw.div`
    flex
    flex-row
    justify-center
    items-center
    w-full
    max-w-[180px]
    min-w-[120px]
    h-[45px]
    bg-transparent
    border-2
    border-blue-600
    rounded-3xl
    cursor-pointer
    hover:bg-blue-600
    transition
    duration-500
    ease-in-out
    shadow-md
    shadow-gray-900
`;