import React, { useEffect } from 'react'
import { fetchCounries } from "../view/home/action";
import { useDispatch, useSelector } from "react-redux";
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet';

const icon = new Icon({
    iconUrl:'/marker.png',
    iconSize:[20,20]  
});  

const CountryMap = () => {
    const dispatch = useDispatch();
    const { loading, stats } = useSelector((state) => ({
    loading: state.HomeReducers.countries.loading,
    stats: state.HomeReducers.countries.stats,
}));
  
useEffect(() => {
    dispatch(fetchCounries());
    }, [dispatch]);
   
    return (
        <>
          {loading ? (
            <div>loading....</div>
             ) : (
              <>
                {stats !== null && (
                  <Map 
                  center={[38,-97]} 
                  style={{ height: '100vh', width: '100%' }} 
                  zoom={5}>

                  <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {stats.map((country,index)=>(
                  <Marker position={[country.countryInfo.lat,country.countryInfo.long]}  key={index} icon={icon}>  
                    <Popup>
                        {country.country}-
                        {country.cases}
                    </Popup>
                  </Marker>
       ))};
                  </Map>
              )}
            </>
          )}
        </>
      );
}
export default CountryMap;