import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className='container-fluid' >
            <h1>Travis Umbel</h1>
            <ul className='nav nav-tabs nav-justified'>
                <li className='nav-item'>
                    <Link
                        to='/'
                        className = {currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                    About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link 
                        to='/Portfolio'
                        className = {currentPage ==='/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    Portfolio 
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link
                        to='/Contact'
                        className = {currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact Me
                    </Link>
                </li>
                <li className ='nav-item'>
                    <Link 
                        to='/Resume'
                        className = {currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >
                    Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavTabs;