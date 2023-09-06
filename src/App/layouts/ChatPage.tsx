import React, { useEffect } from 'react';
import SearchPanel from '../components/SearchPanel';
import TicketList from '../components/TicketsList';
import { useAppDispatch, useAppSelector } from '../hook/redux';
// import { setInbox } from '../store/actions/ticketsActions';

export const TicketsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.tickets);

    // useEffect(() => {
    //     dispatch(setInbox(username));
    // }, []);

    return (
        <>
            <div>
                {loading && <p className='text-center text-lg'>Loading...</p>}
                {error && (
                    <p className='pt-10 text-center text-lg text-red-500'>
                        {error}
                    </p>
                )}
                <div className='container mx-auto'>
                    <div className='relative overflow-x-auto '>
                        <div className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                            <div className='flex h-500px overflow-y-auto justify-center'>
                                <div className='flex-row'>
                                    {' '}
                                    <SearchPanel />
                                </div>
                                <div className='w-2'></div>

                                <div className='flex-row'>
                                    <TicketList />
                                </div>
                                <div className='w-4'></div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
