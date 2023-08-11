import * as React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import Tenzies from './Tenzies';
import Rock from './Rock';
import Taquin from './Taquin';


export default function AllGames(props) {
  return (
    <>
    < Rock />
    <hr />
    <Tenzies/>
    <hr />
    <Taquin/>
    </>
  )
}
