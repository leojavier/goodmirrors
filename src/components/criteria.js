import React from 'react';

const Criteria = () => (
<section className='container-xl criteria'>

    <div className="row align-items-center">
        <div className="col-lg-2 col-sm-12">
        <img className="criteria__artist" src="images/artist.jpg" alt="artist"/>
        </div>
        <div className="col-lg-8 col-sm-12">
            <h2>Criteria</h2>
            <p>
            Eligible artists whose work is rooted in uplifting their community.
            </p>
        </div>
        <div className="col-lg-2 col-sm-12"></div>
    </div>

    <div className="row align-items-center">
        <div className="col-12">
            <ul>
            <li>• Have an existing platform<br/> with examples of community work</li>
            </ul>
            <p>
            <small>
                (recognized for work through other grants, community awards,
                partnerships, programs, website, social media presence)
            </small>
            </p>
            
        </div>
    </div>

    <div className="row align-items-center">
        <div className="col-lg-2 col-sm-12">
        
        </div>
        <div className="col-lg-8 col-sm-12">
        <ul><li>• Be an emerging creative who is in the process of building a platform 
                in their respective fields
            </li></ul>
            <a className='button' href="https://form.jotform.com/210458198232052" target="blank">Apply Now!</a>
        </div>
        <div className="col-lg-2 col-sm-12">
        <img className="criteria__art" src="images/art.jpg" alt="artist"/>
        </div>
    </div>
    
</section>
)

export default Criteria