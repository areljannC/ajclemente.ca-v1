import React from 'react';
import posed from 'react-pose';

const Card = posed.div({
  pressable: true,
  hoverable: true,
  init:  { scale: 1    },
  press: { scale: 0.98 },
  hover: { scale: 1.02 }
});

const PoseCard = ({
  scrollAnimation, thumbnail, title, description, tags, linkInfo, linkLive
}) => (
  <Card>
    <div className="card" 
      data-aos={scrollAnimation}
    >
      <div className="c-card-grid">
        <div className="c-card-grid-panel-left">
          <figure className="image">
            <img src={thumbnail} />
          </figure>
        </div>
        <div className="c-card-grid-panel-right">
          <div className="card-content">
          <div className="content has-text-centered">
            <h1 className="is-size-3-desktop is-size-4-tablet is-size-5-mobile c-text-color-black">{title}</h1>
            <p className="is-size-6 c-text-color-black">{description}</p>
            <div className="c-tags">
              {
                tags.map((tag) => (
                  <span className="tag">{tag}</span>
                ))
              }
            </div>
            <div className="level">
              <div className="level-item">
                <a href={linkInfo} target="_blank" className="is-size-6 c-text-color-blue">More Info</a>
              </div>
              <div className="level-item">
                <a href={linkLive} target="_blank" className="is-size-6 c-text-color-blue">View Live</a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  </Card>
);

export default PoseCard;