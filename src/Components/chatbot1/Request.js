import React from 'react';
import './css/request.css';

class Request extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <Message items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <div className='inputMessage'>
                <input
                id="chat"
                onChange={this.handleChange}
                value={this.state.text}
                class="no-outline" 
                placeholder="Enter Something"
                />
                <button>
                chat
                </button>
            </div>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class Message extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li className='chatMessage' key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
export default Request