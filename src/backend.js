// (C) 2022-2023 GoodData Corporation

import { withCaching, RecommendedCachingConfiguration } from "@gooddata/sdk-backend-base";
import backendFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-tiger";

// Configure backend connection with context deferred auth provider.
// See our docs on complete auth setup:
// https://sdk.gooddata.com/gooddata-ui/docs/cloudnative_authentication.html
export const backend = withCaching(
    backendFactory().withAuthentication(new ContextDeferredAuthProvider()),
    RecommendedCachingConfiguration,
);
