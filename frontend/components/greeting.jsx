import React from 'react';
import {Link, withRouter} from 'react-router';
import SearchBarContainer from './search_bar_container';
import Modal from 'react-modal';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  render(){
    if (this.props.currentUser){
      return (
        <div>
          <header className="header">
            <header className="header-container">
              <div className="header-logo">

                <Link to="/" className="home-page-revisit"><span className="fa fa-headphones" aria-hidden="true"></span>Musician Hub</Link>
                <SearchBarContainer />
              </div>

              <nav className="nav-container">
                <ul className="list-container">
                  <li><Link to={`/artists/${this.props.currentUser.id}`}>Profile</Link></li>
                  <li><Link to="/" onClick={this.props.logout}>Logout</Link></li>
                </ul>
              </nav>
            </header>
          </header>
        </div>
      );
    } else {
        return (
          <div>
            <header className="header">
              <header className="header-container">
                <div className="header-logo">
                  <Link to="/" className="home-page-revisit"><span className="fa fa-headphones" aria-hidden="true"></span>Musician Hub</Link>
                  <SearchBarContainer />
                </div>
                <nav className="nav-container">
                  <ul className="list-container">
                    <li><button onClick={this.openModal}>Sign Up</button></li>
                        <Modal
                          isOpen={this.state.modalIsOpen}

                          onRequestClose={this.closeModal}
                          contentLabel="Example Modal"
                          >
                        <h2 ref="subtitle">Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                          <input />
                          <button>tab navigation</button>
                          <button>stays</button>
                          <button>inside</button>
                          <button>the modal</button>
                        </form>
                      </Modal>

                    <li><button onClick={this.openModal}>Login</button></li>
                      <Modal
                        isOpen={this.state.modalIsOpen}

                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal"
                        >
                      <h2 ref="subtitle">Hello</h2>
                      <button onClick={this.closeModal}>close</button>
                      <div>I am a modal</div>
                      <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                      </form>
                    </Modal>
                  </ul>
                </nav>
              </header>
            </header>
          </div>
        );
      }
  }
}



export default withRouter(Greeting);
