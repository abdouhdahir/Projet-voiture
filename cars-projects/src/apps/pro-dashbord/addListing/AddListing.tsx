import { Form, Button, Tabs } from 'antd';
import Car from './Car';
import Price from './Price';
import Features from './Feature';
import Media from './Media';
import Location from './Location';

const { TabPane } = Tabs;

const AddListing = () => {


  return (
    <div className="p-8 bg-gray-50 min-h-screen ">
      <div className="bg-white p-6 rounded-xl ">
        <h2 className="text-xl font-bold mb-6">Add Listings</h2>

        <Form layout="vertical" >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Car Details" key="1">
              <Car />
            </TabPane>
            <TabPane tab="Price" key="2">
              <Price />
            </TabPane>
            <TabPane tab="Features" key="3">
              <Features />
            </TabPane>
            <TabPane tab="Media" key="4">
              <Media />
            </TabPane>
            <TabPane tab="Location" key="5">
              <Location />
            </TabPane>
          </Tabs>

          <Button type="primary" size="large" className="w-full mt-6" htmlType="submit">
            Submit Listing
          </Button> 	                                                          
        </Form> 	                                                          
      </div>  	                                                          
    </div>  	                                                          
  );  	                                                          
};  	                                                          

export default AddListing;  	                                                          
