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

interface IStyledPageItemProps {
    $position: 'top' | 'left' | 'right' | 'bottom';
}

export const Item = tw.span<IStyledPageItemProps>`
    relative    
    flex
    text-black
    md:absolute
    ${p => p.$position === 'top' ? `md:top-[45px]` : ``}
    ${p => p.$position === 'right' ? `md:right-[45px] md:top-1/2` : ``}
    ${p => p.$position === 'left' ? `md:left-[45px] md:top-1/2` : ``}
    ${p => p.$position === 'bottom' ? `md:bottom-[45px]` : ``}
`;
