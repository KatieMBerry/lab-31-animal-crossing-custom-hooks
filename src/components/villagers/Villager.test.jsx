import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Villager from './Villager';

describe('Villager component', () => {
    afterEach(() => cleanup());
    it('renders Villager', () => {
        const { asFragment } = render(<Villager
            name='Agnes'
            image='https://vignette.wikia.nocookie.net/animalcrossing/images/4/42/Agnes_NH.png/revision/latest?cb=20200804230432'
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
