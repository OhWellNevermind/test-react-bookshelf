import clsx from 'clsx';
// import { useEffect, useState } from 'react';

export const AllCategoriesItem = ({
  category,
  setCategory,
  id,
  active,
  setIsActiveIndex,
}) => {
  return (
    <li
      onClick={evt => {
        setIsActiveIndex(id);
        setCategory(evt.currentTarget.textContent);
      }}
      className={clsx(
        ' hover:text-[#4F2EE8] cursor-pointer transition-all text-[16px] leading-[1.33] tracking-[-0.36px]',
        {
          'text-[#4F2EE8] uppercase': active,
        }
      )}
    >
      {category.list_name}
    </li>
  );
};
