'use client';
import React, { useEffect } from 'react'
import { testGet } from '../../../api';


const PhotosPage = () => {
  // console.log(testGet, "TG")
  useEffect(() =>{
    testGet().then(({data}) =>{
        console.log(data)
    })

  }, [])
  return (
    <div>
      <h1>Go</h1>
    </div>
  );
}

export default PhotosPage
