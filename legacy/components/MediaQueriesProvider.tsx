import React, { useState, createContext, useContext, useEffect } from "react";

export type QueryDict<T = string> = Record<string, T>;
export type QueryMatchDict = QueryDict<boolean>;

const defaultValue: QueryMatchDict = {};

const MediaQueriesContext = createContext(defaultValue);

interface ProviderProps {
  queries: QueryDict;
}

const MediaQueriesProvider: React.FC<ProviderProps> = ({ children, queries }) => {
  const [queryMatch, setQueryMatch] = useState<QueryMatchDict>({});

  useEffect(() => {
    const mediaQueryLists: QueryDict<any> = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc: QueryMatchDict, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
        return acc;
      }, {});
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches: QueryMatchDict = {};
      keys.forEach((media) => {
        if (typeof queries[media] === "string") {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof queries[media] === "string") {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === "string") {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return <MediaQueriesContext.Provider value={queryMatch}>{children}</MediaQueriesContext.Provider>;
};

function useMediaQueries() {
  const context = useContext(MediaQueriesContext);
  if (context === defaultValue) {
    throw new Error("useMediaQueries must be used within MediaQueriesProvider");
  }
  return context;
}
export { useMediaQueries, MediaQueriesProvider };
