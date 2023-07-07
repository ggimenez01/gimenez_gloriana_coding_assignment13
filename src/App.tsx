import React from 'react';
import Button from './Button';
import Card from './Card';
import Dropdown from './Dropdown';
import HeroImage from './HeroImage';
import Img from './Img';
import Label from './Label';

const App = () => (
  // Use the components in your JSX code here
  <div>
    {/* Include the components here */}
    <Button text="Click Me" disabled={false} />
    <Card>
      <h2>Card Title</h2>
      <p>This is the card content.</p>
    </Card>
    <Dropdown
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      onChange={(event) => {
        console.log(event.target.value);
      }}
    />
    <HeroImage src="path/to/heroimage.jpg" alt="Hero Image" />
    <Img src="path/to/image.jpg" alt="Image" />
    <Label text="This is a label" />
  </div>
);
export default App;
