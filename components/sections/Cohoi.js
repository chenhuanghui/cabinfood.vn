
const Cohoi = props => (
    <section id="slider" className="slider-element swiper_wrapper">
        <div className="swiper-container swiper-parent">
            <div className="swiper-wrapper">
                
                <div className="swiper-slide">  
                    <div className="container">
                    <div className="row align-items-center mt-5">
                        <div className="col-xl-6 pr-0 pr-xl-5 col-md-5 col-sm-11 col-12 mb-5 mb-lg-0">
                            <div className="heading-block nobottomborder mb-4">
                                <div className="before-heading mb-2">{props.appT[`line1`]} <span className="badge badge-secondary ml-1"> DELIVERY </span></div>
                                <h2 className="t600 ls0 nott">
                                    <span className="underline">{props.appT[`line2`]}</span>
                                    <br /> {props.appT[`line3`]}
                                </h2>
                            </div>
                            <p><i className="icon-angle-right1"></i> {props.appT[`line4`]}
                            </p>
                            <p><i className="icon-angle-right1"></i> {props.appT[`line5`]}
                            </p>
                            <p><i className="icon-angle-right1"></i> {props.appT[`line6`]}
                            </p>
                            <a href="#" className="button button-large nott ml-0"><i className="icon-line-download"></i> {props.appT[`line7`]}</a>
                        </div>
                        <div className="col-xl-3 col-md-3 col-6 parallax" data-0="transform: translateY(0px);" data-600="transform: translateY(-30px);">
                            <img src= { props.appT.img_src1 } alt="" className="rounded" data-animate="faster fadeInLeft" />
                            <div className="card mt-3" data-animate="faster fadeInLeft" data-delay="100">
                                <div className="card-body rounded bgcolor dark">
                                    <h4 className="mb-2 ">500 đơn hàng/ngày</h4>
                                    <p className="mb-0">* Tổng trung bình đơn hàng của các nhà hàng trên ứng dụng giao hàng tại tp HCM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3 col-6 p-0 parallax" data-0="transform: translateY(0);" data-600="transform: translateY(40px);">
                            <img src= { props.appT.img_src2 } alt="" className="rounded" data-animate="faster fadeInLeft" data-delay="200" />
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>         
        <style jsx>{`
            #slider {
                background-color: #fbf7ed;
                padding-bottom: 80px;
            }
            .card-body, .font-body {
                color:#EEE;
            }
        `}</style>                   
    </section>
);

export default Cohoi;