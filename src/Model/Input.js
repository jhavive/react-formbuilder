import React from 'react'
import { BaseFormItem } from "./base";

const Input = (props) => (
    <label>{props.label}<input type="text" {...props}/></label>
)

export default class InputFormItem extends BaseFormItem {

    props = []

    constructor(options) {
        super(options)
        if(!options.metaLock){
            let placeholder = new InputFormItem({
                name: 'placeholder',
                placeholder: 'Placeholder',
                label: 'Placeholder',
                metaLock: true
            })
            this.props.push(placeholder)
            
            let Label = new InputFormItem({
                name: 'label',
                placeholder: 'Label',
                label: 'Label',
                metaLock: true
            })
            this.props.push(Label)
        }
    }
}

InputFormItem.prototype.onChange = function(event) {
    console.log(event.target)
    this.value = event.target.value
}

InputFormItem.prototype.getJSON = function() {
    return({ [this.name]: this.value })
}

InputFormItem.prototype.getBuilderJSON = function() {
    return this
}

InputFormItem.prototype.getMeta = function() {
    return this.props
}

InputFormItem.prototype.renderView = function(options) {
    return(
        <Input {...options} onChange={this.onChange.bind(this)}/>
    )
}

InputFormItem.prototype.renderBuilderView = function(index){
    return( 
        <div className="custom-form-container" onClick={this.selectElement} style={{ border: '0.5px solid #e8e8e8', minHeight: '100px' }} data-type={index}>Input</div>
    )
}