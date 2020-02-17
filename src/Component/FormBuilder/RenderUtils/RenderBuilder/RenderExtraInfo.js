import React from 'react'
import Form from '../../../../Component/Form'
import { Button } from '../../../../Component/Buttons'
import './styles.scss'

export class RenderExtraInfo extends React.PureComponent {

    state = {
        additionalInfo: []
    }

    componentDidMount = () => {
        this.setState({
            additionalInfo: this.props.selectedElement.props
        })
    }

    render = () => {
        return(
            <Form
                id="form1"
                onSubmit={() => this.props.saveChanges(this.state.additionalInfo)}
                preventSubmission
                >
                {
                    this.state.additionalInfo.length > 0 && this.state.additionalInfo.map((item,index) => {
                        return item.renderView({
                            name: item.key,
                            placeholder: item.label,
                            tabIndex: index,
                            required: true
                        })
                    })
                }
                <Button style_type="dark">Save</Button>
            </Form>
        )

    }
}