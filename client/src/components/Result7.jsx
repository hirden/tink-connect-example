import React from 'react';

export default class Result1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topCategories: [{
        name: 'Restaurants',
        img: 'icon-restaurants1.png'
      }, {
        name: 'Bars',
        img: 'icon-bars1.png'
      }, {
        name: 'Shopping',
        img: 'icon-shoppings1.png'
      }]
    };
  }

  render() {
    return (
      <div className="section-result7">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">

            <div className="large-12 cell">
              <h1 style={{ color: '#F9BFAC' }}>Favourite category</h1>
              <h3 style={{ paddingTop: '20px' }}>Which category did you spend the most on?</h3>
            </div>

            <div className="large-4 text-center cell"><a href="result-8" style={{ color: '#fff' }}>
              <div className="card-light">
                <img src={this.state.topCategories[0].img} />
                <h3 style={{ paddingTop: '30px' }}>{this.state.topCategories[0].name}</h3>
              </div></a>
            </div>

            <div className="large-4 text-center cell"><a href="result-8" style={{ color: '#fff' }}>
              <div className="card-light">
                <img src={this.state.topCategories[1].img} />
                <h3 style={{ paddingTop: '30px' }}>{this.state.topCategories[1].name}</h3>
              </div></a>
            </div>

            <div className="large-4 text-center cell"><a href="result-8" style={{ color: '#fff' }}>
              <div className="card-light">
                <img src={this.state.topCategories[2].img} />
                <h3 style={{ paddingTop: '30px' }}>{this.state.topCategories[2].name}</h3>
              </div></a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}