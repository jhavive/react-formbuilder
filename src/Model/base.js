export class BaseFormItem {
    constructor(props) {
        this.name = props.name
        this.label = props.label
        this.value = props.value
    }

}

BaseFormItem.prototype.changeValue = (value) => {
    this.value = value
}