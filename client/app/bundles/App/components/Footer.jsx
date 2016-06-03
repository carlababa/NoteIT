import React from 'react';
import bootstrap from 'bootstrap';

class Footer extends React.Component {

  footerStyle(){
    return{
      color: "#fff",
      backgroundColor: "#2c3e50",
      padding: "25px 0",
      position: "absolute",
      bottom: "0px",
      height: "70px",
      width: "100%",
      fontFamily: "Roboto",
      fontSize: "18px"
    };
  }

  iconStyle(){
    return{
      color: "#eee",
      paddingLeft: "12px",
      hover: "#2c3e50"
    };
  }

  render(){
    return(
      <footer style={this.footerStyle()} className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Copyright &copy; Carla Babadopulos
              <a href="mailto:cacababa@gmail.com" className="icon" target="_blank" title="E-mail" style={this.iconStyle()}><i className="fa fa-fw fa-envelope icon-social"></i></a>
              <a href="http://linkedin.com/in/carlababa" className="icon" target="_blank" title="Linkedin" style={this.iconStyle()}><i className="fa fa-fw fa-linkedin icon-social"></i></a>
              <a href="http://github.com/carlababa/NoteIT" className="icon" target="_blank" title="Github" style={this.iconStyle()}><i className="fa fa-fw fa-github icon-social"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
