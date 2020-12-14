import React from 'react';

export const Home = () => {


    return (
    
        
            <div className="row mt-5">
                <div className="col-3">
                    <img 
                        src={ `../assets/AndresW.jpeg` }
                        alt="Andres Wellmann"
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                        />
                </div>

                <div className="col-6">
                    <h3> Carlos Andres Wellmann Peña </h3>
                    <hr/>

                    <h4>Who i am?</h4>
                        <p>
                            Hey!! i'm a guy from Guatemala, i have 21 years old and now i'm in 7th semester of systems engineering. 💻
                        </p>          

                    <h4>My skills</h4>
                    <p>
                        I work with React, redux
                    </p>

                    <h4>My jobs</h4>
                </div>

                <div className="text-center">
                    <h1>Hola</h1>
                </div>

            <footer>
                Andres Wellmann - { new Date().getFullYear() }
            </footer>

            </div>
      
    )
}
