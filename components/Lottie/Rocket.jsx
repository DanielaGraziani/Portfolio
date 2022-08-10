import React from 'react'
import Player from 'react-lottie-player'
import lottieJson from '../../public/assets/rocket.json'

export default function Rocket() {
  return (
   
        <Player
        loop
        animationData={lottieJson}
        play
        // class='mx-auto transform hover:scale-105 duration-700 ease-in-out hover:rotate-6'
        // class='relative'
        // style={{z:[100]}}
        style={{width:150, height:150}}
        />

  )
}
