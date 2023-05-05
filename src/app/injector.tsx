'use client';

import { ResumeDatasourcedImpl } from "@/core/feature/resume/data/datasource/resumeDatasourceImpl";
import { ResumeRepoImpl } from "@/core/feature/resume/data/repositories/resumeRepoImpl";
import { AvatarBloc } from "@/core/feature/resume/presentation/state/avatar";
import { GetAvatar } from "@/core/feature/resume/presentation/usecase/getAvatar";
import { createContext, useContext } from "react";

// resume setup
const resumeDatasource =  ResumeDatasourcedImpl.New(); 
const resumeRepo = ResumeRepoImpl.New(resumeDatasource);
const avatarState = AvatarBloc.New();

console.log('\nresumeRepo: ', GetAvatar.New(resumeRepo, avatarState), "\n");

const resumeUsecases = {
    getAvatar: GetAvatar.New(resumeRepo, avatarState)
};

const resumeState = {
    avatar: avatarState
};

export const resumeContext = {
    usecases: resumeUsecases,
    state: resumeState
};

interface Features {
    resume: {
        usecases: {
            getAvatar: GetAvatar
        },
        state: {
            avatar: AvatarBloc
        }
    }
}

export const FeaturesContext  = createContext<Features>({
    resume: {
        usecases: resumeUsecases,
        state: resumeState
    }
});

export const features = () => useContext(FeaturesContext);

export function FeatureProvider({ children }) {
  return (
    <FeaturesContext.Provider value={{resume: resumeContext}}>
      {children}
    </FeaturesContext.Provider>
  );
}
