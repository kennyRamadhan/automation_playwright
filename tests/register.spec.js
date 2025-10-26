import { test, expect } from '../fixtures/baseFixtures';

test.describe('Register tests', () => {


    test('Register User', async ({loginPage})=>{


        await loginPage.goto();
        await loginPage.login('test', 'test@email.com');
    

    })



});