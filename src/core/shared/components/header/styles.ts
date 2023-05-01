import tw from "tailwind-styled-components";

export const StyledHeaderContainer = tw.div`
    relative
    flex
    w-full
    h-24
    justify-between
    items-center
    bg-[#212529]
    px-10
    md:rounded-t-lg
`;

export const StyledNavContainer = tw.div`
    relative
    flex
    h-full
    w-[250px]
    items-center
    justify-between
`;

export const StyledLogoContainer = tw.div`
    relative
    flex
    w-12
    h-12
    items-center
    justify-center
    rounded-full
    capitalize
    text-gray-300
    bg-blue-500
    font-extrabold
    text-2xl
`;