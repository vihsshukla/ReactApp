import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { Amplify } from 'aws-amplify';
import { defaultStorage, CookieStorage, sessionStorage } from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

export const Validator = () => {
    const handleValidation = async () => {
        try {
            const { username, userId, signInDetails } = await getCurrentUser();
            console.log("Username: ", username);
            console.log("UserID: ", userId);
            console.log("Sign in details: ", signInDetails);
        } catch (err) {
            console.log("Error while validating user: ", err);
        }
    }

    const handleAuthSession = async () => {
        try {
            const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
            console.log("ID: ", idToken);
            // const Token = accessToken.toString();
            localStorage.setItem("token", accessToken);
        } catch (err) {
            console.log("Error while authenticating user session: ", err);
        }
    }

    return (
        <>
            <button onClick={handleAuthSession}>Click here to validate</button>
        </>
    );
}