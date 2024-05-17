/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

export const oktaConfig = {
    clientId: '0oagyo97lwrw96tCv5d7',
    issuer: 'https://dev-55492524.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}