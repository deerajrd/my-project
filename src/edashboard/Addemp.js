import React, { Component } from 'react'
//import axios from 'axios'
export default class Addemp extends Component {
    constructor(props){
        super(props)
    
     this.state={
          candidatename:"",
          age:"",
          selectcategory:"",
          dateofbirth:"",
          gender:"",
          address:"",
          aadharnumber:""
         
          //candidateage:"",
          //gender:"",
          //experience:"",
          //salaryday:"",
          //candidatephoto:""
      }
      this.onChange=this.onChange.bind(this)
    }
    // componentDidMount(){
    //     this.props.getCategory()
    // }
      onChange(e){
    
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
    const bodydata={
        candidatename:this.state.candidatename,
        age:this.state.age,
        selectcategory:this.state.selectcategory,
        dateofbirth:this.state.dateofbirth,
        gender:this.state.gender,
        address:this.state.address,
        aadharnumber:this.state.aadharnumber,
        
        //candidatecategory:this.state.candidatecategory,
        //gender:this.state.gender,
        //experience:this.state.experience,
        //salaryday:this.state.salaryday,
        //candidatephoto:this.state.candidatephoto
    }
    const data=JSON.stringify(bodydata)
    console.log(data)
}
    render() {
        return (
            <div>
                <div className="wrapper1">
			<div className="form-wrapper">
			  <h1>Add Profile</h1>
			  <form onSubmit={this.handleSubmit} noValidate>
				<div className="companyname">
				  <label htmlFor="companyname">Candidate Name</label>
				  <input
					className="lable"
					// {formErrors.eventName.length > 0 ? "error" : null}
					placeholder="Candidate Name"
					type="text"
					name="candidatename"
					// noValidate
                    value={this.state.candidatename}
					onChange={this.onChange}
				  />
                     <div className="password">
				  <label htmlFor="password">Age</label>
				  <textarea
					className="lael"
					
					placeholder="age"
					type="text"
					name="age"
                    value={this.state.age}
					onChange={this.onChange}
				  />
				
				</div>
				  {/* {formErrors.eventName.length > 0 && (
					<span className="errorMessage">{formErrors.eventName}</span>
				  )} */}
				</div>
				<div className="lastName">
				  <label htmlFor="lastName">Select Category</label>
				  
                  <select  className="label"
				//   {formErrors.eventType.length > 0 ? "error" : null}
					placeholder="eventType"
                    name='selectcategory'
                    value={this.state.selectcategory}
                    onChange={this.onChange}
                    >
                   
            <option value="Workshop">Workshop</option>
            <option value="Fest">Fest</option>
            <option value="MedicalCamp">Medical Camp</option>
            <option value="Conference">Conference</option>
            <option value="PoolCampus">Pool Campus</option>
          </select>
                
				  {/* {formErrors.eventType.length > 0 && (
					<span className="errorMessage">{formErrors.eventType}</span>
				  )} */}
				</div>

                <div className="password">
				  <label htmlFor="password">Date of Birth</label>
				  <input
					className="label"
				 
					placeholder="dateofbirth"
					type="number"
					name="dateofbirth"
                    value={this.state.dateofbirth}
				
					onChange={this.onChange}
				  />
				  
				</div>



				{/* <div className="email" >
				  <label htmlFor="email" >Event Date</label>
                  <div id='row'>
                  <div id='column'>
				  <input
					className="label"
					
					placeholder="Startdate"
					type="date"
					name="startDate"
					noValidate
					onChange={this.onChange}
				  />
				 
                  </div>
                  <div id='column'>
				  <input
					className="label"
				
					placeholder="Enddate"
					type="date"
					name="endDate"
					noValidate
					onChange={this.onChange}
				  />
				 
                  </div>
				</div>
                </div> */}
				<div className="password">
				  <label htmlFor="password">Gender</label>
				  <input
					className="label"
					
					placeholder="Gender"
					type="text"
					name="gender"
					value={this.state.gender}
					onChange={this.onChange}
				  />  
				</div>

                <div className="password">
				  <label htmlFor="password">Address</label>
				  <input
					className="label"
					
					placeholder="Address"
					type="text"
					name="address"
					value={this.state.address}
					onChange={this.onChange}
				  />	
                 </div>

                 <div className="password">
				  <label htmlFor="password">Aadhaar Number</label>
				  <input
					className="label"
					
					placeholder="Aadhar Number"
					type="text"
					name="aadharnumber"
					value={this.state.aadharnumber}
					onChange={this.onChange}
				  />	
                 </div>
             
				<div className="createAccount">
				  <button className='btn' >add</button>
				  
				</div>
			  </form>
			</div>
		  </div>
            </div>
        )
    }
}
