import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
    return (
        <header className="bg-yellow-500 uppercase">
            <Link to="/" className="tracking-widest">
                Fast React pizza.co
            </Link>
            <SearchOrder />
            <p>jonas</p>
        </header>
    )
}

export default Header
