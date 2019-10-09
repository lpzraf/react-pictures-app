// import React from 'react'

import React, { Component } from 'react'

export default class SearchBar extends Component {
    
  state = {
      turn: ''
  }

  onFormSubmit = e => {
      e.preventDefault();
      console.log(this.state.turn)
  }
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.turn} 
                            onChange={(e) => this.setState({turn: e.target.value})} 
                            />  
                    </div> 
                </form>
            </div>
        )
    }
}
