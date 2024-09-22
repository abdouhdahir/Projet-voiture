import  { useState } from 'react';
import { Table, Input, Pagination, Button, Select } from 'antd';
import { SearchOutlined, EllipsisOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;
interface CarListing {
  key: string;
  make: string;
  model: string;
  year: string;
  transmission: string;
  fuel: string;
  description: string;
  image: string;
}

const MyListings = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    {
      title: 'Make',
      dataIndex: 'make',
      key: 'make',
      render: (_: string, record: CarListing) => (
        <div className="flex items-center">
          <img src={record.image} alt={record.make} className="w-16 h-16 object-cover mr-2" />
          <div>
            <div className="font-bold">{record.make}</div>
            <div className="text-xs text-gray-400">{record.description}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Transmission',
      dataIndex: 'transmission',
      key: 'transmission',
    },
    {
      title: 'Fuel Type',
      dataIndex: 'fuel',
      key: 'fuel',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div className="flex space-x-3">
          <Button icon={<EditOutlined />} size="small" />
          <Button icon={<DeleteOutlined />} size="small" />
          <Button icon={<EllipsisOutlined />} size="small" />
        </div>
      ),
    },
  ];

  const data: CarListing[] = [
    {
      key: '1',
      make: 'Mercedes-Benz C-Class',
      model: 'C-Class',
      year: '2022',
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: '4Matic 2.0L Inline-4 Premium/Plus',
      image: 'https://via.placeholder.com/100', 
    },
    {
      key: '2',
      make: 'Mercedes-Benz C-Class',
      model: 'C-Class',
      year: '2023',
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: '4Matic 2.0L Inline-4 Premium/Plus',
      image: 'https://via.placeholder.com/100',
    },
    {
      key: '3',
      make: 'Mercedes-Benz C-Class',
      model: 'C-Class',
      year: '2023',
      transmission: 'Automatic',
      fuel: 'Petrol',
      description: '4Matic 2.0L Inline-4 Premium/Plus',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <div className='mx my-10  flex flex-col gap-10'>
         <div className='mx-9'>
         <h2 className="text-xl font-bold">My Listings</h2>
         <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur.</p>
         </div>
        <div className="p-8 min-h-screen">
      <div className="bg-white p-6 rounded-xl border-2 ">
        <div className="flex justify-between items-start mb-4">
        <div className="mb-4 flex justify-between items-center">
          <Input
            placeholder="Search Listing, Audi Q3"
            prefix={<SearchOutlined />}
            className="w-80"
          />
        </div>
          <div className='flex items-center gap-5 select'>
           <p>Sort By</p> 
          <Select defaultValue="Newest" className="w-40 !border-none" >
            <Option value="newest">Newest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
          </div>
        </div>

        

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey="key" 
        />

        <div className="flex flex-col gap-2 justify-center items-center mt-6">
          
          <Pagination
            current={currentPage}
            onChange={page => setCurrentPage(page)}
            total={50}
            pageSize={10}
          />
          <span className='text-gray-600'>Showing results 1 to 3 of 3</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyListings;