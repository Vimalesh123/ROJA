import './App.css';
import React,{useState,useEffect} from 'react';
const App=()=>{
const[Quote,setQuote]=useState("");
const Getquote=()=>{
	fetch("https://type.fit/api/quotes")
	.then((res)=>res.json())
	.then((data)=>{
		let randomnum = Math.floor(Math.random() * data.length);
		setQuote(data[randomnum]);
	});
}
useEffect(()=>{
	Getquote();
},[]);

	return(<div id='petti'>
   <div>
   <h1 id="title">RANDOM QUOTE MACHINE</h1>
   </div>
<div id='boxs' className='textbox'>
<p id="txt">
{Quote.text }<br></br></p>
{Quote.authors}<br></br>

</div>

<div>
<a id="tweetquote"className="button" href={`https://instagram.com/vimalesh.28?igshid=YmMyMTA2M2Y=`} target="_blank">
<img id='vijay' border="0" alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/87/87390.png" width="100" height="100"></img>
</a>
<button id='btn' onClick={Getquote}>NEW QUOTE</button>
<div>
<footer id="siva">By : VIMALESH</footer>
</div>
</div></div>
);
}
export default App;
