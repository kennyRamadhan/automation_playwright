import { test as base } from '@playwright/test';

import { LoginPage } from '../page/LoginPage';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
      }

});

    export const expect = base.expect;