import React from 'react'
import { useParams } from 'react-router';
import dummy from '../db/db.json'

const Day = () => {

    const useparam = useParams();
    console.log(useparam)
    const day = useparam.day
    const wordList = dummy.words.filter(word => (
     word.day === Number(useparam.day)
        ))
    



    return (
    <>
    <table>
        <tbody>
            {wordList.map(word => (
                <tr key={word.id}>
                <td>{word.eng}</td>        
                <td>{word.kor}</td> 
                </tr>
            ))}
        </tbody>
    </table>
    </>    
    )
}

export default Day
    