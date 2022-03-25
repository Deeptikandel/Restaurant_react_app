import React from 'react'

const MenuCard = ({ menuData }) => {


  return (
    <>
      <section className="main-card-container">
      {menuData.map((CurrElem) => {
        return (
          
          <>
          
          <div className="card-container" key={CurrElem.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number subtile">{CurrElem.id}</span>
                <span className="card-author subtile">{CurrElem.name}</span>
                  <h2 className="card-title">{CurrElem.name}</h2>
                <span className="card-description subtile">
                  {CurrElem.description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={CurrElem.image} alt="images"className="card-media"/>
              <span className="card-tag subtile">Order Now</span>
            </div>
          </div>
            
          </>
        );
      })}
          </section>
    </>
  )
}

export default MenuCard