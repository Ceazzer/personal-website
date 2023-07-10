import tw from 'tailwind-styled-components';

export const HomeTemplateContainer = tw.div`
    relative
    flex
    flex-row
    justify-center
    items-center
    min-w-full
    min-h-[95vh]
    bg-gray-100
`;

export const BottomSeparator = tw.div`
    absolute
    bottom-0
    w-full
    min-h-[80px]
    bg-slate-500
`;

// TODO: Will need to add a png of me