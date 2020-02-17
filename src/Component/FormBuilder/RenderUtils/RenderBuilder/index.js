import React from 'react'
import './styles.scss'
import { FORM_ITEM_TYPE } from '../../../../Constants'
import { RenderExtraInfo } from './RenderExtraInfo'
import { Button } from '../../../../Component/Buttons'
import FormFactory from '../../../../Factory/FormFactory'


const formFactory = new FormFactory()

export default class RenderBuilder extends React.Component{

    state = {
        formItems: [],
    }

    addItemsToForm = (e) => {
        let element = e.target
        let key = element.getAttribute('data-label')
        let item = formFactory.createFormItem(key, 'Name')
        this.setState({
            formItems: [...this.state.formItems, item]
        })
    }

    selectElement = (e) => {
        let element = e.target
        this.setState({
            activeInput: element.getAttribute('data-type')
        })
    }

    saveChanges = (data) => {
        let tempArr = this.state.formItems
        tempArr[this.state.activeInput].additional_info = data
        this.setState({
            formItems: tempArr
        })   
    }

    render = () => <div className="dragable-container">
        <div className="input-type-container" onClick={this.addItemsToForm}>
            {
                Object.keys(FORM_ITEM_TYPE).map(i => {
                    let input = FORM_ITEM_TYPE[i]
                    return(
                        <div className="input-selector" data-label={input.key}>{input.label}</div>
                    )
                })
            }
        </div>
        <div className="custom-form-container" onClick={this.selectElement} >
        {
            this.state.formItems && this.state.formItems.length > 0 && this.state.formItems.map((item,index) => {
                return item.renderBuilderView(index)
            })
        }
        {
            this.state.formItems.length > 0 && <div className="button-container">
                <Button style_type="dark" onClick={() => this.props.saveJSON(this.state.formItems)}>Save</Button>
            </div>
        }
        </div>
        <div className="extra-info">
        {
            this.state.activeInput && <RenderExtraInfo index={this.state.activeInput} selectedElement={this.state.formItems[this.state.activeInput]} saveChanges={this.saveChanges} />
        }
        </div>
    </div>

} 