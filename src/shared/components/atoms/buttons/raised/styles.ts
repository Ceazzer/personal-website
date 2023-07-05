import tw from "tailwind-styled-components";

export const StyledButtonContainer = tw.div`
    inline-flex
    items-center
    justify-center
    min-w-[140px]
    min-h-[40px]
    px-[20px]
    bg-red-700
`;

export const StyledButtonText = tw.button`
    relative
    capitalize
    font-bold
    text-md
    text-white
`;