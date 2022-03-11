import { Header } from '../version2/Header/Header';
import * as React from 'react';
import './index.css';
import { Contact } from '../version2/Contact/Contact';
import { Profile } from '../version2/Profile/Profile';
import { Skills } from '../version2/Skills/Skills';
import { Columns } from '../version2/Columns/Columns';
import { WorkExperience } from '../version2/WorkExperience/WorkExperience';
import { DataProvider } from './_DataContext/DataContext';

export const Version2 = () => (
    <DataProvider>
        <header>
            <Columns col1={<div />} col2={<Header />} />
        </header>

        <Contact />

        <Columns
            col1={<Skills />}
            col2={
                <>
                    <Profile />
                    <WorkExperience />
                </>
            }
        />
    </DataProvider>
);
