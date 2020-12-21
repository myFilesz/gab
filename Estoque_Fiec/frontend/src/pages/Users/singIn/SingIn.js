import React, {Component} from 'react'
import api from '../../../api';
 class SingIn extends Component{
     state={
         name : '',
         email : '',
         password : '',
         passwordC : '',
         authorization : '',
         nickName : ''
     }

    
    formSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target

        //Validando os dados
        if( this.state.name.length <=0 || !this.state.email.length <=0 || !this.state.password.length <=0 || !this.state.passwordC.length <=0){
            if(form.password.value === form.passwordC.value ){

                const data ={
                    name : form.name.value,
                    nickName : form.nickName.value,
                    email : form.email.value,
                    password : form.password.value,
                    authorization : form.authorization.value

                }
                const response = await api.post('/users/SingIn',{data});
                console.log(response.data);
                
                if(response.data.status ===401){
                     alert("user is already registered")
                    
                }else{
                    alert("Cadastrado com sucesso");
                    this.props.history.push('/users/join');
                }
            }else{
                alert("Password do not Match")
            }
        }else{
            alert("Find in all fields")
        }
     }


    render(){

        return(
            
            <div >
                <div className="">

                </div>
                <div className="formulario">
                <h1> Sing-In </h1>
                <form onSubmit={this.formSubmit}>
                <label> Your Name: </label><br/>
                <input type="text" id="name" name="name" value={ this.state.name } onChange={ e => this.setState({ name : e.target.value })} placeholder="write your name" /><br/><br/>

                <label> Your Email: </label><br/>
                <input type="email" id="email" name="email"  value={ this.state.email } onChange={ e => this.setState({ email : e.target.value })} placeholder="write your email" /><br/><br/>

                <label> Your nickName: </label><br/>
                <input type="text" id="nickName" name="nickName"  value={ this.state.nickName } onChange={ e => this.setState({ nickName : e.target.value })} placeholder="write your email" /><br/><br/>

                <label> Your Password: </label><br/>
                <input type="password" id="password" name="password" value={ this.state.password } onChange={ e => this.setState({ password : e.target.value })}placeholder="write your password" /><br/><br/>

                <label> Confirm your Password: </label><br/>
                <input type="password" id="passwordC" name="passwordC" value={ this.state.passwordC } onChange={ e => this.setState({ passwordC : e.target.value })} placeholder="confirm your password" /><br/><br/>
                
                <label> Authorization : </label><br/>
                <input type="text" id="authorization" name="authorization" value={ this.state.authorization } onChange={ e => this.setState({ authorization : e.target.value })} placeholder="level of authorization" /><br/><br/>

                <input type="submit" value="Enviar" />
                </form>
                </div>
                
                
            </div>
            
        )
    }
 }

 export default SingIn;