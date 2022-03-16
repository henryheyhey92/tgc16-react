import React from 'react'

export default class RecipeBook extends React.Component {
    
    state = {

    }

    // all class-based component must have a render function
    // or else you cannot create instance of it
    render() {
        return (<div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link">
                        Recipes
                    </button>
                </li>
                <li>
                    <button className="nav-link">
                        Add New
                    </button>
                </li>
            </ul>
        </div>)
    }
}