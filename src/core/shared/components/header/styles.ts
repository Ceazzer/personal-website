import tw from "tailwind-styled-components";

export const StyledHeaderContainer = tw.div`
    relative
    flex
    w-full
    h-[60px]
    justify-between
    items-center
    px-[15px]
    shadow-md
    shadow-darkgray-400
    md:rounded-t-lg
`;

export const StyledNavContainer = tw.div`
    relative
    hidden
    h-full
    items-center
    justify-between
    md:flex
`;

export const StyledLogoContainer = tw.div`
    relative
    flex
    w-8
    h-8
    items-center
    justify-center
    rounded-full
    capitalize
    text-gray-300
    bg-blue-500
    font-extrabold
    text-xl
`;

export const StyledIconContainer = tw.div`
    relative
    flex
    items-center
    justify-center
    md:hidden
`;

