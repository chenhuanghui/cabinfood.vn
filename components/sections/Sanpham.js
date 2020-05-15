const Sanpham = props => (
    <div className="section">
        <div className="container">
                <div className="heading-block mb-4 nobottomborder">
                    <h2 className="t400 ls0 nott mb-0">{props.dataSection4.line1}</h2>
                </div>
                
                <div className="row align-items-center">

                    <div className="col-lg-3 col-sm-6">
                        <img src= {props.dataSection4.img_src1} alt="" />
                    </div>

                    <div className="col-lg-4 col-sm-6 mt-3 mt-sm-0">
                        <div className="heading-block">
                            <p className="mb-0">{props.dataSection4.line2}</p>
                        </div>
                        <h2 className="t700 ls0 mb-0 font-body">{props.dataSection4.line3} </h2>
                            <span className="text-muted">{props.dataSection4.line4}</span>
                    </div>
                    
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <img src= {props.dataSection4.img_src2} alt="Image 1" />
                    </div>

                    {/* <div className="col-lg-5 mt-5 mt-lg-0">
                        <div id="oc-images" className="owl-carousel image-carousel carousel-widget" data-margin="20" data-nav="true" data-pagi="true" data-items-xs="2" data-items-sm="3" data-items-md="3" data-items-lg="2" data-items-xl="2">

                            <p className="oc-item">
                                <img src="/static/demos/articles/images/food/1.png" alt="Image 1" />
                            </p>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/2.png" alt="Image 2" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/3.png" alt="Image 3" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/4.png" alt="Image 4" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/5.png" alt="Image 5" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/6.png" alt="Image 6" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/7.png" alt="Image 7" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/8.png" alt="Image 8" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/9.png" alt="Image 9" /></a>
                            </div>
                            <div className="oc-item">
                                <a href="#"><img src="/static/demos/articles/images/food/10.png" alt="Image 10" /></a>
                            </div>

                        
                        </div>
                    </div> */}

                </div>
            </div>
        <style jsx>{`
            .heading-block h2 {
                font-size: 2.2rem;
            }
        `}</style>
    </div>
    
);

export default Sanpham;