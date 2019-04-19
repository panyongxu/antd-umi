import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function index() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `进入到当前页${count}次`
    fetch('/api/goods').then(res => {
      console.log(res)
      return res.json()
    }).then(res => console.log(res)
    )
    // axios('/api/goods').then(res => console.log(res));
  })
  return (
    <div>
      HOCKS Test
      {/* <button onClick={() => setCount(count + 1)}>点击按钮改变标题</button> */}
    </div>
  )
}
