import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  
  constructor(){
    super(); //this is must if we write a Constructor
    this.state={
      articles: [],
      loading:false
    }
    
  }
  async componentDidMount(){
    //this runs after the render gets excuted
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=8db92fc59e364d5f81bb07718c602a0f"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles})
  }
  render() {
    return (
      <>
        <div className="container my-3 ">
          <h3>Daily-News : Top Headlines</h3>
          <div className="row">
          { this.state.articles.map((element)=>{
            return <div className="col" key={element.url}>
              <Newsitem
                newsurl={element.url}
                title={element.title ? element.title : ""}
                description={element.description?((element.title + element.description).slice(0,166).slice((element.title.length))): ""}
                imgurl={element.urlToImage}
              />
            </div>
          })} 
          </div>
        </div>
      </>
    );
  }
}
