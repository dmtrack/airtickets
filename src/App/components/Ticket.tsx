import { ITicket } from '../interfaces/ITicket';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '../hook/redux';
import Box from '@mui/material/Box';
import logo from '../assets/plane.webp';
import turkish from '../assets/turkish.webp';
import FlightLand from '@mui/icons-material/FlightLand';
import { dateFormat } from '../utils/date';

interface ITicketProps {
    ticket: ITicket;
}

function Message({ ticket }: ITicketProps) {
    let {
        carrier,
        origin,
        origin_name,
        price,
        stops,
        departure_date,
        departure_time,
        destination,
        arrival_date,
        arrival_time,
        destination_name,
    } = ticket;
    const depDate = dateFormat(departure_date);
    const arrDate = dateFormat(arrival_date);

    return (
        <div>
            <Box className='w-[700px] h-[200px] shadow-md rounded-md bg-white flex'>
                <Box className='w-1/3 border-r'>
                    <Box className='m-5 flex flex-col h-[150px] justify-between '>
                        <img
                            className='h-[60px] w-100  object-cover object-center self-center'
                            src={turkish}
                            alt='logo image'
                        />
                        <button
                            className='bg-[rgba(260,120,50)] h-[70px] w-full rounded-md pointer'
                            type='submit'>
                            <div className='text-white text-xl font-inter font-medium mr-6 ml-6  '>
                                Купить за {ticket.price}
                            </div>
                        </button>
                    </Box>
                </Box>
                <Box className='flex flex-auto m-5'>
                    <Box className='w-full justify-center text-center '>
                        <div className='text-4xl text-gray-600 text-start pb-3'>
                            {ticket.arrival_time}
                        </div>
                        <div className='text-sm text-gray-600 text-start font-bold pb-1'>
                            {ticket.origin}, {ticket.origin_name}
                        </div>
                        <div className='text-sm text-gray-400 text-start'>
                            {arrDate}
                        </div>
                    </Box>
                    <Box className='w-full  flex flex-col justify-start  text-start text-gray-400 pt-1'>
                        {ticket.stops === 1 ? (
                            <div className='tracking-tighter'>
                                {ticket.stops} ПЕРЕСАДКА
                            </div>
                        ) : ticket.stops === 0 ? (
                            <div className='tracking-tighter'>
                                БЕЗ ПЕРЕСАДОК
                            </div>
                        ) : (
                            <div className='tracking-tighter'>
                                {ticket.stops} ПЕРЕСАДКИ
                            </div>
                        )}

                        <Box className='flex justify-center'>
                            <div className='w-3/4 h-3 border-b'></div>
                            <div className='pl-2'>
                                <FlightLand />
                            </div>
                        </Box>
                    </Box>
                    <Box className='w-full justify-center text-end pl-2 '>
                        <div className='text-4xl text-gray-600 text-start pb-3'>
                            {departure_time}
                        </div>
                        <div className='text-sm text-gray-600 text-start font-bold pb-1'>
                            {ticket.destination}, {ticket.destination_name}
                        </div>
                        <div className='text-sm text-gray-400 text-start'>
                            {depDate}
                        </div>
                    </Box>
                </Box>
            </Box>{' '}
        </div>
    );
}

export default Message;
