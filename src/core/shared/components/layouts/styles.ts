import tw from "tailwind-styled-components";

export const StyledBackgroundContainer = tw.div`
    relative
    flex
    flex-col
    justify-start
    items-center
    overflow-scroll
    h-screen
    w-screen
    bg-[url('/background-drop.jpg')]
    md:pt-24
    md:pb-24
    
`;

export const StyledApplicationContainer = tw.div`
    relative
    flex
    flex-col
    w-full
    bg-[#222]
    text-gray-300
    md:max-w-[1200px]
    md:rounded
`;

export const StyledApplicationContent = tw.div`
    flex
    flex-col
    w-full
    h-full
    min-h-screen
`;