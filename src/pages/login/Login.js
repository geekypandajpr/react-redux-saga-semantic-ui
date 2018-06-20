import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form, Input } from 'formsy-semantic-ui-react';
import { Button, Grid, Header, Image, Message, Segment, Responsive, TransitionablePortal, Label } from 'semantic-ui-react';
import { required, email } from '../../utils/validation';
import { loginRequest,forgotRequest } from '../../actions/index';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      open: true,
    };
    this.submit         = this.submit.bind(this);
    this.enableButton   = this.enableButton.bind(this);
    this.disableButton  = this.disableButton.bind(this);
    this.toggleUI       = this.toggleUI.bind(this);
    this.forgot         = this.forgot.bind(this);
  }

  toggleUI(e) {
    this.setState({
        open: !this.state.open,
    });
  }

  submit(data) {
    if(!data.email === '' && !data.password === ''){
      this.props.dispatch(loginRequest(data));
    } else {
      alert('Email and password requer');
    }

   
  }

  forgot(data){
    this.props.dispatch(forgotRequest(data));
  }


  enableButton() {
      this.setState({ canSubmit: true });
  }
  disableButton() {
      this.setState({ canSubmit: false });
  }
  render() {
    const errorLabel = <spancolor style={{ color: 'red', float: 'left', height: 30 }} />
    const { open } = this.state;
    return (
      <div>
        <Responsive>
          <TransitionablePortal open={open} transition={{ animation: 'fade down', duration: 1500 }} >
            <LogInStyleWrapper className='login-form'>
              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 320 }}>
                  <Segment color='teal'>
                    <Header>
                      <Image src='../../assets/icons/logo.png' />
                    </Header>
                    <Form size='large' onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} >
                      <Input name='email' validations={{ required, email }} fluid icon='user' iconPosition='left' placeholder='E-mail address' validationErrors={{ email: 'Invalid email address' }} errorLabel={errorLabel} />
                      <Input name='password'   fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={() => this.setState({})} validations={{ required }} errorLabel={errorLabel} />
                      {/* <Link to="dashboard"> */}
                      <Button color='teal' fluid size='large' disabled={!this.state.canSubmit}>Login</Button>
                      {/* </Link> */}
                    </Form>
                    <Message style={{ boxShadow: 'none', background: 'transparent' }}>Forgot Password ? <Label style={{ cursor: 'pointer' }} onClick={this.toggleUI}>Click Here</Label>
                    </Message>
                  </Segment>
                </Grid.Column>
              </Grid>
            </LogInStyleWrapper>
          </TransitionablePortal>
        </Responsive>
        <Responsive>
          <TransitionablePortal open={!open} transition={{ animation: 'fade up', duration: 1500 }}>
            <ForgotStyleWrapper>
              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 320 }}>
                  <Segment color='teal'>
                    <Header><Image src='../../assets/icons/logo.png' /></Header>
                    <Header as='h2' color='teal' textAlign='center'>
                      {' '}Forgot Password
                    </Header>
                    <Form size='large' onValid={this.enableButton} onInvalid={this.disableButton} onSubmit={()=>this.forgot()}>
                      <Input name='email' validations={{ required, email }} fluid icon='user' iconPosition='left' placeholder='E-mail address' validationErrors={{ email: 'Invalid email address' }} errorLabel={errorLabel} />
                      <Button color='teal' fluid size='large' disabled={!this.state.canSubmit}>Recover Password</Button>
                      <Button type='button' style={{ marginTop: 10 }} content='Back To Login' fluid icon='arrow left' onClick={this.toggleUI} />
                    </Form>
                  </Segment>
                </Grid.Column>
              </Grid>
            </ForgotStyleWrapper>
          </TransitionablePortal>
        </Responsive>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

// export default LoginPage;
export default connect(mapStateToProps)(Login);

const LogInStyleWrapper = styled.div`
{
  height:100%;
  position:fixed;
  left:0;right:0;
  text-align: center;
},
.label {
  background-color:transparent;
},
.ui.form .field.error {
    color:'#fecccc',
    border-color : '#fecccc'
}
`;

const ForgotStyleWrapper = styled.div` {
    height:100%;
    position:fixed;
    left:0;right:0;
    text-align: center;
}`;

const spancolor = styled.div`{color: red;}`;
