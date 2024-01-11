import * as LoginServices from '../../services/loginService';

/**
 * Example on how to test a service...
 */

describe('LoginServices', () => {
    
    afterAll(() => {
        jest.clearAllMocks();
    });
    
    describe('logIn service', () => {
        it('happy path: should get authToken at performing the log in operation', async () => {
            
            const expectedResult = {
                authToken: 'ANY_AUTH_TOKEN',
                user: 'username',
            }

            const response = await LoginServices.logIn({ username: 'username', password: 'password'});
            
            expect(response).toMatchObject({
                authToken: expect.any(String),
                user: expect.stringContaining(expectedResult.user)
            });
        });

        it('sad path: should fail when performing log in operation', async () => {
            const customError = new Error('API is down'); 
            
            Promise.resolve = jest.fn().mockResolvedValue(customError);
            
            await LoginServices.logIn({ username: 'username', password: 'password'}).catch((error) => {
                expect(error).toBe(customError);
            })
            
        });
    });
});