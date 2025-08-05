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
export interface PaginationReturnValues {
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
 * @returns {currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, setPage, nextPage, prevPage, canNextPage, canPrevPage} see comments in interface 'PaginationReturnValues'
 */
export const usePagination = (totalItems: number, itemsPerPage: number = 10, initialPage: number = 1): PaginationReturnValues => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  /**
   * If itemsPerPage === 0, division by 0.  We won't be trying to render infinite pages that show nothing, so show default pages of 1.
   * Technically, could test for itemsPerPage = Infinity, but supposedly this loads from an API, so there should never be infinite items.
   * 
   * If totalItems === 0, we won't be trying to render zero pages, so show default pages of 1.
   * 
   * Otherwise, calculate max page with Math.ceil(totalitems / itemsPerPage).  Presumably input validation prevents negative inputs.
   */

  let maxPage;
  if (itemsPerPage === 0 || totalItems === 0) {
    maxPage = 1;
  } else {
    maxPage = Math.ceil(totalItems / itemsPerPage);
  }

  const totalPages = maxPage; // reassigning values to totalPages could be confusing, so calculation first, then one assignation.
  if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  /**
   * Below already handles if totalItems === 0 or if itemsPerPage === 0.
   * However, '-1' values need to be handled at receiving end.
   */
  let startIndex = Math.min((currentPage - 1) * itemsPerPage, totalItems - 1);
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
      setCurrentPage(prev => prev - 1);
    }
  };

  // with Boolean, const bfalse = new Boolean(false); bfalse.valueOf() = false?
  const canNextPage = (): boolean => {
    return (currentPage < totalPages);
  };

  const canPrevPage = (): boolean => {
    return (currentPage > 1);
  };

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
}