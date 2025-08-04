import { useState } from 'react';
import { usePagination } from '../../customHooks/usePagination.ts';

// export interface PaginationReturnValues {
//   currentPage: number;
//   totalPages: number;
//   startIndex: number;
//   endIndex: number;
//   itemsOnCurrentPage: number;
//   setPage(pageNumber: number): void;
//   nextPage(): void;
//   prevPage(): void;
//   canNextPage(): boolean; // note:  see https://www.tutorialspoint.com/typescript/typescript_boolean.htm
//   canPrevPage(): boolean;
// }

//export const usePagination = (totalItems: number, itemsPerPage: number = 10, initialPage: number = 1): PaginationReturnValues => {

export const PaginationDemo: React.FunctionComponent = (): React.ReactNode => {
  const data = {
    totalItems: 43,
    itemsPerPage: 10,
    initialPage: 2,
  }
  const generatePagesArray = (dataInput = data) => {
    const returnArray = [];
    const pageCount = Math.max(1, Math.ceil(dataInput.totalItems / dataInput.itemsPerPage))
    for (let i = 0; i < pageCount; i++) {
      returnArray.push(i+1);
    }
    return returnArray;
  }


  const paginationData = usePagination(data.totalItems, data.itemsPerPage, data.initialPage);
  const generateArray = (start = paginationData.startIndex, end = paginationData.endIndex) => {
    const returnArray = []
    for (let i = start; i <= end; i++) {
      returnArray.push({ index: `${i + 1 - start}`, description: `Item ${i + 1}` });
    }
    return returnArray;
  }

  // Instead of 'for' loop, would run array.slice(startIndex, endIndex).map (or whatever the syntax on .slice is) on data.
  return (
    <div>
      <h2>Pagination Demo</h2>
      <div>
        Using data totalItems = 211, itemsPerPage = 10, initialPage = 2
      </div>
      <br />
      <div>
        <div>Items per page: {data.itemsPerPage}</div>
        <div>Total items: {data.totalItems}</div>
      </div>
      <ul>
        {(generateArray() as any).map((element: any) => <div key={element.description}>{element.index}. {element.description}</div>)}
      </ul>
      <div className='flexh jc-spacebetween'>
        <button onClick={paginationData.prevPage}>Previous</button>
        <div>Page {paginationData.currentPage} of {paginationData.totalPages}</div>
        <button onClick={paginationData.nextPage}>Next</button>
      </div>
      <div>
        Showing items {paginationData.startIndex + 1} - {paginationData.endIndex + 1} (Total on this page: {paginationData.itemsOnCurrentPage})
      </div>
      <div>
        {(generatePagesArray() as any).map((element: any) => <button key={`button-page-${element}`} onClick={() => paginationData.setPage(element)}>{element}</button>)}
      </div>

    </div>
  )
}