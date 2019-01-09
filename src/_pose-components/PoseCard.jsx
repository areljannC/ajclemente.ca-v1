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
  thumbnail, title, description, tags, linkInfo, linkLive
}) => (
  <Card>
    <div className="card">
      <div className="c-card-grid">
        <div className="c-card-panel-left">
          <figure className="image">
            <img src={thumbnail} />
          </figure>
        </div>
        <div className="c-card-panel-right">
          <div className="content has-text-centered">
            <h1 className="is-size-3-desktop is-size-4-tablet is-size-4-mobile">{title}</h1>
            <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">{description}</p>
            <div className="c-tags">
              {
                tags.map((tag) => (
                  <span className="tag is-size-6-desktop is-size-7-tablet is-size-7-mobile">{tag}</span>
                ))
              }
            </div>
            <div className="level is-mobile">
              <div className="level-item">
                <a className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">More Info</a>
              </div>
              <div className="level-item">
                <a className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">View Live</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default PoseCard;