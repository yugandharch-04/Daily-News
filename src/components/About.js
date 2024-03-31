import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                About
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                This is an useful website which helps to get some global news
                daily which updates itself using API and simple interactive UI
                makes users to get acquainted with the website which gives a
                good user experience in using the website
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Why should we use the wesite ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Using a news website is essential for staying informed about
                current events and gaining insights into various topics. These
                platforms offer a convenient way to access diverse coverage,
                multiple perspectives, and in-depth analysis on local, national,
                and international news. By utilizing a news website, individuals
                can stay updated on the latest developments, understand
                different viewpoints, and make well-informed decisions about the
                world around them, all at their own pace and convenience.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Other Information
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                doloremque est obcaecati perferendis neque voluptatibus fugit,
                deserunt suscipit pariatur beatae? Iusto aspernatur officiis
                esse rerum, maxime omnis accusantium quo, dolore, atque sunt
                impedit id similique illum temporibus magni cumque eveniet.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
