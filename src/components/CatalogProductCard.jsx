import React from 'react';

const CatalogProductCard = ({image, name, price}) => {
    return (
        <div className="flex items-center gap-4">
        <img
          src={`${image}`}
          alt={name}
          className="w-16 h-24 rounded-xl object-cover"
        />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm font-bold">{price}</p>
        </div>
      </div>
    );
};

export default CatalogProductCard;