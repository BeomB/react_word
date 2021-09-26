import React from 'react'
import {useState} from 'react'
import Username from './Username';


const State = (props) => {
    // props.age = 100;
        console.log(props)
        // let name = "Mike";
        const [name,setName] = useState('Mike');
        const msg = props.age > 19 ? "성인입니다." : "미성년자 입니다."
        const [age,setAge] = useState(props.age);

    function changeName () {
        const newName = name === "Mike" ? "Jane" : "Mike";
        setName(newName)
        setAge(age+1);
        console.log(name)
    }
    // name = name === "Mike" ? "Jane" : "Mike";
        // console.log(name)
        // document.getElementById("name").innerText = name; // 업데이트를 위해 바닐라 JS 사용
    // 이러한 점을 보안하기 위해 모든 컴포넌트를 함수형으로 표현하여 Hooks 기능을 사용

    return (
        <div>
            <h2 id="name">{name}({props.age}) : {msg}</h2>
            <h2 id="name">{name}({age})</h2>
            <Username name={name}></Username>
            <button onClick={changeName}>Change</button>
        </div>
    


    )

}

export default State
