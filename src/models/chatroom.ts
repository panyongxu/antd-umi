import axios  from 'axios'


const getChatRooms =  () => {
  return axios.get('/api/chatrooms') 
}

export default {
  namespace: 'chatroom',
  state: {
    roomList: []
  },
  reducers: {
    roomList (state: any, {roomList}:any) {
      return  {
        ...state,
        roomList
      }
        
    }
  },
  effects: {
    *anyceList(action: any, { call, put }: any) {
      const {data:roomList} = yield call(getChatRooms)
      console.log(roomList);
      
      yield put({type:'roomList', roomList})
    },
  },
}

