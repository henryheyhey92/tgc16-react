import React from 'react'
import axios from 'axios'
export default class BookingForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        bookingOptions:[],
        smokingOptions:[],
        appetiserOptions:[],
        appetisers:[],
        booking:"",
        smoking:""
    }

    async componentDidMount() {
        let response = await axios.get('bookings.json');
        let smokingResponse = await axios.get('smokings.json');
        let appetiserResponse = await axios.get("appetisers.json");

        this.setState({
            'bookingOptions': response.data,
            'smokingOptions': smokingResponse.data,
            'appetiserOptions': appetiserResponse.data
        })

        // this.setState({
        //     'bookingOptions': (await axios.get('bookings.json')).data,
        //     'smokingOptions': (await axios.get('smokings.json')).data,
        //     'appetiserOptions': (await axios.get('appetisers.json')).data
        // })
    }

    // event handlers are best as arrow functions
    updateFormField = evt => this.setState({
            [evt.target.name]: evt.target.value
        })
    

    updateCheckboxes = (evt) => {
        if (this.state[evt.target.name].includes(evt.target.value)) {
            // case 1: the evt.target.value is already in the array
            let indexToRemove = this.state[evt.target.name].findIndex( v => {
                return v === evt.target.value
            })
            let cloned = this.state[evt.target.name].slice();
            cloned.splice(indexToRemove, 1);
            this.setState({
                [evt.target.name] : cloned
            })
        } else {
            // case 2: the evt.target.value is not in the array
            // it means: add evt.target.value to array

            let clone = this.state[evt.target.name].slice();
            clone.push(evt.target.value);
            this.setState({
                [evt.target.name]:clone
            })
        }
    }

    renderBookingOptions() {
        let options = [];
        for (let o of this.state.bookingOptions) {
            options.push(<React.Fragment key={o.value}>
                <input type="radio" 
                       name="booking"
                       value={o.value}
                       onChange={this.updateFormField}
                       checked={this.state.booking === o.value}
                       />
                <label>{o.display}</label>
            </React.Fragment>)
        }
        return options;
    }

    renderSmokingOptions() {
        return this.state.smokingOptions.map( o => {
            return <option key={o.value} value={o.value}>{o.display}</option>
        })
    }

    render() {
        return <React.Fragment>
            <div>
                <label>First Name:</label>
                <input type="text" 
                       name="firstName"
                       value={this.state.firstName}
                       onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text"
                       name="lastName"
                       value={this.state.lastName}
                       onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Booking Type:</label>
                {this.renderBookingOptions()}
            </div>
            <div>
                <label>Smoking Option:</label>
                <select name="smoking" 
                        onChange={this.updateFormField}
                        value={this.state.smoking}
                >
                    {this.renderSmokingOptions()}
                </select>
            </div>
            <div>
                <label>Select your appetisers:</label>
                {
                    this.state.appetiserOptions.map(a =>{
                        return <React.Fragment key={a.value}>
                            <input type="checkbox"
                                   name="appetisers"
                                   value={a.value}
                                   onChange={this.updateCheckboxes}
                            />
                            <label>{a.display}</label>
                        </React.Fragment>
                    })
                }
            </div>



        </React.Fragment>
    }
}