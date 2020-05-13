// components/NavBar.js
// import "./NavBar.scss";
import NavButton from "./NavButton";

const NavBar = props => (
    <div id="footer" className="noborder">
        <div className="container clearfix">
            <div className="d-flex align-items-center mb-4">
                <img src="/static/demos/articles/images/logo.png" height="100" alt="" />
            </div>

            <div className="footer-widgets-wrap row clearfix">
            
                <div className="col-md-4 col-sm-6">
                    <div className="widget clearfix">
                        <div className="d-flex clearfix">
                            <div className="pr-4 pl-1">
                                <i className="icon-building2 h3"></i>
                            </div>
                            <div className="flex-grow-1">
                                <div>
                                    <abbr title="address"><strong>Văn phòng đại diện:</strong><br /></abbr>
                                    126 Nguyễn Thị Minh Khai<br/>
                                    P.6, Q.3, TP HCM<br/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex clearfix">
                            <div className="pr-4 pl-1">
                                <i className="icon-call h3"></i>
                            </div>
                            <div className="flex-grow-1">
                                <div className="bottommargin-sm">
                                    <abbr title="Phone Number"><strong>Phone:</strong></abbr> (84) 8547 632521<br/>
                                    <abbr title="Fax"><strong>Fax:</strong></abbr> (84) 11 4752 1433<br/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center clearfix">
                            <div className="pr-4 pl-1">
                                <i className="icon-envelope21 h3 mb-0"></i>
                            </div>
                            <div className="flex-grow-1">
                                <abbr title="Email Address"><strong>Email:</strong></abbr> support@cabinfood.vn
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-4 col-sm-6  mt-5 mt-sm-0">
                    <div className="widget widget_links clearfix">

                        <div className="line mb-5 mt-2 d-block d-sm-none"></div>

                        <h4 className="font-primary t700 ls0">GIẢI PHÁP</h4>

                        <div id="post-list-footer">
                        
                            <div className="spost border-top-0 clearfix">
                                <div className="entry-c">
                                    <div className="entry-title">
                                        <h4 className="font-body"><a href="#">Hanson Deck</a></h4>
                                        <small>Published 1,187 Books</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spost border-top-0 clearfix">
                                <div className="entry-c">
                                    <div className="entry-title">
                                        <h4 className="font-body"><a href="#">Hanson Deck</a></h4>
                                        <small>Published 1,187 Books</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spost border-top-0 clearfix">
                                <div className="entry-c">
                                    <div className="entry-title">
                                        <h4 className="font-body"><a href="#">Hanson Deck</a></h4>
                                        <small>Published 1,187 Books</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6  mt-5 mt-sm-0">
                    <div className="widget widget_links clearfix">

                        <div className="line mb-5 mt-2 d-block d-sm-none"></div>

                        <h4 className="font-primary t700 ls0">HỖ TRỢ</h4>

                        <div id="post-list-footer">
                        
                            <div className="spost border-top-0 clearfix">
                                <div className="entry-c">
                                    <div className="entry-title">
                                        <h4 className="font-body"><a href="#">Hanson Deck</a></h4>
                                        <small>Published 1,187 Books</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spost border-top-0 clearfix">
                                <div className="entry-c">
                                    <div className="entry-title">
                                        <h4 className="font-body"><a href="#">Hanson Deck</a></h4>
                                        <small>Published 1,187 Books</small>
                                    </div>
                                </div>
                            </div>
                            <div className="spost border-top-0 clearfix">
                                <div className="entry-c">
                                    <div className="entry-title">
                                        <h4 className="font-body"><a href="#">Hanson Deck</a></h4>
                                        <small>Published 1,187 Books</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

        <div className="line nomargin"></div>

        <div id="copyrights">

            <div className="container clearfix">

                <div className="row align-items-center">
                    <div className="col-sm-6">
                        Copyrights &copy; Cabin Food 2020.
                    </div>

                    <div className="col-sm-6 mt-4 mt-sm-0">
                        <div className="float-none float-sm-right clearfix">
                            <a href="#" className="social-icon si-small si-borderless si-facebook">
                                <i className="icon-facebook"></i>
                                <i className="icon-facebook"></i>
                            </a>

                            <a href="#" className="social-icon si-small si-borderless si-twitter">
                                <i className="icon-twitter"></i>
                                <i className="icon-twitter"></i>
                            </a>

                            <a href="#" className="social-icon si-small si-borderless si-gplus">
                                <i className="icon-youtube"></i>
                                <i className="icon-youtube"></i>
                            </a>

                            <a href="#" className="social-icon si-small si-borderless si-pinterest">
                                <i className="icon-pinterest"></i>
                                <i className="icon-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
); 
  
export default NavBar;