import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBackGiven: false}

  displayThankYou = () => {
    this.setState({isFeedBackGiven: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    const {isFeedBackGiven} = this.state

    const renderEmogybuttons = props => {
      const {name, imageUrl, id} = props
      return (
        <li className="list-item" key={id}>
          <button
            type="button"
            className="button"
            onClick={this.displayThankYou}
          >
            <img src={`${imageUrl}`} alt={`${name}`} className="emoji" />
          </button>
          <p className="emoji-name">{name}</p>
        </li>
      )
    }

    let result

    if (isFeedBackGiven === true) {
      result = (
        <div className="thankYou-container">
          <img
            src={`${loveEmojiUrl}`}
            alt="love emoji"
            className="love-emoji"
          />
          <h1 className="thank-you-greeting">Thank You!</h1>
          <p className="response-msg">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    } else {
      result = (
        <div>
          <div>
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
          </div>
          <ul className="emojies-container">
            {emojis.map(each => renderEmogybuttons(each))}
          </ul>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="feedback-container">{result}</div>
      </div>
    )
  }
}

export default Feedback
