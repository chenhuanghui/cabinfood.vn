const Khachhang = props => (
    <div className="section mb-0 p-md-0">
        <div className="container">
            <div className="row align-items-center justify-content-between">

                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="heading-block nobottomborder">
                        <h2 className="t400 ls0 nott mb-0 font-primary">Dành cho ai</h2>
                    </div>
                    <p>Progressively strategize just in time scenarios and compelling results. Intrinsicly parallel task extensive systems whereas distinctive catalysts for scenarios and compelling results change.</p>
                </div>

                <div className="col-lg-6 col-md-7 col-sm-6 mt-5 mt-sm-0">
                    <div className="d-none d-lg-flex">
                        <img src="/static/demos/articles/images/iphone-1.png" className="fast" alt="" data-animate="fadeInDown" />
                        <img src="/static/demos/articles/images/iphone-2.png" className="fast" alt="" data-animate="fadeInUp" />
                    </div>
                    <img src="/static/demos/articles/images/iphone.png" alt="" className="d-block d-lg-none px-5 px-sm-0 p-md-5" />
                </div>

            </div>
        </div>
        <style jsx>{`
            .heading-block {
                font-size: 44px; line-height: 1.3
            }
            img.fast {
                height: 600px;
            }
        `}</style>
    </div>

);

export default Khachhang;