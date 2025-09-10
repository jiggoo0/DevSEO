export interface RegistrationPreviewProps {
  registrationNumber: string;
  businessName: string;
  ownerName: string;
  address: {
    houseNumber: string;
    villageNo: string;
    alley: string;
    subDistrict: string;
    district: string;
    province: string;
  };
  issuedDate: string;
  registrarPosition: string;
  registrarName: string;
}

export const RegistrationPreview: (props: RegistrationPreviewProps) => JSX.Element;
