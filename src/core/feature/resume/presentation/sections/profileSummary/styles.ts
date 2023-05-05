import tw from "tailwind-styled-components";

export const StyledProfileSummaryContainer = tw.div`
    relative    
    flex
    flex-col
    w-full
    h-auto
    pt-[50px]
    md:flex-row
`;

export const StyledProfileAvatarContainer = tw.div`
    relative
    flex
    w-full
    h-full
    items-center
    justify-center
    bg-blue
    pb-10
    md:pb-0
    md:justify-end
    md:pr-[50px]
`;

export const StyledProfileInfoContainer = tw.div`
    relative
    flex
    w-full
    h-full
    items-center
    justify-center
    md:justify-start
`;