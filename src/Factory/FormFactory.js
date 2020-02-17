import InputFormItem from '../Model/Input'
import { FORM_ITEM_TYPE } from '../Constants'
export default class FormFactory {
    createFormItem = (type, name) => {
        console.log(type)
        switch(type) {
            case FORM_ITEM_TYPE.DIV.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.TEXT_INPUT.key:
                let a = new InputFormItem({})
                return(a)
            case FORM_ITEM_TYPE.DATE_INPUT.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.DATETIME_INPUT.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.NUMBER.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.EMAIL.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.PHONE_NUMBER.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.CURRENCY.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.FILE.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.RADIO.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.CHECKBOX.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.AUTOCOMPLETE.key:
                return(
                    new InputFormItem()
                )
            case FORM_ITEM_TYPE.DROPDOWN.key:
                return(
                    new InputFormItem()
                )
            default:
                return(
                    new InputFormItem()
                )
        }
    }
}