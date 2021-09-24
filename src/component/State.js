import React from 'react'
import {useState} from 'react'


const State = () => {
        // let name = "Mike";
        const [name,setName] = useState('Mike');
    
    function changeName () {
        // name = name === "Mike" ? "Jane" : "Mike";
        const newName = name === "Mike" ? "Jane" : "Mike";
        console.log(name)
        setName(newName)
        // document.getElementById("name").innerText = name; // 업데이트를 위해 바닐라 JS 사용
    }

    // 이러한 점을 보안하기 위해 모든 컴포넌트를 함수형으로 표현하여 Hooks 기능을 사용

    return (
        <div>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    


    )

}

export default State
