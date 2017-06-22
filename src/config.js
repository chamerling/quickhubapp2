module.exports = {
  oauth: {
    clientId: process.env.GITHUB_CLIENT_ID || '9620dd52982ce6179ace',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'b896f594d55159562fe8e5cabb88472968fb01a0',
    authorizationUrl: 'http://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    useBasicAuthorizationHeader: false,
    // don't touch me
    redirectUri: 'http://localhost'
  }
};