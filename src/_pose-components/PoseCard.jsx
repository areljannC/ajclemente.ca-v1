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
          <div className="content has-text-centered">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="c-tags">
              {
                tags.map((tag) => (
                  <span className="tag">{tag}</span>
                ))
              }
            </div>
            <div className="level is-mobile">
              <div className="level-item">
                <a>More Info</a>
              </div>
              <div className="level-item">
                <a>View Live</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default PoseCard;