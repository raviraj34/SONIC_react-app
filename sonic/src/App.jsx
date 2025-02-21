import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import plus from './assets/plus.svg'
import home from './assets/home.svg'
import save from './assets/saved.svg'
import upgrade from './assets/upgrade.svg'
import logo from './assets/logo.svg'
import message from './assets/msg.svg'
import send from './assets/send.svg'
import user from './assets/user.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersidetop"><img src={logo} alt="" className="logo" /><span><h3>SONIC</h3></span></div>
          <button className="midbtn"><img src={plus} alt="" className='addbtm' />NEW CHAT</button>

          <div className="uppersideBottom">
            <button className="query"><img src={message} alt="" />What is Programming ?</button>
            <button className="query"><img src={message} alt="" />How to fetch an API ?</button>
          </div>
        </div>

        <div className="lowerside">
          <div className="home"><img src={home} alt="" />     Home</div>
          <div className="save"><img src={save} alt="" />   Saved</div>
          <div className="upgrade"><img src={upgrade} alt="" />   Upgrade to premium</div>
        </div>
      </div>

      <div className="main">

        <div className="chats">
          <div className="chat">
            <img src={user} alt="" className='chatimg' /><p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae placeat accusantium iure vitae rerum voluptates, voluptate, architecto quis recusandae nisi excepturi eligendi reiciendis tempora fuga autem alias itaque asperiores.</p>
          </div>
          <div className="chat">
            <img src={logo} alt="" className='chatimg' /><p className='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias aut dignissimos, et numquam facilis quis dolores, debitis voluptatum magni eum dolor veritatis provident, vel est voluptates nam quod perferendis ea tempora ipsam ad. Esse corporis sapiente accusantium. Facere dolor sunt, odit perferendis quaerat labore ducimus suscipit! Ducimus cupiditate soluta, illum adipisci sint ea nesciunt recusandae maxime dolorum quos eum inventore pariatur dolore eligendi exercitationem! Alias aut, est iste provident soluta totam, cupiditate quas cumque similique eos perspiciatis. Nulla vitae optio minus. Hic doloribus placeat nesciunt vel mollitia rerum exercitationem commodi nostrum consequuntur praesentium. Sit ad earum eligendi labore cum?</p>
          </div>
         

        </div>
        <div className="chatfooter">
          <input type="text" placeholder='Type a message' />
          <button className="send-btn"><img src={send} alt="Send" /></button>
        </div>
      </div>

    </div>

  )
}

export default App
