import React from 'react';
import {withRouter} from 'react-router';

class DemoLogin extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidUpdate(){
    if(this.props.currentUser){
      this.props.router.push(`/artists/${this.props.currentUser.id}`);
    }
  }

  render(){
    return (
      <div>

      </div>
    );

  }

}

export default withRouter(DemoLogin);
