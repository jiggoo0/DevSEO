export type Address = {
  houseNumber?: string;
  villageNo?: string;
  alley?: string;
  subDistrict?: string;
  district?: string;
  province?: string;
};

export type RegistrationPreviewProps = {
  businessName?: string;
  ownerName?: string;
  registrationNumber?: string;
  address?: Address;
  issuedDate?: string;
  registrarPosition?: string;
  registrarName?: string;
};
