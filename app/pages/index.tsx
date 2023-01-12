import React from "react"
import Head from 'next/head'
import '../styles/globals.css';
import JwtDecoder from "./jwt-decoder";

export default function Home() {
  return <JwtDecoder />
}