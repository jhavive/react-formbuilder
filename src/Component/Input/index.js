import React from 'react'
import './styles.scss'
/**
 * @param {disabled} boolean -  Default value is none
 * @param {max} number -  Default value is none
 * @param {min} number -  Default value is none
 * @param {size} number -  Default value is none
 * @param {step} number -  Default value is none
 * @param {maxLength} number -  Default value is none
 * @param {pattern} string -  Default value is none
 * @param {readonly} string -  Default value is none
 * @param {required} boolean -  Default value is none
 * @param {value} string -  Default value is none
 * @param {type} string -  Default value is none
 */

class Input extends React.Component {
  state = {
    value: this.props.value || ''
  }

  getValue = () => {

  }

  onBlur = value => {
    this.setState({ value })
    this.props.onChange(value)
  }

  onChange = e => {
    let value = e.target.value
    const { type } = this.props
    if (value === '') {
      this.onBlur(value)
      return
    }
    switch (type) {
      case 'number':
      case 'otp':
        this.isNumber(value) && parseInt(value) >= 0 && this.onBlur(value)
        return
      case 'phone':
        this.isNumber(value) && parseInt(value) >= 1 && this.onBlur(value)
        return
      default:
        this.onBlur(value)
    }
  }

  isNumber = val => {
    return !isNaN(val)
  }

  setType = type => {
    switch (type) {
      case 'text':
      case 'name':
      case 'number':
      case 'phone':
        return 'text'
      case 'date':
        return 'date'
      default:
        return 'text'
    }
  }

  maxLength = type => {
    switch (type) {
      case 'phone':
        return 10
      default:
        return ''
    }
  }

  render () {
    const {
      disabled,
      max,
      min,
      maxLength,
      pattern,
      readonly,
      required,
      size,
      step,
      value,
      type,
      placeholder
    } = this.props
    return (
      <div className='inputBox'>
        <input
          className={this.props.name}
          // type={this.setType(type)}
          // disabled={disabled}
          // max={max}
          // maxLength={this.maxLength(type)}
          // min={min}
          // pattern={pattern}
          // readOnly={readonly}
          // required={required}
          // size={size}
          // step={step}
          // value={this.state.value}
          // onChange={e => this.onChange(e)}
          // onBlur={this.onBlur}
          placeholder={placeholder}
          {...this.props}
        />
      </div>
    )
  }
}

export default Input
