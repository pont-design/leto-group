import React from 'react';

export const StatisticBlock = () => {
  return (
    <div className="technologies-statistic">
      <div className="technologies-sales_small technologies-sales_small_sales">
        <p className="technologies-sales__heading_small text-numbers">
          5 000 000 +
        </p>
        <p className="technologies-sales__description_small text-1">
        Производительность яиц в сутки
        </p>
      </div>
      <div className="technologies-sales_small technologies-sales_small_inovations">
        <p className="technologies-sales__heading_small text-numbers">SANOVO</p>
        <p className="technologies-sales__description_small text-1">
          Завод оборудован современной техникой датской компании
        </p>
      </div>
      <div className="technologies-sales_big technologies-sales_big_area">
        <p className="technologies-sales__heading_big text-numbers-big">
          3000 Га
        </p>
        <p className="technologies-sales__description_big text-1">
          Рабочая площадь преприятия
        </p>
      </div>
    </div>
  );
};
