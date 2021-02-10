import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerDetail from './VillagerDetail';

describe('VillagerDetail component', () => {
    afterEach(() => cleanup());
    it('renders VillagerDetail', () => {
        const { asFragment } = render(<VillagerDetail />);
        expect(asFragment()).toMatchSnapshot();
    });
});
