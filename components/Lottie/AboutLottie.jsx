import React from 'react'
import Player from 'react-lottie-player'
import lottieJson from '../../public/assets/about.json'



export default function AboutLottie() {
  return (
    <Player
    loop
    animationData={lottieJson}
    play
    // class='mx-auto transform hover:scale-105 duration-700 ease-in-out hover:rotate-6'
    // class='mx-auto w-full animate-pulse'
    
    />
  )
}
