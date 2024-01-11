export type LoginCredentials = {
    username: string;
    password: string;
}

async function logIn(credentials: LoginCredentials): Promise<{ authToken: string, user: string }> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            authToken: 'MY_VALID_TOKEN', // <-- Mocked for assessment's purpose...
            user: credentials.username,
        };
    } catch(error) {
        throw new Error(`Error ${error}`);
    } finally {
        console.info('Logged in');
    }
}

async function logOut(): Promise<void> {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    } 
    catch(error) {
        console.error(error); 
    } finally {
        console.info('Logged out');
    }
}

export {
    logIn,
    logOut
};
