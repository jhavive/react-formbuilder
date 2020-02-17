import React from 'react'
import RenderForm from './RenderUtils/RenderForm'
import RenderBuilder from './RenderUtils/RenderBuilder'

const FormBuilder = (props) => props.builder ? <RenderBuilder/> :<RenderForm name={props.name} formData={props.formData}/>

export default FormBuilder