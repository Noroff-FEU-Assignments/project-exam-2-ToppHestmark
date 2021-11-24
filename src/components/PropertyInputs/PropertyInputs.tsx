import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { InputProps } from './PropertyInputs.types';

import { GridWrapper, InputWrapper } from './PropertyInputs.styles';

const PropertyInputs: React.FC<InputProps> = (props) => {
  const { errors, property, register, handleChange } = props;

  const doNothing = (e) => e.target.blur();

  return (
    <>
      <Typography variant="h6">Specifications</Typography>
      <GridWrapper>
        <InputWrapper>
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
        </InputWrapper>

        <InputWrapper>
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
        </InputWrapper>

        <InputWrapper>
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
        </InputWrapper>

        <InputWrapper>
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
        </InputWrapper>

        <InputWrapper>
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
        </InputWrapper>

        <InputWrapper>
          <TextField
            type="text"
            variant="standard"
            label="Image URL"
            placeholder="jpeg/jpg/png"
            multiline
            error={errors?.image_01 ? true : false}
            value={property?.image_01}
            helperText={errors?.image_01 && 'Invalid image URL'}
            {...register('image_01')}
            onChange={handleChange('image_01')}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            type="text"
            variant="standard"
            label="Image URL 2"
            placeholder="jpeg/jpg/png"
            multiline
            error={errors?.image_02 ? true : false}
            value={property?.image_02}
            helperText={errors?.image_02 && 'Invalid image URL'}
            {...register('image_02')}
            onChange={handleChange('image_02')}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            type="text"
            variant="standard"
            label="Image URL 3"
            placeholder="jpeg/jpg/png"
            multiline
            error={errors?.image_03 ? true : false}
            value={property?.image_03}
            helperText={errors?.image_03 && 'Invalid image URL'}
            {...register('image_03')}
            onChange={handleChange('image_03')}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            type="text"
            variant="standard"
            label="Image URL 4"
            placeholder="jpeg/jpg/png"
            multiline
            error={errors?.image_04 ? true : false}
            value={property?.image_04}
            helperText={errors?.image_04 && 'Invalid image URL'}
            {...register('image_04')}
            onChange={handleChange('image_04')}
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            type="number"
            variant="standard"
            label="Price per night"
            placeholder="US Dollar"
            error={
              errors?.price_per_night || property?.price_per_night < 1
                ? true
                : false
            }
            value={property?.price_per_night}
            helperText={errors?.price_per_night && 'Plese enter a valid price'}
            {...register('price_per_night')}
            onChange={handleChange('price_per_night')}
            onWheel={doNothing}
          />
        </InputWrapper>

        <FormControl
          variant="standard"
          error={errors?.property_type ? true : false}
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
            {errors?.property_type && 'Please select property type'}{' '}
          </FormHelperText>
        </FormControl>

        <FormControl
          variant="standard"
          error={errors?.neighbourhood ? true : false}
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
            {errors?.neighbourhood && 'Please select a neighbourhood'}{' '}
          </FormHelperText>
        </FormControl>
      </GridWrapper>

      <FormControl
        variant="standard"
        error={errors?.description ? true : false}
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
      </FormControl>
    </>
  );
};

export default PropertyInputs;
