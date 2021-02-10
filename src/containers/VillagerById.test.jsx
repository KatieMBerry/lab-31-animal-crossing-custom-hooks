import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagerByIdResponse from '../fixtures/villagerByIdResponse.json'
import VillagerById from './VillagerById';

const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e462', (req, res, ctx) => {
        return res(ctx.json(villagerByIdResponse));
    })
);

describe('VillagerById container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches and displays a villagers details', async () => {
        render(<VillagerById match={{ params: { _id: '5f5fb4bbbfd05c2aed82e462' } }} />);

        screen.getByText('Loading');
        const div = await screen.findByTestId('villagerDetail');

        return waitFor(() => {
            expect(div).not.toBeEmptyDOMElement();
        });

        // await screen.findByText('Agnes');
        // await screen.findByText('You reap what you sow.');
        // await screen.findByText('Cramming for tests');

        // return waitFor(() => {
        //     // screen.getByText('Agnes');
        //     screen.getByText('You reap what you sow.');
        //     screen.getByText('Cramming for tests');
        // });
    });
});
