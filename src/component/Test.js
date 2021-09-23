import React from 'react'

const Test = () => {
  const name = "이범기"
  const naver = {
    name : "naver",
    url : "https://www.naver.com",
  }
  return (
    <div>
      <h1
      style={
        {
          color:"blue",
          backgroundColor:"#45a3a8"
          
        }
      }>
      나는 {name} {2+3}<br/>
      <a href={naver.url}>{naver.name}</a>
      </h1>
      
    
    </div>
  )
}

export default Test
