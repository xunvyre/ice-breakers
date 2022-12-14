import React from 'react';
import placeholder from '../../../assets/images/placeholder-image.jpg';

const Single = () =>
{
  return (
    <section id="single-journal row">
      <h2 class="journal-title">My Example Journal</h2>
      <p class="journal-desc">
          This is an example paragraph. I need to get this long enough to wrap.
          The content of this paragraph will be dictated by user input from the create journal
          screen.
      </p>

      <div class="flex">

          <div class="single-img card bg-light">
              <img class="card-img-top img-preview" src={placeholder} alt=""/>
          </div>
          <div class="single-img card bg-light">
              <img class="card-img-top img-preview" src={placeholder} alt=""/>
          </div>

          <div class="dropdown">
              <button class="btn add-btn btn-info dropdown-toggle" id="add-photo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Add Photo
              </button>
              <div class="dropdown-menu" aria-labelledby="add-photo">
                  <input type="file" class="form-control-file new-journal dropdown-item" id="photo"/>
              </div>
          </div>
          
          <div class="dropdown">
            <button class="btn add-btn btn-info dropdown-toggle" id="share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Share
            </button>
            <div class="dropdown-menu" aria-labelledby="share">
                <input type="text" class="form-control-file new-journal dropdown-item" id="link" placeholder="Shareable Link Here"/>
            </div>
          </div>
        
      </div>

      <form class="form-group col-12">
          <div>
              <label for="commenting"></label>
              <textarea class="form-control" id="commenting" placeholder="Add a comment." rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-info col">Submit</button>
      </form>
      
      <div class="journal-comment col-12">
          <p>
              This is an example comment!<br />
              <span>09/13/2022 by Name Here</span>
          </p>
      </div>
    </section>
  )
};

export default Single;