import React from "react";

const MenuItems = ({ items }) => {
  return (
    <>
      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5 ">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;

                return (
                  <div
                    className="item1 col-12 col-md-6 col-lg-6 col-xl-4 Item-inside "
                    key={id}
                  >
                    <img
                      src={image}
                      alt={name}
                      srcset=""
                      className="image img-fluid d-block mx-auto mb-3"
                    />
                    <div className="main-title mt-4 ">
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </div>
                    <div className="menu-price-book mb-5">
                      <div className="price-book-divide ">
                        <h2>Price:{price}</h2>

                        <a href="">
                          <button className="btn btn-outline-info button">
                            Order Now
                          </button>
                        </a>
                      </div>
                      <p className="para">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
