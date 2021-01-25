import React, { Component } from "react";
import validator from 'validator';

class ShortenURL extends Component {
   constructor() {
      super()
      this.state = {
         "copied": false,
         "isLoading": false,
         "api": "https://api.shrtco.de/v2/shorten?url=",
         "url": "",
         "fullData": [],
         "error": { "isError": false, "text": "Please add a link" }
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleClick = this.handleClick.bind(this)
   }


   getData() {
      const endpoint = this.state.api + this.state.url;
      fetch(endpoint)
         .then(blob => blob.json())
         .then(data => {
            this.setState(prev => {
               return {
                  ...prev,
                  fullData: [...prev.fullData, [data.result.original_link, data.result.full_short_link]],
                  "isLoading": false
               }
            })
         });
   }

   handleSubmit(e) {
      e.preventDefault();
      if (validator.isURL(this.state.url)) {
         this.setState({
            "isLoading": true
         })
         this.getData()
      } else {
         this.setState(prev => {
            return {
               ...prev,
               "error": { "isError": true, "text": "Please add a link" }
            }
         })
      }
   }
   handleChange(e) {
      const { name, value } = e.target;
      this.setState(prev => {
         return {
            ...prev,
            [name]: value,
            "error": { "isError": false, "text": "Please add a link" }
         }
      })
   }

   handleClick(e) {
      const elId = e.target.dataset.id
      const elLink = e.target.dataset.link
      const copyText = document.querySelector(`#${elId}`);
      copyText.value = elLink;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.setState(prev => {
            return {
               ...prev,
               "copied": true
            }
         });
      }
      
      
      render() {
         const {error, copied, isLoading} = this.state;
         const displayError = error.isError ? error.text : '';
         const fullLink = this.state.fullData.map((link, i) =>
         <div className="shortened-url" key={i}>
            <p className="url">{link[0]}</p>
            <div className="url-cont">
               <p className="short-url"><a href={link[1]}>{link[1]}</a></p>
               <div className="button-wrapper" onClick={this.handleClick}>
                  <input className="copyText" type="text" id={`link${i}`}/>
                  <button className={`button ${copied && "copied"}`} data-id={`link${i}`} data-link={link[1]}>{copied ? "Copied" : "Copy"}</button>
               </div>
            </div>
         </div>);
      return (
         <section className="shorten-url">
            <div className="wrapper">
               <form className="input-bg" onSubmit={this.handleSubmit}>
                  <div className="input-wrapper">
                     <input name="url" type="text"  placeholder="Shorten a link here..." onChange={this.handleChange} className={`input ${error.isError && "red"}`}/>
                     <p className="error">{displayError}</p>
                  </div>
                  <button className="button" type="submit">Shorten It!</button>
               </form>
               <div className="shortened-urls">
                  <div className={`loading ${isLoading && "show-loading"}`}></div>
                  {fullLink}
               </div>
            </div>

         </section>
      )
   }
}

export default ShortenURL;