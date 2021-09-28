import React from 'react'
import { useParams } from 'react-router';
import dummy from '../db/db.json'
import Word from './Word';

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
            <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>    
    )
}

export default Day
    