import tw from 'tailwind-styled-components';

export const StyledPageContainer = tw.div`
    relative
    flex
    flex-col
    h-[100vh]
    w-[100vw]
    bg-black
`;

export const StyledPageContent = tw.div`    
    relative
    flex
    flex-col
    items-center
    bg-gray-200
    md:fixed
    md:top-0
    md:left-0
    md:right-0
    md:bottom-0
`;

export const Item = tw.span<{$primary: string}>`
    relative    
    flex
    text-black
    md:absolute
    ${(p) => (p.$primary)}
    transform
    transition-all
    duration-500
`;
