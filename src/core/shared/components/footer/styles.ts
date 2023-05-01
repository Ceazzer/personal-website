import tw from "tailwind-styled-components";

export const StyledFooterContainer = tw.div`
    relative
    flex
    w-full
    h-24
    justify-between
    items-center
    bg-[#212529]
    text-gray-300
    px-10
    md:rounded-b-lg
`;

export const StyledSocialMediaContainer = tw.div`
    relative
    flex
    h-full
    w-[280px]
    items-center
    justify-between
`;

export const StyledCopyRightcontainer = tw.div`
    relative
    flex
    h-full
    w-[250px]
    items-center
    justify-end
`;