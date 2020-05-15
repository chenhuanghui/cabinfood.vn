import Link from "next/link";

// import "./Header.css";
import Menu from "./sections/Menu";

const Header = props => (
    // <Link href="">
    //     <div className="Header">{props.appT}</div>
    // </Link>
    
    <div id="header" className="border-bottom-0">
        <div id="header-wrap">
            <div className="container clearfix">
                <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
                
                <div id="logo">
                    <a href="#" className ="standard-logo" data-dark-logo="/static/demos/articles/images/logo.png"> <img src="/static/demos/articles/images/logo.png" alt="Canvas Logo"/></a> 
                    <a href="#" className ="retina-logo"> <img src="/static/demos/articles/images/logo@2x.png"/></a> 
                </div>

                <nav id="primary-menu">
                    <ul>
                        {props.dataMenu.map(menuItem => (
                            <Menu
                                title={menuItem.title}
                                href={menuItem.href}
                            />
                        ))}
                        
                    </ul>
                </nav>

            </div>
        </div>
    </div>
);

  
export default Header;