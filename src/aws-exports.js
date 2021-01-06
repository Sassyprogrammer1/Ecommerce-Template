const awsmobile = {
    "aws_proect_region":process.env.project_region,
    "aws_cognito_identity_pool_id":process.env.cognito_identity_pool_id,
    "aws_cognito_region":process.env.cognito_region,
    "aws_user_pools_id":process.env.user_pools_id,
    "aws_user_pools_web_client_id":process.env.user_pools_web_client_id,
    "oauth": {},
    "aws_appsync_graphqlEndpoint": "https://qg7llzyygraabddjgd3auazbki.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS"
    };


export default awsmobile; 