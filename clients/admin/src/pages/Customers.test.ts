import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import Customers from './Customers.svelte';
import { setupLocales } from '../i18n';
import { MOCKED_CUSTOMER_DISPLAY_NAME } from '../lib/queries/customers';

describe('<Customers>', function () {
    before(() => {
        setupLocales();
    });

    it('renders customers page', function (done) {
        const { getByText } = render(Customers);

        setTimeout(() => {
            const customerName = getByText(MOCKED_CUSTOMER_DISPLAY_NAME);
            expect(document.body.contains(customerName));
            done();
        }, 200);
    });
});
