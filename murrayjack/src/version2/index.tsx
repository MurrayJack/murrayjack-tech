import { Header } from './_Components/Header';
import React from 'react';
import { Contact } from './_Components/Contact';
import { Profile } from './_Components/Profile';
import { Skills } from './_Components/Skills';
import { Columns } from './_Components/Columns';
import { WorkExperience } from './_Components/WorkExperience';
import { DataProvider } from './_DataContext/DataContext';
import { Image } from './_Components/Image';

import './index.css';

export const Version2 = () => (
    <DataProvider>
        <header>
            <Columns
                col1={
                    <>
                        <Image />
                    </>
                }
                col2={
                    <>
                        <Header />
                    </>
                }
            />
        </header>

        <Columns
            col1={
                <>
                    <Contact />
                    <Skills />
                </>
            }
            col2={
                <>
                    <Profile />
                    <WorkExperience />
                </>
            }
        />
    </DataProvider>
);
