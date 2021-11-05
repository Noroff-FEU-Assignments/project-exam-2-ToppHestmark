import styled from 'styled-components/macro';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { InputProps } from './PropertyInputs.types';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapper = styled(FormControl)`
  margin: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PropertyInputs: React.FC<InputProps> = (props) => {
  const { errors, property, register, handleChange } = props;

  const doNothing = (e) => e.target.blur();

  return (
    <>
      <GridWrapper>
        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Property name"
            placeholder="Title for the property"
            multiline
            error={errors?.Title ? true : false}
            value={property?.Title}
            helperText={errors?.Title && errors?.Title.message}
            {...register('Title')}
            onChange={handleChange('Title')}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Room Type"
            placeholder="Sea view etc."
            multiline
            error={errors?.room_type ? true : false}
            value={property?.room_type}
            helperText={errors?.room_type && errors?.room_type.message}
            {...register('room_type')}
            onChange={handleChange('room_type')}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Bed Type"
            placeholder="Queensize etc."
            multiline
            error={errors?.bed_type ? true : false}
            value={property?.bed_type}
            helperText={errors?.bed_type && errors?.bed_type.message}
            {...register('bed_type')}
            onChange={handleChange('bed_type')}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="number"
            variant="standard"
            label="Price per night"
            placeholder="US Dollar"
            error={errors?.price_per_night ? true : false}
            value={property?.price_per_night}
            helperText={
              errors?.price_per_night && errors?.price_per_night.message
            }
            {...register('price_per_night')}
            onChange={handleChange('price_per_night')}
            onWheel={doNothing}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Guest Review"
            placeholder="Very Good etc."
            multiline
            error={errors?.guest_review ? true : false}
            value={property?.guest_review}
            helperText={errors?.guest_review && errors?.guest_review.message}
            {...register('guest_review')}
            onChange={handleChange('guest_review')}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Image URL"
            placeholder="With extension .jpeg .jpg .png"
            multiline
            error={errors?.image_01 ? true : false}
            value={property?.image_01}
            helperText={errors?.image_01 && errors?.image_01.message}
            {...register('image_01')}
            onChange={handleChange('image_01')}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="text"
            variant="standard"
            label="Subtitle"
            placeholder="Short description"
            multiline
            error={errors?.subtitle ? true : false}
            value={property?.subtitle}
            helperText={errors?.subtitle && errors?.subtitle.message}
            {...register('subtitle')}
            onChange={handleChange('subtitle')}
          />
        </FormControl>

        <FormControl
          variant="standard"
          error={errors?.property_type ? true : false}
          sx={{ m: 1, width: '30ch' }}
        >
          <InputLabel>Property Type</InputLabel>
          <Select
            value={property?.property_type}
            label="Property Type"
            {...register('property_type')}
            onChange={handleChange('property_type')}
          >
            <MenuItem value="Hotel">Hotel</MenuItem>
            <MenuItem value="Guesthouse">Guesthouse</MenuItem>
            <MenuItem value="Apartment">Apartment</MenuItem>
            <MenuItem value="Holiday">Holiday</MenuItem>
            <MenuItem value="Cabin">Cabin</MenuItem>
          </Select>
          <FormHelperText>
            {' '}
            {errors?.property_type && errors?.property_type.message}{' '}
          </FormHelperText>
        </FormControl>

        <FormControl
          variant="standard"
          error={errors?.neighbourhood ? true : false}
          sx={{ m: 1, width: '30ch' }}
        >
          <InputLabel>Neighbourhood</InputLabel>
          <Select
            value={property?.neighbourhood}
            label="Neighbourhood"
            {...register('neighbourhood')}
            onChange={handleChange('neighbourhood')}
          >
            <MenuItem value="City">City</MenuItem>
            <MenuItem value="Bergenhus">Bergenhus</MenuItem>
            <MenuItem value="Ytrebygda">Ytrebygda</MenuItem>
            <MenuItem value="Fana">Fana</MenuItem>
            <MenuItem value="Paradis">Paradis</MenuItem>
          </Select>
          <FormHelperText>
            {' '}
            {errors?.neighbourhood && errors?.neighbourhood.message}{' '}
          </FormHelperText>
        </FormControl>
      </GridWrapper>
      <DescriptionWrapper
        variant="standard"
        error={errors?.description ? true : false}
        sx={{ m: 1 }}
      >
        <TextField
          label="Description"
          variant="standard"
          placeholder="Describe property"
          multiline
          rows={4}
          fullWidth
          error={errors?.description ? true : false}
          value={property?.description}
          helperText={errors?.description && errors?.description.message}
          {...register('description')}
          onChange={handleChange('description')}
        />
      </DescriptionWrapper>
    </>
  );
};

export default PropertyInputs;
