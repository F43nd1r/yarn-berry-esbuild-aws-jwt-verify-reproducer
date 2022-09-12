import {CognitoJwtVerifier} from "aws-jwt-verify";

CognitoJwtVerifier.create({
    userPoolId: "userPoolId",
    clientId: "clientId",
    groups: "group",
    tokenUse: "id",
})