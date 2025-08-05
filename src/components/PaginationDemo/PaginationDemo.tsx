import { usePagination } from '../../customHooks/usePagination.ts';
interface PaginationDemoProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage: number;
}

export const PaginationDemo: React.FunctionComponent<PaginationDemoProps> = ({totalItems, itemsPerPage, initialPage}: PaginationDemoProps): React.ReactNode => {
  const data = {
    totalItems,
    itemsPerPage,
    initialPage,
  }

  /**
   * For this and 'generateArray', for API would use dataArray.slice(startIndex, endIndex) (or whatever the syntax is) instead of a for loop to generate the array to be rendered.
   */
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

  return (
    <div className='pagination'>
      <h2>Pagination Demo</h2>
      <div>
        Using data totalItems = {data.totalItems}, itemsPerPage = {data.itemsPerPage}, initialPage = {data.initialPage};
      </div>
      <br />
      <div>
        <div>Items per page: {data.itemsPerPage}</div>
        <div>Total items: {data.totalItems}</div>
      </div>
      <ul>
        {(paginationData.startIndex >= 0 && paginationData.endIndex >= 0) ? (generateArray() as any).map((element: any) => <div key={element.description}>{element.index}. {element.description}</div>) : null}
      </ul>
      <div className='flexh jc-spacebetween'>
        <button onClick={paginationData.prevPage} disabled={!paginationData.canPrevPage()}>Previous</button>
        <div>Page {paginationData.currentPage} of {paginationData.totalPages}</div>
        <button onClick={paginationData.nextPage} disabled={!paginationData.canNextPage()}>Next</button>
      </div>
      <div>
        {(data.totalItems > 0 && data.itemsPerPage > 0) ? `Showing items ${paginationData.startIndex + 1} - ${paginationData.endIndex + 1} (Total on this page: ${paginationData.itemsOnCurrentPage})` : null}
      </div>
      <div>
        {(generatePagesArray() as any).map((element: any) => <button key={`button-page-${element}`} onClick={() => paginationData.setPage(element)}>{element}</button>)}
      </div>

    </div>
  )
}