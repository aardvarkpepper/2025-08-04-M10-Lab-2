/**
 * https://www.typescriptlang.org/docs/handbook/2/generics.html#variance-annotations
 */

import { useState, useEffect } from 'react';

interface FetchObject<T> {
  data: T;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(urlString: string, RequestInit ?: object): FetchObject<T> => {


  return {data: 2 as any, loading: true, error: null};
}