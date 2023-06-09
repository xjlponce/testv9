// FlipCard.js
import React from 'react';
import './FlipCard.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: '',
      password: '',
      loginError: false,
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
  
    // Validate the login credentials here
    const isValidCredentials = this.isValidCredentials(username, password);
  
    if (isValidCredentials) {
      // If the login is successful
      this.setState({ isLoggedIn: true, loginError: false });
      toast.error('Login successfully'); // Display login successful
    } else {
      // If the login is unsuccessful
      this.setState({ isLoggedIn: false, loginError: true });
      toast.error('Invalid username or password'); // Display toast notification
    }
  };
  

  handleLogout = () => {
    // Perform any necessary logout actions
    // For example, clearing session data or resetting state values
    this.setState({
      isLoggedIn: false,
      username: '',
      password: '',
      loginError: false,
      currentPage: 1,
    });
  }

  handleNextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage === 1 ? 2 : 1 });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  isValidCredentials = (username, password) => {
    // Perform your validation logic here
    // This is a placeholder implementation that checks for a specific username and password
    return username === 'admin' && password === 'password';
  }

  render() {
    const { isLoggedIn, username, password,currentPage} = this.state;

    if (isLoggedIn) {
        return (
          <div>
            <div>
              {currentPage === 1 ? (
                <>
                  <h4>Horizontal Flip</h4>
                  <div className="flip">
                    <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                        <h1 className="text-shadow">MOUNTAIN</h1>
                    </div>
                    <div className="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                    </div>
                    <div className="flip">
                    <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                        <h1 className="text-shadow">LAKE</h1>
                    </div>
                    <div className="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                    </div>
                    <div className="flip">
                    <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                        <h1 className="text-shadow">OCEAN</h1>
                    </div>
                    <div className="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                    </div>

                    <br />
                    <br />
                  {/* Additional Horizontal Flip Cards */}
                  {/* ... */}
                </>
              ) : (
                <>
                  <h4>Vertical Flip</h4>
                  <div className="flip flip-vertical">
                  <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                        <h1 className="text-shadow">FOREST</h1>
                    </div>
                    <div className="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                    </div>
                    <div className="flip flip-vertical">
                    <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                        <h1 className="text-shadow">TRACK</h1>
                    </div>
                    <div className="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                    </div>
                    <div className="flip flip-vertical">
                    <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                        <h1 className="text-shadow">SWAMP</h1>
                    </div>
                    <div className="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                            </div>
                  {/* Additional Vertical Flip Cards */}
                  {/* ... */}
                </>
              )}
            </div>
            <button onClick={this.handleNextPage}>Next</button>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        );
      } else {
        return (
          <div>
            <div className="form-container">
            <form onSubmit={this.handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <button type="submit">Login</button>
              </div>
              <ToastContainer position="top-right" />
            </form>
            </div>
          </div>
        );
        
      }
    }
  }

export default FlipCard;
