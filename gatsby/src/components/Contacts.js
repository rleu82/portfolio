import React from 'react';
import styled from 'styled-components';

export default function Contacts() {
  return (
    <div className="recentitems">
      <h3>Recent Posts</h3>
      <span>React, Google Maps API, PetFinder API</span>
      <p>
        Fetched data of dog rescue locations from PetFinder and displayed them
        on Google Maps. Locations are displayed on a list and plotted onto
        Google Maps. Clicking the list or map points displays relevant
        information for the location.
      </p>
      <span>JavaScript, HTML Canvas</span>
      <p>
        Traditional Frogger game with advance mechanics. - Max possible speed
        increases each level - Collect Gems for more points, gem points increase
        each level - Arcade sounds using Howler.js and vintage sound files -
        Animate.css used to animated game text - Score saved to local storage
      </p>
    </div>
  );
}
