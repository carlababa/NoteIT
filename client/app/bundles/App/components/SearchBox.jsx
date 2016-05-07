import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
export default class SearchBox extends React.Component {

  doSearch(queryText){
       console.log("hi im the searchtext")
       //get query result
       var queryResult=[];
       this.props.data.forEach(function(notes){
           if(notes.name.toLowerCase().indexOf(queryText)!=-1)
           queryResult.push(notes);
       });

       this.setState({
           query:queryText,
           filteredData: queryResult
       })
   }

   getInitialState(){
       return{
           query:          '',
           filteredData:   undefined
       }
   }

   renderResults() {
       if (this.state.filteredData) {
           return (
               <DisplayTable data={this.state.filteredData}/>
           );
       }
   }

   render(){
       return (
           <div className="InstantBox">
               <h2>Where are my Notes?</h2>
               <SearchBox query={this.state.query} doSearch={this.doSearch}/>
               {this.renderResults()}
           </div>
       );
   }

}
