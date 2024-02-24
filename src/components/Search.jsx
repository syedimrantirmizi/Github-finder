import axios from 'axios';
import React, { useState } from 'react'
import Profile from './Profile';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [userData, setUserData] = useState("")
    const [bgColor, setBgColor] = useState("[#1F2937]")
    const searchHandler = (e) => {
        e.preventDefault();
        if (!inputValue) {
            return;
        }
        fetchData(inputValue);
        setInputValue("");

    };
    const fetchData = async (searchValue) => {
        try {
            const response = await axios.get(
                `https://api.github.com/users/${searchValue}`
            );
            setUserData(response.data)
            
            setBgColor("white")
        } catch (error) {
            alert("Something went wrong");
            console.log("error", error);
        }
    };
    return (
        <>
            <form onSubmit={searchHandler} className='flex justify-center items-center pt-40'>
                <div className='relative max-w-fit'>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        className='w-[500px] h-[50px] rounded-full px-5 hover:border-black border-2 transition-all duration-500 outline-none focus:border-black'
                    />
                    <button type="submit">
                        <img src="/icons8-search-black.png" className='w-9 absolute top-[4px] right-3 fill-current' alt="" />
                    </button>
                </div>
            </form>
            <Profile avatar_url={userData?.avatar_url} bio={userData?.bio} bgColor={bgColor} />
        </>
    );
}

export default Search