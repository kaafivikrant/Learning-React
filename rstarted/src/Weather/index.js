import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasionDisplay';
import Spinner from './Spinner';

// Functional Component
// const App = () =>{

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div> Hii </div>;
// };

class App extends React.Component{

    // constructor(props){
    //     super(props);

    //     //This is the only time we do direct assignment of this.state
    //     this.state = {lat : null, long: null, errorMessage : ''};
    // }

    state = {lat : null, long: null, errorMessage : ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //(position) => console.log(position),
            (position) => {
                //to update our state we call setState
                this.setState({lat : position.coords.latitude, long : position.coords.longitude})
            },
            (err) => console.log(this.setState({errorMessage : err.message}))
        );
    }

    // componentDidUpdate(){
    //     console.log('My component was just updated it rerendered');
    // }

    renderContent(){

        if(this.state.errorMessage){
            return <Spinner message='Please accept location request'/>
        }
        
        if(!this.state.errorMessage){
            return(
            // <div> 
            //       Latitude: {this.state.lat}
            //       <br/>
            //       Longitude : {this.state.long} 
            // </div>
                <SeasonDisplay lat = {this.state.lat} />
            );
        };
    }

    render(){

        return (
            <div className="border red"> 
                {this.renderContent()}
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));
