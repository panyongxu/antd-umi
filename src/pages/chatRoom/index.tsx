import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'dva'


@connect(
  (state: any) => ({
    roomList: state.chatroom.roomList
  }),
  {
    anyceList: () => ({ type: 'chatroom/anyceList' })
  }
)

class ChatRoom extends Component<any> {
  componentDidMount() {
    this.props.anyceList()
  }
  render() {
    const { roomList } = this.props
    console.log(roomList);

    return (
      <div className={styles.flex}>
        <section className={styles.left}>
          <ul>
            {roomList.map((item: any) =><li key={item.name}>{item.name}</li>)}
          </ul>
        </section>
        <section className={styles.right}>
          张三 进入聊天室
        </section>
      </div>
    )
  }

}

export default ChatRoom
