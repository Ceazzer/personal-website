import tw from 'tailwind-styled-components';

export const HomeTemplateContainer = tw.div`
    relative
    flex
    flex-row
    min-w-full
    min-h-full
    bg-gray-100
`;

export const HomeTemplateContent = tw.div`
    relative
    bg-gray-300
    min-w-[250]
    h-full
`;

export const HomeTemplateSidebar = tw.h1`
    relative
    bg-gray-500
    w-full
    h-full
`;