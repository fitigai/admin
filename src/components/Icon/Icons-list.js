import React from "react"
import styled from "styled-components"
import Icon from "./Icon"
import { COLORS_VARIABLES } from "../../styles/GlobalStyleVariable"

const Svg = styled(Icon)`
  display: block;
  cursor: pointer;
  transition-duration: 0.3s;
  width: auto;
  height: 100%;
  &:hover {
    color: ${COLORS_VARIABLES.primary};
  }
`

export const ChatBubble = ({ className, colorIcon, heightIcon }) => (
  <Svg viewBox="0 0 84.853 84.853" className={className} color={colorIcon} height={heightIcon}>
    <g id="Union_1" data-name="Union 1" transform="translate(37.477 84.853) rotate(-135)" fill="none">
      <path d="M0,40.5A26.512,26.512,0,0,1,18.11,15.356L27,0l9.156,15.814A26.5,26.5,0,1,1,0,40.5Z" stroke="none" />
      <path d="M 26.49959754943848 61.99960327148438 C 32.24267959594727 61.99960327148438 37.6419563293457 59.76328277587891 41.70282363891602 55.70261383056641 C 45.76369094848633 51.64193344116211 48.00010299682617 46.24288177490234 48.00010299682617 40.5 C 48.00010299682617 36.08937454223633 46.67567825317383 31.8525218963623 44.17000961303711 28.24749565124512 C 41.71723937988281 24.71858787536621 38.31571960449219 22.02934837341309 34.33318328857422 20.47052192687988 L 32.70469284057617 19.83309555053711 L 26.99999809265137 9.979415893554688 L 21.48818397521973 19.49994850158691 L 19.6918773651123 20.09910774230957 C 17.58291816711426 20.80257415771484 15.60011863708496 21.82942771911621 13.79854488372803 23.15116119384766 C 12.01566505432129 24.45917510986328 10.44906520843506 26.02681541442871 9.142277717590332 27.81052207946777 C 6.432371616363525 31.50940132141113 4.999998092651367 35.89734649658203 4.999998092651367 40.5 C 4.999998092651367 46.24285507202148 7.236384868621826 51.64193344116211 11.29721164703369 55.70265579223633 C 15.35795783996582 59.7632942199707 20.75693130493164 61.99960327148438 26.49959754943848 61.99960327148438 M 26.49959754943848 66.99960327148438 C 11.86470508575439 66.99960327148438 -1.834920226428949e-06 55.13580322265625 -1.834920226428949e-06 40.5 C -1.834920226428949e-06 28.79689407348633 7.587118148803711 18.86592102050781 18.10978507995605 15.3560152053833 L 26.99999809265137 1.635742137295892e-06 L 36.1556396484375 15.81448173522949 C 46.01650619506836 19.6741886138916 53.00010299682617 29.27124214172363 53.00010299682617 40.5 C 53.00010299682617 55.13580322265625 41.13539886474609 66.99960327148438 26.49959754943848 66.99960327148438 Z" stroke="none" fill="currentColor" />
    </g>
  </Svg>
)

export const Mail = ({ className, colorIcon, heightIcon }) => (
  <Svg viewBox="0 0 63 45" className={className} color={colorIcon} height={heightIcon}>
    <g id="Groupe_28" data-name="Groupe 28" transform="translate(-1482 135.538)">
      <g id="Rectangle_89" data-name="Rectangle 89" transform="translate(1482 -135.538)" fill="none" stroke="currentColor" strokeWidth="5">
        <rect width="63" height="45" rx="5" stroke="none" />
        <rect x="2.5" y="2.5" width="58" height="40" rx="2.5" fill="none" />
      </g>
      <path id="Tracé_6" data-name="Tracé 6" d="M1539.813-131.7l-28.068,15.9-26.056-15.9" transform="translate(0.97 1.13)" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
    </g>
  </Svg>
)
