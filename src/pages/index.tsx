import React, { Component } from 'react'
import { connect } from 'dva'


@connect(
  (state: any) => ({
    count: state.count.count,
    name: state.count.list.name,
  }),
  {
    add: () => ({ type: 'count/add' }),
    minus: () => ({ type: 'count/minus' }),
    anyceAdd: () => ({ type: 'count/anyceAdd' }),
  }
)
export default class Index extends Component<any> {
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    this.props.anyceAdd()
  }
  render() {
    const { add, minus, count, name } = this.props;

    return (
      <div>
        <h1>count: {count}</h1>
        <h2>List: {!name ? '加载中' : name}</h2>
        <hr />
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        {/* <button onClick={() => anyceAdd()}>延迟加载</button> */}
      </div>

    )
  }
}

