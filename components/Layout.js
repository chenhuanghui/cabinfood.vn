// components/Layout.js

import Head from "next/head";
import ReactDOM from 'react-dom';
import React from 'react';

import Header from "./Header";
import NavBar from "./NavBar";
import Cohoi from "./sections/Cohoi";
import Diadiem from "./sections/Diadiem";
import Doitac from "./sections/Doitac";
import Giaiphap from "./sections/Giaiphap";
import Hequa from "./sections/Hequa";
import Khachhang from "./sections/Khachhang";
import Lienhe from "./sections/Lienhe";
import Sanpham from "./sections/Sanpham";
import Vande from "./sections/Vande";

// import Swiper from 'swiper';
// import "./Layout.scss";
// import "./index.scss";

// import navButtons from "../config/buttons";

export default class Layout extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dataMenu: [],
      dataSection1: [],
      dataSection2: [],
      dataSection3: [],
      dataSection4: []
		}
  }

  componentDidMount () {
    var swiper = new Swiper('.swiper-scroller', {
      slidesPerView: 'auto',
      spaceBetween: 50,
      freeMode: true,
      grabCursor: true,
      navigation: {
          nextEl: '.slider-arrow-right-1',
          prevEl: '.slider-arrow-left-1',
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    mousewheel: true,
    breakpoints: {
          768: {
            spaceBetween: 20,
          },
          576: {
            spaceBetween: 15,
          }
        }
    });
    
    let currentComponent = this;
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyLNupG6zOmmokND'}).base('appZ1bpUbqpieMgfe');

    var listMenu = [];
    base('Menu').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function(record) {
            listMenu.push(record.fields);
        });
        currentComponent.setState({dataMenu:listMenu});
        console.log('Retrieved', listMenu);
    });
    base('Section1').find('rectP0kqTHT6oFfzA', function(err, record) {
      if (err) { console.error(err); return; }
        
        record.fields.img_src1 = record.fields[`img_src1`][0].url;
        record.fields.img_src2 = record.fields[`img_src2`][0].url;
        // console.log('Retrieved', record.fields);
        currentComponent.setState({ dataSection1: record.fields })
    });

    base('Section2').find('recyBzp9rEihIJnlr', function(err, record) {
      if (err) { console.error(err); return; }
        
        record.fields.img_src1 = record.fields[`img_src1`][0].url;
        // console.log('Retrieved', record.fields);
        currentComponent.setState({ dataSection2: record.fields })
    });

    base('Section3').find('recxaGe3yTYlk0tpg', function(err, record) {
      if (err) { console.error(err); return; }
      // console.log('Retrieved', record.fields);
      currentComponent.setState({ dataSection3: record.fields })
    });

    base('Section4').find('recx0zxT5pAKoaTl2', function(err, record) {
      if (err) { console.error(err); return; }
      
      record.fields.img_src1 = record.fields[`img_src1`][0].url;
      record.fields.img_src2 = record.fields[`img_src2`][0].url;
      // console.log('Retrieved', record.fields);
      currentComponent.setState({ dataSection4: record.fields })
    });

   
  } 

  render () {
    const { dataMenu, dataSection1, dataSection2, dataSection3, dataSection4} = this.state;

    return (
      <div className="Layout">
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="CABINFOOD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:700|Muli:400&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <title>Cabin Food | Making better your kitchen</title>
        
        <link rel="icon" type="image/png" sizes="32x32" href="/static/demos/articles/images/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/demos/articles/images/favicon-16x16.png"></link>
        
        <script src="/static/js/jquery.js"></script>
	      <script src="/static/js/plugins.js"></script>
        <script src="/static/js/functions.js"></script>
      </Head>

      <div className="stretched">
        <div id="wrapper" className="clearfix">
          <Header dataMenu={dataMenu}/>
          <Cohoi dataSection1={dataSection1}/>
          
          <section id="content">
            <div className="content-wrap pb-0 clearfix">
              <Vande dataSection2={dataSection2}/>
              <Hequa dataSection3={dataSection3}/>
              <Sanpham dataSection4={dataSection4}/>
              <Giaiphap />
              
              <Khachhang />
              <Diadiem />  
              <Doitac />  
              <Lienhe />  
            </div>
          </section>
          
          {/* <div className="Content">{props.children}</div> */}

          <NavBar />
        </div>
      </div>
      
    </div>
    )
  }
}

// const Layout = props => {

//   return (
//     <div className="Layout">
    
//       <Head>
//         <meta http-equiv="content-type" content="text/html; charset=utf-8" />
//         <meta name="author" content="CABINFOOD" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link href="https://fonts.googleapis.com/css?family=Merriweather:700|Muli:400&display=swap" rel="stylesheet"></link>
        
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
//         <title>Cabin Food | Making better your kitchen</title>

        
//         <link rel="icon" type="image/png" sizes="32x32" href="/static/demos/articles/images/favicon-32x32.png"></link>
//         <link rel="icon" type="image/png" sizes="16x16" href="/static/demos/articles/images/favicon-16x16.png"></link>
        
//         <script src="/static/js/jquery.js"></script>
// 	      <script src="/static/js/plugins.js"></script>
//         <script src="/static/js/functions.js"></script>
//       </Head>

//       <div className="stretched">
//         <div id="wrapper" className="clearfix">
//           <Header />
//           <Cohoi />
//           <section id="content">
//             <div className="content-wrap pb-0 clearfix">
//               <Vande />
//               <Hequa />
//               <Sanpham />
//               <Giaiphap />
//               <Khachhang />
//               <Diadiem />  
//               <Doitac />  
//               <Lienhe />  
//             </div>
//           </section>
          
//           {/* <div className="Content">{props.children}</div> */}

//           <NavBar />
//         </div>
//       </div>
      
//     </div>
    
//   );
// }

// export default Layout;