import React from 'react';
import Single from './Single-View/Single';
import newJ from '../../assets/images/journify-new-journal.png';
import placeholder from '../../assets/images/placeholder-image.jpg';

const Journals = () =>
{
  return (
    <section id="journals">
        <article>
            <a href="#upload">
                <div class="journal card bg-light width18">
                    <img class="card-img-top img-preview" src={newJ} alt="A stylized pencil writing on a textured white background."/>
                    <div class="card-body">
                        <h2 class="card-title">A new journey...</h2>
                    </div>
                </div>
            </a>
        </article>

        <article>
            <a href="click for single journal">
                <div class="journal card bg-light width18">
                    <img class="card-img-top img-preview" src={placeholder} alt=""/>
                    <div class="card-body">
                        <h2 class="card-title">My Example Journal</h2>
                    </div>
                </div>
            </a>
        </article>
        <Single/>i0n 9n78o65rel06dfgyhbgc
    </section> 
  )
  
}

export default Journals;