import React from 'react'
import HomePageComponent from '../HomePage-Component/HomePageComponent'
import './HomePageComponentWrapper.css'
import Banner from '../Banner/Banner'
function HomePageComponentWrapper() {
  return (
    <div className='HomePageComponentWrapper'>
      <div><Banner /></div>
    <div className='HomePageComponentWrapper__div'> 
        <HomePageComponent url = 'https://m.media-amazon.com/images/I/71Iq2sPt3lL._AC_UX466_.jpg' title="Rapoo Men's Winter Ski Snow Jacket Mountain Waterproof Windproof Rain Jacket" price= "$45" rating={5} id="49538094" />
        <HomePageComponent url = 'https://m.media-amazon.com/images/I/51IcqwBWweL._AC_SX569_.jpg' title="YETI Rambler 20 oz Travel Mug, Stainless Steel, Vacuum Insulated with Stronghold Lid"  price= "$38" rating={6}  id="49538094"/>
        <HomePageComponent url = 'https://m.media-amazon.com/images/I/61FWdq20qBL._AC_SX679_.jpg' title="Sajpgmsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price= "$106" rating={5}  id="4903850"/>
    </div>
<div className='HomePageComponentWrapper__div'>
        <HomePageComponent url = 'https://m.media-amazon.com/images/I/713Nb6CHS-L.__AC_SX300_SY300_QL70_FMwebp_.jpg' title="Bluetooth Speakers,MusiBaby Speaker,Outdoor,Wireless,Waterproof, Portable Speaker,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home,Party,Gifts(Black)"  price= "$21" rating={4} id="3254354345"/>
        <HomePageComponent url = 'https://m.media-amazon.com/images/I/51+afNp1sWL._AC_SX425_.jpg' title="AirPods Pro (2nd Generation) Wireless Earbuds, Wireless Headset with Touch Control, Noise Cancelling, Built-in Microphone with Charging case for iPhone/Android/Samsung/iOS - White"  price= "$12.5" rating={7} id="90829332"/>
        <HomePageComponent url = 'https://m.media-amazon.com/images/I/612kg3rGyYL.__AC_SX300_SY300_QL70_FMwebp_.jpg' title="Apple iPhone 11, 64GB, Black - Unlocked (Renewed)" price= "$350" rating={7} id="9082933051"/>
        
</div>
<div className='HomePageComponentWrapper__div'>
  <HomePageComponent url = 'https://m.media-amazon.com/images/I/61Qpkx-ObhL._AC_SX569_.jpg' title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra WGaoye Blue Light Blocking Glasses - 3 Pack Fashion Square Fake Eyeglasses, Anti UV Ray Computer Gaming Glasses, Blue Blockers Glasses for Women/Men, Matte Black+Leopard+Transparentide Dual WQHD 5120 x 1440"  price= "$29" rating={7} id="9082933097"/>
  <HomePageComponent url = 'https://m.media-amazon.com/images/I/61gpbEsPY4L._AC_SX425_.jpg' title="ASUS RT-AX88U Pro (AX6000) Dual Band WiFi 6 Extendable Gaming Router" price= "$199" rating={6} id="23445930"/>
  <HomePageComponent url = 'https://m.media-amazon.com/images/I/A1dgKQwBs2L._AC_UX522_.jpg' title="PUMA Kids' Evercat Transformation Duffel" price= "$25" rating={6} id="23445930"/>

  </div>
    </div>
  )
}

export default HomePageComponentWrapper