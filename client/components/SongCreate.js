import React, { Component } from 'react'
import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
import { gql, useQuery, useMutation } from '@apollo/client';
// const [addTitle] = useMutation(mutation);
export class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("sadf")
        console.log(this.props)
        // addTitle({
        //     variables: {
        //         title: this.state.title
        //     }
        // })

    }
    render() {
        // const { loading, error, data } = useMutation(mutation);
        // console.log()

        return (
            <div>
                <h4>Create a New Song</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song's Title</label>
                    <input
                        onChange={e => this.setState({ title: e.target.value })}
                        value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}
const mutation = gql` 
mutation addSong($title:String) {
	addSong(title:$title){
    id
    title
  }
}`

export default graphql(mutation)(SongCreate)
