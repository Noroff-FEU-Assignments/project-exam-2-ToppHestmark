import {
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { PropertyOptionsProps } from './PropertyOptions.types';

const PropertyOptions: React.FC<PropertyOptionsProps> = (props) => {
  const { propertyOptions, handlePropertyOptions } = props;

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Property Options</FormLabel>
      <FormGroup>
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
      </FormGroup>
    </FormControl>
  );
};

export default PropertyOptions;
