// note:  module 10 examples use function declarations, not constant assignations to anonymous functions.

import { useEffect, useState } from 'react';

/**
currentPage: The current active page number.
totalPages: The total number of pages calculated based on totalItems and itemsPerPage.
startIndex: The starting index of items for the current page (0-based).
endIndex: The ending index of items for the current page (0-based).
itemsOnCurrentPage: The actual number of items on the current page (useful for the last page).
setPage(pageNumber): A function to jump to a specific page number.
nextPage(): A function to go to the next page.
prevPage(): A function to go to the previous page.
canNextPage: Boolean indicating if there is a next page. // I think 'boolean' is the intent, not the Boolean constructor.
canPrevPage: Boolean indicating if there is a previous page.
 */
interface PaginationReturnValues {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  itemsOnCurrentPage: number;
  setPage(pageNumber: number): void;
  nextPage(): void;
  prevPage(): void;
  canNextPage(): boolean; // note:  see https://www.tutorialspoint.com/typescript/typescript_boolean.htm
  canPrevPage(): boolean;
}

/**
 * Objective: Create a hook to manage pagination logic for a list of items.
 * @param totalItems Total number of items to be paginated.
 * @param itemsPerPage Number of items to display per page.  Default 10.
 * @param initialPage Page to start on.  Default 1.
 */

const usePagination = (totalItems: number, itemsPerPage: number = 10, initialPage: number = 1): PaginationReturnValues => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1); // if 0 items, still 1 page.
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = Math.min((currentPage * itemsPerPage) - 1, totalItems - 1);
  let itemsOnCurrentPage = (currentPage * itemsPerPage) > totalItems ? totalItems % itemsPerPage : itemsPerPage;

  const setPage = (pageNumber: number): void => {
    if (!(pageNumber < 1) && !(pageNumber > totalPages)) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev = 1);
    }
  };

  // with Boolean, const bfalse = new Boolean(false); bfalse.valueOf() = false?
  const canNextPage = (): boolean => {
    return (currentPage < totalPages);
  };

  const canPrevPage = (): boolean => {
    return (currentPage > 1);
  };

  // Test later to see if there's issues with method invocation.  Note must be invoked within a React Functional Component.
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage
  }
  /**
  
  Ensure currentPage does not go below 1 or above totalPages.
  
  Create a component that uses your usePagination hook.
  Simulate a list of items (e.g., an array of 100 numbers or strings).
  Display the current page number, total pages, and the slice of items for the current page.
  Include buttons for “Previous”, “Next”, and jumping to specific page numbers (if you wish to demonstrate setPage more thoroughly).
  Disable Previous/Next buttons when canPrevPage or canNextPage is false.
   */

  // setPage(pageNumber: number): void;
  // nextPage(pageNumber: number): void;
  // canNextPage(): Boolean; // note:  see https://www.tutorialspoint.com/typescript/typescript_boolean.htm
  // canPrevPage(): Boolean;} 
}




