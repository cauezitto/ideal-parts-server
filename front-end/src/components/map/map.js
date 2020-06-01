import React from 'react';

import './GoogleMap.css'

import {MdPlace} from 'react-icons/md'

import Title from '../../components/fonts/modalTitle'

function map({url}) {
  return (
  <>
      <div className = "mapContainer" >
        <Title>
          {'Onde estamos '}
          <MdPlace />

        </Title>
        <iframe src= {url}
        className = "map"
        frameborder="0"
        style = {{border:0}}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"></iframe>

      </div>
  </>
  )
}

export default map;