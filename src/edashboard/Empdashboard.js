import React, { Component } from 'react'
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
//import Adminbody from './adminbody'
import Title from '../components/Title'
import EmpNavbar from '../edashboard/EmpNavbar'

export default class Empdashboard extends Component {
    render() {
        return (
            <div>
               <EmpNavbar/>
            <div className='employeeHero'>
           <Banner title="Welcome to Employee Dashboard" >
                <Link to="/addemp" className="btn-primary">
                    Create Profile
                </Link>
            </Banner>
            </div>
            <section className='about-events'>
            <Title title="Details" id='details'></Title>
                <div id='aboutrow'>
                <div className='card'>
                    <div className='container'>
                    <div style={{overflow_x:'auto'}}>
                        <table>
                            <tr>
                                <th>Events</th>
                                <th>Login Users</th>
                            </tr>
                            <tr>
                                <td>Fest</td>
                                <td><Link to='/userdetail'>20</Link></td>
                            </tr>
                            <tr>
                                <td>Medical Camp</td>
                                <td><Link to='/userdetail'>10</Link></td>
                            </tr>
                            <tr>
                                <td>Pool Campus</td>
                                <td><Link to='/userdetail'>20</Link></td>
                            </tr>

                        </table>                    
                        </div>
                    </div>
                    </div>
                    </div>
                    </section>
            {/* <Adminbody/> */} 
            </div>
        )
    }
}
