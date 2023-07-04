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
    shadow-[0_0_20px_22px_rgba(20,20,20,1)]
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
    shadow-[0_0_20px_22px_rgba(20,20,20,1)]
`;
