import { FC } from 'react';
import { Spin } from 'antd';

export const Loader: FC = () => {
  return (
    <div className="flex justify-center mt-12">
      <Spin />
    </div>
  );
};
