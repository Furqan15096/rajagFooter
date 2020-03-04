import React from 'react';
import { Route } from 'react-router-dom';
// import Footer from './footer/footer.js';
import Footer from "./anotherFooter2/footer"
import 'bootstrap/dist/css/bootstrap.min.css';



class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => {
                    return <React.Fragment>
                        {/* <Footer /> */}
                        <Footer />

                    </React.Fragment>
                }
                }
                />
               


                
            </div>
        )
    }
}

export default Dashboard;