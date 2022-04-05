import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { IconButton, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './style.css'
const Appbar = () => {
    return (
        <div className='appbar'>
            <div className="appbar_container">
                <div className="app_container">
                    <div className="app_left"><PermIdentityIcon className='left_icons' /></div>
                    <div className="app_left_heading">Dione Cooper</div>
                </div>

                <div className="app_right_container">
                    <div className="search">
                        <div className="app_right">
                            <SearchIcon className='search_icon' />
                            <input type="text" placeholder='search' className='input_search_bar' />
                        </div>
                    </div>
                    <div className="first_icon">
                        <Fab color="primary" className='add_icon'>
                            <AddIcon />
                        </Fab>
                    </div>
                    <IconButton aria-label="show 0 new notifications" color="inherit" className="second_icon">
                        <Badge badgeContent={1} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>


                </div>
            </div>
        </div>
    )
}

export default Appbar;