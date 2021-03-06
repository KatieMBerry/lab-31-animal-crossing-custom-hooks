import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerList from './VillagersList';

describe('VillagerList component', () => {
    afterEach(() => cleanup());
    it('renders VillagerList', () => {
        const { asFragment } = render(<VillagerList
            villagers={[]}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
