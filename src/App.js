import React, { Component, createRef } from 'react'
import './App.css'
import './animation.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import base from './base'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }
   
  messagesRef = createRef()
  addMessage = message =>{
    const messages = { ... this.state.messages}
    messages[`message-${Date.now()}`] = message
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })
    this.setState({messages})
  }

  componentDidMount(){
    base.syncState('/',{
      context: this,
      state:'messages'
    })
  }
  componentDidUpdate(){
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }
  isUser = pseudo => pseudo === this.state.pseudo
  render () {
    const messages = Object.keys(this.state.messages).map(key => (
      <CSSTransition
        timeout={2000}
        classNames='fade'
        key={key}>
        <Message
          isUser={ this.isUser}
          message = {this.state.messages[key].message}
          pseudo = {this.state.messages[key].pseudo}/>
       </CSSTransition>
    ))
    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className='message'>
              {messages}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire 
        length = {140}
        pseudo = { this.state.pseudo}
        addMessage = {this.addMessage}/>
      </div>
    )
  }
}

export default App
