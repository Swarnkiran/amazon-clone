import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { logo } from '../../assets/assets-20240716T085031Z-001/assets';

const Header = () => {
    return (
        <div className='shadow sticky z-50 top-0'>
            <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
                <img className='w-24 mt-2'src={logo} alt="logo"/>
            </div>
            <div>
                <LocationOnIcon/>
                <p>Deliver to <span>india</span></p>
            </div>
        </div>
        
    );
}

export default Header;
