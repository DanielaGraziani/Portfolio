import React from 'react'
import Player from 'react-lottie-player'
import lottieJson from '../../public/assets/web.json'

export default function Web() {
  return (
   
        <Player
        loop
        animationData={lottieJson}
        play
        // class='mx-auto transform hover:scale-105 duration-700 ease-in-out hover:rotate-6'
        // class='relative'
        // style={{z:[100]}}
        // style={{width:550, height:650}}
        />

  )
}
