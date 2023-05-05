import tw from "tailwind-styled-components";

export const StyledAvatarContainer = tw.div`
    relative
    flex
    justify-center
    items-center
    w-[200px]
    h-[200px]
    rounded-full
    ring-[15px]
    bg-black
    ring-gray-500
    pt-4
    overflow-clip
    md:hidden
`;

export const StyledAvatarContainer2 = tw.div`
    relative
    hidden
    justify-center
    items-center
    w-[300px]
    h-[300px]
    rounded-full
    ring-[15px]
    bg-black
    ring-gray-500
    pt-4
    overflow-clip
    md:flex
`;
