import React from 'react'

const Css = () => {
    return (
        <div>
            <h1 style={
                {                                                 //인라인 스타일 css
                    color: "greenyellow",                  
                    backgroundColor:"ivory",    // 카멜 케이스
                    marginBottom : "30px"
                }
            }>
                Hello
            </h1>
            
            <h1 className="Box">
                Hello
            </h1>
            
        </div>
    )
}

export default Css
