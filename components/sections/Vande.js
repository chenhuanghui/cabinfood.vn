const Vande = props => (
    <div className="section section-about m-0">
        <div className="section section-about m-0">
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<h4 className="mb-0"><span className="badge badge-secondary">{props.dataSection2.line1}</span></h4>
								<div className="heading-block">
									<h2 className="t400 ls0 nott mb-3 font-primary">{props.dataSection2.line2} </h2>
								</div>
								<p>{props.dataSection2.line3} </p>
								<a href= {props.dataSection2.btn_href} className="button button-large ls0 nott ml-0 mt-2 clearfix">{props.dataSection2.btn_title}</a>
							</div>
							<div className="col-md-6 offset-0 offset-md-1 mt-5 mt-md-0">
								<img src= { props.dataSection2.img_src1 } alt="" className="rounded" data-animate="faster fadeInLeft" />
							</div>
						</div>
					</div>
				</div>
        
        <style jsx>{`
            .section.section-about.m-0 {
                padding: 120px 0; 
            }
        `}</style>

    </div>
);

export default Vande;