import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material';
import { PropertyOptionsProps } from './PropertyOptions.types';
import { Form, SwitchWrapper } from './PropertyOptions.styles';

const PropertyOptions: React.FC<PropertyOptionsProps> = (props) => {
  const { propertyOptions, handlePropertyOptions } = props;

  return (
    <FormControl component="fieldset" variant="standard">
      <Typography variant="h6">Property Options</Typography>
      <Form>
        <SwitchWrapper>
          <FormControlLabel
            control={
              <Switch
                checked={propertyOptions.breakfast_included}
                onChange={handlePropertyOptions}
                name="breakfast_included"
              />
            }
            label="Breakfast included"
          />
          <FormControlLabel
            control={
              <Switch
                checked={propertyOptions.free_cancellation}
                onChange={handlePropertyOptions}
                name="free_cancellation"
              />
            }
            label="Free Cancellations"
          />
          <FormControlLabel
            control={
              <Switch
                checked={propertyOptions.wifi}
                onChange={handlePropertyOptions}
                name="wifi"
              />
            }
            label="Wifi"
          />
          <FormControlLabel
            control={
              <Switch
                checked={propertyOptions.featured}
                onChange={handlePropertyOptions}
                name="featured"
              />
            }
            label="Featured Property"
          />
        </SwitchWrapper>
      </Form>
    </FormControl>
  );
};

export default PropertyOptions;
