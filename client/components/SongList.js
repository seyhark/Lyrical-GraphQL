import React, { useEffect } from 'react'

import gql from 'graphql-tag';
import { graphql } from "react-apollo";
const query = gql`
  {
  songs{
    id
    title
  }
}
`;
function SongList(props) {
  // console.log(props)
  if (props.data.loading) { return <div>Loading...</div> }
  return (
    <ul className="collection">
      {props.data.songs.map(song => {
        return (<li key={song.id} className={"collection-item"}>
          {song.title}
        </li>)
      })}
    </ul>
  )
}

export default graphql(query)(SongList)
