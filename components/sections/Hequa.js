const Hequa = props => (
    <div className="section m-0">
        <div className="container center">
            <span className="before-heading font-body">{props.dataSection3.title}</span>
            <div className="heading-block nobottomborder divcenter">
                <h2 className="nott ls0 t400"> <span><i className="icon-quote-left1"></i> {props.dataSection3.quote} <i className="icon-quote-right1"></i></span></h2>
                <p>{props.dataSection3.sub}</p>
            </div>
        </div>
    
        <style jsx>{`
            .section.m-0 {
                padding: 100px 0; 
            }
            .heading-block.nobottomborder.divcenter {
                max-width: 820px;
            }
        `}</style>
    </div>
);

export default Hequa;