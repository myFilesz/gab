import React, { Component } from 'react';
import api from '../../../api'
import {login} from '../../../auth/authContext'; 

class ConsumeProducts extends Component{

  state={
    nickName : '',
    password : '',
    emailModal : ''
}


formSubmit = async(e)=>{
   e.preventDefault();
   //Validando os dados
    if( !this.state.nickName.length <=0 || !this.state.password.length <=0 ){
        const data ={
                nickName : this.state.nickName,
                password :  this.state.password
            }
            console.log(data)

       const response = await api.post('/users/join',{data});

       console.log(response);

      if(response.data.status ===401){
        alert("Check your Credentials");
      }else{
        
        console.log(response)
        login(response.data)
        this.props.history.push('/products');

      } 

   }else{
       alert("Find in all fields")
   }
}


render(){

  const propsDiv = {
    main : {
      width: '100%',
      marginTop: '10%', 
      height: '700px',
      },
      form : {
        margin: '0 auto', 
        width: '50%',
        marginTop: '1%',
      },
      border: { 
        width: '700px',
        height: '250px',
        marginTop: '2%',
        marginLeft: '350px'
      },
      logo : {
        maxWidth : '50px',
        maxHeight : '50px',
        verticalAlign: 'middle',
        marginLeft: '150px',
        margTop: '10px',
        margBottom: '10px',
      }
  }
   return(
        <div>
          <div style={propsDiv.main}>
            <div className="border border-primary rounded" style={propsDiv.border}>
              <form onSubmit={this.formSubmit} style={propsDiv.form} >
                <div className="row">
                  <input className="col-sm form-control" type="text" id="nickName" name="nickName"  value={ this.state.nickName } onChange={ e => this.setState({ nickName : e.target.value })} placeholder="write your user name" /><br/><br/>
                </div>
                <div className="row" >
                  <input className=" col-sm form-control" type="password" id="password" name="password" value={ this.state.password } onChange={ e => this.setState({ password : e.target.value })}placeholder="write your password" /><br/><br/>
                </div>
                <div className="row" 
                  style={{
                      marginTop: '7px',
                      marginLeft : '22%',
                    }}>
                  <a href="#" className="badge badge-info col-sm-8"  data-toggle="modal" data-target="#sendEmail">Esqueci minha senha</a>
                  
                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="sendEmail" >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                        <div className="row">
                          <label className="col-sm">Email:</label>
                          <input className="form-control" type="text" id="nickName" name="nickName" placeholder="write your password" value={ this.state.emailModal } onChange={ e => this.setState({ emailModal : e.target.value })} /><br/><br/>
                        </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <input type="submit" value="login" className="btn btn-info bg-info row" 
                  style={{
                    marginLeft : '40%', 
                    marginTop: '15px',
                  }}/>
                </div>
              </form>
            </div>
          </div>
       </div>
    )
  }
}

export default ConsumeProducts;