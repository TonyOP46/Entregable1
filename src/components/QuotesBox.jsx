import '../css/all.min.css'
import '../css/main.css'
import quotes from '../../quotes.json'
import { useState } from 'react';

const QuotesBox = () => {

    const ramdonQuotes =Math.floor(Math.random()*quotes.length)

    const [quote, setQuote]=useState(0)

    const RamQuo =()=>{
        setQuote(ramdonQuotes)
    }

    const color=["#BAB328", "#22FA08", "#FB1102", "#0220FB", "#02FBCE", "#FB8E02", "#BF02FB", "#FB02A8", "#774968"]

    const ColorRamdon = color[Math.floor(Math.random()*color.length)]

    document.body.style = `background: ${ColorRamdon}`

    return (
        <div className='Home' style={{color: ColorRamdon}}>
            <i className='i'><i class="fa-solid fa-quote-left"></i></i>
            <p>{quotes[quote].quote}</p>
            <h1>{quotes[quote].author}</h1>
            <button onClick={RamQuo}></button>
        </div>
    );
};

export default QuotesBox;