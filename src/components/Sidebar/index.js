import PanoramaVerticalIcon from '@material-ui/icons/PanoramaVertical';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MessageIcon from '@material-ui/icons/Message';
import MenuIcon from '@material-ui/icons/Menu';
import PaymentIcon from '@material-ui/icons/Payment';
import TuneIcon from '@material-ui/icons/Tune';
import './style.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_container">
        <div className="first">
          <div className="icon"><PanoramaVerticalIcon className='icons' /></div>
          <div className="content">
            <h1 className='heading'>Zendenta</h1>
            <p className='second_heading'>cobut gigi tanpa sakit</p>
          </div>
        </div>
        <div className="menu_icon"><MenuIcon className='menu'></MenuIcon></div>
      </div>
      <div className="sidebar_list">
        <div className="over_container">
          <div className="over_icon"><NotListedLocationIcon /></div>
          <div className="over">Overview</div>
        </div>
        <div className="over_container">
          <div className="over_icon"><CalendarTodayIcon /></div>
          <div className="over">Calender</div>
        </div>
        <div className="over_container">
          <div className="over_icon"><PermIdentityIcon /></div>
          <div className="over">Patient List</div>
        </div>
        <div className="over_container">
          <div className="over_icon"><MessageIcon /></div>
          <div className="over">Messages</div>
        </div>
        <div className="over_container">
          <div className="over_icon"><PaymentIcon /></div>
          <div className="over">Payment Info</div>
        </div>
        <div className="over_container">
          <div className="over_icon"><TuneIcon /></div>
          <div className="over">Settings</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar