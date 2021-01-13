import "bulma/css/bulma.css";
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="dropdown navigation">
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
                Docs
            </a>
            <Link></Link>
            <div class="navbar-dropdown">
                <Link to='/'>
                    <a class="navbar-item">
                    Home page
                    </a>
                </Link>
                <Link to='/all_outlines'>
                    <a class="navbar-item">
                    All Course Outlines
                    </a>
                </Link>
                <Link to='/create_outline'>
                    <a class="navbar-item">
                    Create new Course Outline
                    </a>
                </Link>
            </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Nav;