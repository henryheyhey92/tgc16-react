import React from 'react'
import Listing from "./Listing";
import AddNew from "./AddNew"

export default class RecipeBook extends React.Component {
    
    state = {
        active: 'recipe'
    }

    renderPage() {
        if (this.state.active === 'recipe') {
            return <Listing/>
        } else if(this.state.active === 'add') {
            return <AddNew/>
        }
    }

    setActive(page) {
        this.setState({
            'active': page
        })
    }

    // all class-based component must have a render function
    // or else you cannot create instance of it
    render() {
        return (<div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link"
                            onClick={()=>{
                                this.setActive('recipe')
                            }}>
                        Recipes
                    </button>
                </li>
                <li>
                    <button className="nav-link" onClick={()=>{
                        this.setActive('add')
                    }}>
                        Add New
                    </button>
                </li>
            </ul>
            {this.renderPage()}
        </div>)
    }
}