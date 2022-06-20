import React from "react";


const BoardCard = ({cardInfo}) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          <div className="card-label green colorblindable"></div>
          <div className="card-label yellow colorblindable"></div>
          <div className="card-label red colorblindable"></div>
          <div className="card-label orange colorblindable"></div>
          <div className="card-label blue colorblindable"></div>
          <div className="card-label purple colorblindable"></div>
          <p>
            {cardInfo.title}
            {cardInfo.description}
          </p>
        </div>
        <div className="card-icons">
          {cardInfo.dueDate ? 
          (<i className="clock-icon sm-icon overdue-recent completed">
            {cardInfo.dueDate}
          </i>)
          : null }
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
