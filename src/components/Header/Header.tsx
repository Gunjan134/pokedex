import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/images/pokemon-logo.jpg';
import user from '../../assets/images/user-logo.png';

export default function Header() {
  return (
    <AppBar position='sticky' className='bg-white top-0'>
      <Toolbar variant='dense' className='justify-between h-14 px-12 xl:w-1440'>
        <a href='/' className='h-[inherit]'>
          <img src={logo} alt='Go to home' className='w-24 h-14' />
        </a>
        <div className='flex'>
          <Avatar alt='username' src={user} className='h-8 w-8' />
          <div className='flex flex-col justify-center ml-2'>
            <div className='text-blue-600 text-sm font-bold'>John Doe</div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
