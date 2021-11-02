import styled from 'styled-components/macro';
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Select,
  MenuItem,
} from '@mui/material';
import { InputProps } from './PropertyInputs.types';

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const PropertyInputs: React.FC<InputProps> = (props) => {
  const { errors, property, register, handleChange } = props;

  const doNothing = (e) => e.target.blur();

  return (
    <ContainerGrid>
      <FormControl
        error={errors?.Title ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Property name </InputLabel>
        <Input
          type="text"
          value={property?.Title}
          {...register('Title')}
          onChange={handleChange('Title')}
        />
        <FormHelperText>
          {' '}
          {errors?.Title && errors?.Title.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={errors?.room_type ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Room Type </InputLabel>
        <Input
          type="text"
          value={property?.room_type}
          {...register('room_type')}
          onChange={handleChange('room_type')}
        />
        <FormHelperText>
          {' '}
          {errors?.room_type && errors?.room_type.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={errors?.bed_type ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Bed Type </InputLabel>
        <Input
          type="text"
          value={property?.bed_type}
          {...register('bed_type')}
          onChange={handleChange('bed_type')}
        />
        <FormHelperText>
          {' '}
          {errors?.bed_type && errors?.bed_type.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={errors?.price_per_night ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Price per night </InputLabel>
        <Input
          type="number"
          value={property?.price_per_night}
          {...register('price_per_night')}
          onChange={handleChange('price_per_night')}
          onWheel={doNothing}
        />
        <FormHelperText>
          {' '}
          {errors?.price_per_night && errors?.price_per_night.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={errors?.guest_review ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Guest Review </InputLabel>
        <Input
          type="text"
          value={property?.guest_review}
          {...register('guest_review')}
          onChange={handleChange('guest_review')}
        />
        <FormHelperText>
          {' '}
          {errors?.guest_review && errors?.guest_review.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={errors?.image_01 ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Image URL </InputLabel>
        <Input
          type="text"
          value={property?.image_01}
          {...register('image_01')}
          onChange={handleChange('image_01')}
        />
        <FormHelperText>
          {' '}
          {errors?.image_01 && errors?.image_01.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
        error={errors?.subtitle ? true : false}
        sx={{ m: 1, width: '30ch' }}
      >
        <InputLabel> Subtitle </InputLabel>
        <Input
          type="text"
          value={property?.subtitle}
          {...register('subtitle')}
          onChange={handleChange('subtitle')}
        />
        <FormHelperText>
          {' '}
          {errors?.subtitle && errors?.subtitle.message}{' '}
        </FormHelperText>
      </FormControl>

      <FormControl
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
    </ContainerGrid>
  );
};

export default PropertyInputs;
