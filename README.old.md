# react-35-module-2

## class extends Component render()
import { Component } from 'react'

## state = {}
this.state - Object
<!-- перезапись состояния -->
this.setState({})
<!-- изменить состояние в зависимости от предыдущего -->
this.setState((prevState)=>{
    return {prop: prevState.prop + 1}
})
||
this.setState((prevState)=>({prop: prevState.prop + 1}))

## state = {prop: this.props.value}
static defaultProps = {prop: 0}

## поднятие состояния - передача методов ребенку через props, при вызове этих ментодов в ребенке, состояние будет изменяться в родителе
 
