import { BASE_URL, token } from "../../config.js";
import {toast} from "react-toastify";
import { formatDate } from "../../utils/formatDate";
import HashLoader from 'react-spinners/HashLoader.js';

const SidePanel = ({doctorId, ticketPrice, timeSlots }) => {
    
    const bookingHandler = async()=>{
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'post',
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            
            const data = await res.json()
            
            {/*if(!res.ok){
                throw new Error(data.message + 'Please try again')
            }*/}
            
            
                window.location.href = "/checkout-success"
            
            
        }
        catch (err) {
            toast.error(err.message)
        }
    }

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between">
            <p className="text_para mt-0 font-semibold">Ticket Price</p>
            <span className="text-[16px] leading-7 lg: text-[22px] lg: leading-8 Otext-headingColor font-bold">
                500 BDT
            </span>
        </div>
        <div className="mt-[30px]">
            <p className="text_para mt-0 font-semibold text-headingColor">
                Available Time Slots:
            </p>
            <ul className="mt-3">
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        Sunday
                    </p>
                    <p className="text-[15px] leading-6 [text-textColor font-semibold">
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        Monday
                    </p>
                    <p className="text-[15px] leading-6 [text-textColor font-semibold">
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        Tuesday
                    </p>
                    <p className="text-[15px] leading-6 [text-textColor font-semibold">
                        4:00 PM - 9:30 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        Wednesday
                    </p>
                    <p className="text-[15px] leading-6 [text-textColor font-semibold">
                        4:00 PM - 9:30 PM
                    </p>
                </li>
            </ul>
        </div>
        <button
                type="button"
                onClick={bookingHandler}
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
                Book Appointment
        </button>
    </div>
  );
};

export default SidePanel;