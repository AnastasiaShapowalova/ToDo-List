import { BsFillWalletFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { CgCalendarToday } from 'react-icons/cg'
import { FiFlag } from 'react-icons/fi'

//transferred to the creation of main lists
const MENU = [
  {
    icon: <FiFlag className="icon" />,
    name: 'Flag',
    count: 0,
    active: false,
    className: 'flag_active'
  },
  {
    icon: <BsFillWalletFill className="icon" />,
    name: 'All',
    count: 1,
    active: false,
    className: 'all_active'
  },
  {
    icon: <CgCalendarToday className="icon" />,
    name: 'Sheduled',
    count: 1,
    active: false,
    className: 'sheduled_active'
  },
  {
    icon: <BsFillCalendarDateFill className="icon" />,
    name: 'Today',
    count: 7,
    active: true,
    className: 'today_active'
  }
]

export default MENU
