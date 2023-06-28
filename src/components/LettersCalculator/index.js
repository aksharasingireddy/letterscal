// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {lettersCount: 0}

  updateLetterCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="letter-calculator-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="letters-calculator-img"
          alt="letters calculator"
        />
        <div className="letter-calculator-txt-con">
          <h1 className="letter-calculator-heading">
            Calculate the Letters you Enter
          </h1>

          <div>
            <label htmlFor="input" className="letter-calculator-label-txt">
              Enter the phrase
            </label>
            <br />
            <input
              id="input"
              type="text"
              onChange={this.updateLetterCount}
              className="letter-calculator-input"
              placeholder="Enter the phrase"
            />
          </div>

          <p className="letter-calculator-counter">
            No of letters:{lettersCount}
          </p>
        </div>
      </div>
    )
  }
}

export default LetterCalculator
