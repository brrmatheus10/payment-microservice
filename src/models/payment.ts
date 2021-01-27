type Payment = {
  value: string;
  date: string;
  credit_card_data: {
    card_number: string;
    holder: string;
    expiration_date: string;
    security_code: string;
    brand: string;
  };
};
