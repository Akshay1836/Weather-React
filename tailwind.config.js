import { urlencoded } from 'express';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'bgimage':'url("https://in.images.search.yahoo.com/images/view;_ylt=AwrKEoQtv5dlk6QYOjq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2E2YzExMjQ5ODk1NDE5YzY2MDA4M2M1NDk3MWI2ZTI5BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dbg%2Bimage%2Bin%2Btailwind%2Breact%2Bjs%26type%3DE211IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1000&h=861&imgurl=www.positronx.io%2Fwp-content%2Fuploads%2F2022%2F07%2F18659-01.jpg&rurl=https%3A%2F%2Flaptrinhx.com%2Freact-js-tailwind-css-add-light-and-dark-mode-toggler-tutorial-1960776985%2F&size=41.1KB&p=bg+image+in+tailwind+react+js&oid=a6c11249895419c660083c54971b6e29&fr2=piv-web&fr=mcafee&tt=React+Js+Tailwind+CSS+Add+Light+and+Dark+Mode+Toggler+Tutorial+%7C+LaptrinhX&b=0&ni=21&no=2&ts=&tab=organic&sigr=K_Rt1_JvY6kf&sigb=458ge9dhsY2M&sigi=5W99WTVVoitl&sigt=sptPS13WOhTy&.crumb=ecvtMlMNcQH&fr=mcafee&fr2=piv-web&type=E211IN885G0")'
    }
  },
  },
  plugins: [],
}