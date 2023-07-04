'use client';


import { createContext, useContext } from "react";

// // resume setup
// const resumeDatasource =  ResumeDatasourcedImpl.New(); 
// const resumeRepo = ResumeRepoImpl.New(resumeDatasource);
// const avatarState = AvatarBloc.New();

// console.log('\nresumeRepo: ', GetAvatar.New(resumeRepo, avatarState), "\n");

// const resumeUsecases = {
//     getAvatar: GetAvatar.New(resumeRepo, avatarState)
// };

// const resumeState = {
//     avatar: avatarState
// };

// export const resumeContext = {
//     usecases: resumeUsecases,
//     state: resumeState
// };

// interface Features {
//     resume: {
//         usecases: {
//             getAvatar: GetAvatar
//         },
//         state: {
//             avatar: AvatarBloc
//         }
//     }
// }


// export const useFeatures = () => useContext(FeaturesContext);

export const FeaturesContext  = createContext<any>({});

export function FeatureProvider({ children }) {
  return (
    <FeaturesContext.Provider value={FeaturesContext}>
      {children}
    </FeaturesContext.Provider>
  );
}
