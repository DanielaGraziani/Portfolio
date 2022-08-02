import React from 'react'
import Player from 'react-lottie-player'
import lottieJson from '../../public/assets/contact.json'

export default function ContactLottie() {
  return (
    <Player
    loop
    animationData={lottieJson}
    play
    // class='mx-auto transform hover:scale-105 duration-700 ease-in-out hover:rotate-6'
    // class='mx-auto w-full animate-pulse'
    // class='relative'
    // style={{z:[100]}}
    // style={{width:450, height:450}}
    />
  )
}
