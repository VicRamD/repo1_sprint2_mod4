import React, { useEffect, useState } from 'react'

import axios from "axios";

import GenreCard from '../cards/GenreCard';
import { Link } from 'react-router-dom';
import ArtistBoard from '../cards/ArtistBoard';

const Dashboard = () => {
    //useEffect

    const [genres, setGenres] = useState();

        useEffect(()=>{
          const loadItems = async () => {
              const dataResults = await axios.get(`https://sound-zone-api-sp5.onrender.com/api/genres`);
              if(dataResults){
                setGenres(dataResults.data);
              } 
              //console.log(endpoint);
          };
          loadItems();
      }, []);

//https://sound-zone-api-sp5.onrender.com/api/genres
  return (
    <>

        <div>
            <h2 className='text-2xl'>Generos</h2>
            <div className='px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {genres ? genres.slice(0, 8).map(genre => <GenreCard key={genre.id} genre={genre}/>) : ""}
            </div>
        </div>
        
        <ArtistBoard/>

    </>
    
  )
}

export default Dashboard