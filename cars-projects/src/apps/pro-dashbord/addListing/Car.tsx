import { Form, Select, InputNumber } from 'antd';

const { Option } = Select;

const Car = () => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold mb-4">Vehicle Details</h3>
      <div className="grid grid-cols-3 gap-4">
        <Form.Item label="Make" name="make">
          <Select placeholder="Select make">
            <Option value="audi">Audi</Option>
            <Option value="bmw">BMW</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Model" name="model">
          <Select placeholder="Select model">
            <Option value="q3">Q3</Option>
            <Option value="x5">X5</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Year" name="year">
          <InputNumber min={2000} max={2024} placeholder="Year" />
        </Form.Item>
        <Form.Item label="Transmission" name="transmission">
          <Select placeholder="Select transmission">
            <Option value="automatic">Automatic</Option>
            <Option value="manual">Manual</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Fuel Type" name="fuel">
          <Select placeholder="Select fuel type">
            <Option value="petrol">Petrol</Option>
            <Option value="diesel">Diesel</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Mileage" name="mileage">
          <InputNumber placeholder="Mileage" />
        </Form.Item>
        <Form.Item label="Color" name="color">
          <Select placeholder="Select color">
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Doors" name="doors">
          <Select placeholder="Select number of doors">
            <Option value="2">2</Option>
            <Option value="4">4</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Drivetrain" name="drivetrain">
          <Select placeholder="Select drivetrain">
            <Option value="awd">AWD</Option>
            <Option value="fwd">FWD</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Body Type" name="bodyType">
          <Select placeholder="Select body type">
            <Option value="sedan">Sedan</Option>
            <Option value="suv">SUV</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Seats" name="seats">
          <Select placeholder="Select seats">
            <Option value="2">2</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Condition" name="condition">
          <Select placeholder="Select condition">
            <Option value="new">New</Option>
            <Option value="used">Used</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Engine Size" name="engineSize">
          <Select placeholder="Select engine size">
            <Option value="2.0">2.0L</Option>
            <Option value="3.0">3.0L</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Previous Owners" name="owners">
          <Select placeholder="Select previous owners">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Warranty" name="warranty">
          <Select placeholder="Select warranty">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default Car;
