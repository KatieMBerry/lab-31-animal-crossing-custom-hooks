import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagerApiResponse from '../fixtures/villagerApi.json';
import { MemoryRouter } from 'react-router-dom';
import VillagersPage from './VillagersPage';

const server = setupServer(
    rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
        return res(ctx.json(villagerApiResponse));
    })
);

describe('VillagersPage container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches and displays a list of villagers', async () => {
        render(
            <MemoryRouter>
                <VillagersPage />
            </MemoryRouter>
        );

        screen.getByAltText('loading');

        const listOfVillagers = await screen.findByTestId('villagers');

        return waitFor(() => {
            expect(listOfVillagers).not.toBeEmptyDOMElement();
        });
    });
});
