import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import './styles.css'
const AppBar_2 = () => {
    return (
        <div className='appbar_2'>
            <div className="appbar_2_container">
                <div className="app_2_container">
                    <div className="app_2_left_heading">Patient List</div>
                    <div className="app_2_left"><ChevronRightIcon className='app_2_left_icons' /></div>
                    <div className="app_2_dianecooper">Diane Cooper</div>
                </div>
                <div className="app_2_right_container">
                    <div className="print"><PrintIcon /></div>
                    <div className="edit">
                        <Button startIcon={<EditIcon />} className="btn">Edit Patient </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBar_2;