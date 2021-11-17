export interface EnquiryType {
  firstname: string;
  lastname: string;
  email: string;
  phone_number: number | string;
  enquiry_specifications: string;
}

export interface EnquiryInputsProps {
  errors: any;
  enquiries: EnquiryType;
  register: any;
  handleEnquiryChange: (
    prop: any
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}
