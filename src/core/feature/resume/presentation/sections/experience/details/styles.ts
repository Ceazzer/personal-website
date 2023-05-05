import tw from "tailwind-styled-components";

export const StyledDetailsContainer = tw.div`
    relative
    flex
    w-full
    min-h-[80px]
    min-w-[300px]
    flex-row
    
`;

export const StyledFontContainer = tw.div`
    relative    
    flex
    w-[50px]
    font-bold
    items-start
    text-blue-400
    text-3xl
`;

export const StyledTextContainer = tw.div`
    relative
    flex
    flex-col
    w-full
`;

export const StyledTitle = tw.div`
    font-extrabold
    text-xl
`;

export const StyledText = tw.div`
    inline
    font-normal
    text-base
`;