import { useDispatch, useSelector } from "react-redux";
import { setPage, prevPage, nextPage } from "../features/pokemon/pokemonSlice";
import type { AppDispatch, RootState } from "../stores/store";
import enums from "../enums/enums";

import type { PaginationProps } from "../types/PokemonListTypes";

const Pagination = ({ page, totalPages, pokemonCount, error }: PaginationProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const tab = useSelector((state: RootState) => state.tabs.tab);
    const getPaginationGroup = () => {
        let pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (page <= 4) {
                pages = [1, 2, 3, 4, 5, '...', totalPages];
            } else if (page >= totalPages - 3) {
                pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', page - 1, page, page + 1, '...', totalPages];
            }
        }
        return pages;
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {
                tab == enums.tabs.PAGE_CONTROL ? (
                    <div>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button
                                onClick={() => dispatch(prevPage())}
                                disabled={page === 1}
                                className="flex items-center justify-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50 transition-colors"
                            >
                                <span className="mr-1">&lt;</span> {enums.buttons.PREVIOUS}
                            </button>

                            {getPaginationGroup().map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => typeof item === 'number' && dispatch(setPage(item))}
                                    disabled={item === '...'}
                                    className={`flex items-center justify-center min-w-[32px] h-8 px-2 rounded-md text-sm font-medium transition-colors ${page === item
                                        ? 'bg-[#111827] text-white shadow-md'
                                        : item === '...'
                                            ? 'bg-transparent text-gray-500 cursor-default'
                                            : 'bg-white text-gray-700 shadow-sm hover:bg-gray-50'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}

                            <button
                                onClick={() => dispatch(nextPage())}
                                disabled={page === totalPages}
                                className="flex items-center justify-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:text-gray-900 disabled:opacity-50 transition-colors"
                            >
                                {enums.buttons.NEXT} <span className="ml-1">&gt;</span>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 font-medium">
                            Page {page} of {totalPages} ({pokemonCount} Pokemon shown)
                        </p>
                    </div>


                ) : error ? <button
                    onClick={() => dispatch(prevPage())}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Retry
                </button> : <button onClick={() => dispatch(nextPage())} className="text-sm font-medium px-4 py-2 rounded-md transition-colors bg-[#111827] text-white">{enums.buttons.LOADMORE}</button>
            }
        </div>
    );
};

export default Pagination;
