import React, { useState } from "react";
import MyInput from "./UI/input/MyInput"


const SearchPanel = ({pHolder}) => {

    const [searchQuery, setSearchQuery] = useState('')

    return(
        <div>
            <MyInput 
                style={{width:"100%"}} 
                placeholder={pHolder}
                value ={searchQuery}
                onChange={e => setSearchQuery(e.target)}
            />
        </div>
    );
};

 export default SearchPanel;