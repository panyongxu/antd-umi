// 课程列表
let course = {
  name: 'pan'
};


export default {
  "get /api/goods": function (req:any, res:any, next:any) {
    setTimeout(() => {
      res.json({
        code: 0,
        course
      });
    }, 2500);
  }
};
