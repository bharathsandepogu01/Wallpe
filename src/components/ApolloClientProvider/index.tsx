import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {BASE_URL} from '@constants/apolloGraphQL';
import IApolloClientProviderProps from './types';

// Initializing apollo client
const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getImages: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            merge(existing, incoming) {
              // Slicing is necessary because the existing data is
              // immutable, and frozen in development.
              const merged = existing ? existing.slice(0) : [];

              for (let i = 0; i < incoming.length; ++i) {
                merged.push(incoming[i]);
              }

              return merged;
            },
          },
          getImagesBySearch: {
            keyArgs: args => {
              return args?.input?.search;
            },

            merge(existing, incoming, args) {
              const merged = existing ? existing.slice(0) : [];

              for (let i = 0; i < incoming.length; ++i) {
                merged.push(incoming[i]);
              }

              return merged;
            },
          },
        },
      },
    },
  }),
});

export default function ApolloClientProvider(
  props: IApolloClientProviderProps,
): JSX.Element {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
