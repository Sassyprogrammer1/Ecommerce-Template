const awsmobile = {
<<<<<<< HEAD
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
=======
    "aws_proect_region":project_region,
    "aws_cognito_identity_pool_id":cognito_identity_pool_id,
    "aws_cognito_region":cognito_region,
    "aws_user_pools_id":user_pools_id,
    "aws_user_pools_web_client_id":user_pools_web_client_id,
    "oauth": {},
    "aws_cloud_logic_custom": [
        {
            "name": "productsApi",
            "endpoint": "https://tt8un1hqhc.execute-api.us-east-1.amazonaws.com/staging",
            "region": "us-east-1"
        }
    ],
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "Product-staging",
            "region": "us-east-1"
        }
    ]
};
>>>>>>> 2f93e898338789c014bcdc8c26267c500a084953


export default awsmobile; 