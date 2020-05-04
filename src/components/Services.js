import React, { Component } from 'react'
import Title from './Title'
import {FaBriefcaseMedical,FaUserCog,FaSearch,FaSearchLocation} from 'react-icons/fa'
export default class Services extends Component {
    state={
        Services:[{
            icon:<FaBriefcaseMedical/>,
            title:"Health Checkup",
            info:" Providing Medical Checkups For Employees"
        },
        {
            icon:<FaUserCog/>,
            title:"Proffesional Workers",
            info:" Create Employees profiles based on their Requirements"
        },
        {
            icon:<FaSearch/>,
            title:"Search Companies ",
            info:"Search the Desired Companies "
        },
        {
            icon:<FaSearchLocation/>,
            title:"Find Location",
            info:"Find the location of the Company"
        },

        ]
    }
    render() {
        return (
           <section className="services">
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.Services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
