import React from 'react'
import { useState } from 'react'

const Word = ({ word }) => {
    const [isShow, setIsShow] = useState(false)
    const [isDone, setIsDone] = useState(word.isDone)                  /// isDone 을 word.isDone으로 설정해준다.

    function toggleShow() {
        setIsShow(!isShow)
        // console.log(!isShow)
    }

    function toggleDone() {
        setIsDone(!isDone);
    }


    return (

        <tr className={isDone ? "off" : " "}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>   {/* isShow 가 True이면 보여준다. */}
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? " 숨기기" : " 보기"}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>

    )

}

export default Word
