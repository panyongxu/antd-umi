

let course = {
  name: 'pan'
};

function getGoods() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(course)
    }, 2000);

  })
}



export default {
  namespace: 'count',
  state: {
    count: 0,
    list: {
      name: ''
    }
  },
  reducers: {
    add(state: any) {
      const newCount = state.count + 1
      return {
        ...state,
        count: newCount
      }
    },
    minus(state: any) {
      const newCount = state.count - 1
      return {
        ...state,
        count: newCount
      }
    },
    getList(state: any, {list}: any) {
      return {
        ...state,
        list: list
      }
    }
  },
  effects: {
    *anyceAdd(action:any, { call, put }:any) {
      const list = yield call(getGoods);
      yield put({ type: 'getList', list });
    },
  },
}

