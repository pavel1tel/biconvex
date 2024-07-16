import { createEffect } from "effector";

import { requestRegistration } from "../request";
import { KycSaveRequest } from "../types";

export const uploadKyc = createEffect<KycSaveRequest, any, void>(async (request) => {
  const form = new FormData();
  form.append("action", "KYC_INSERT_NEW_REQUEST");
  form.append("kyc_first_name", request.kyc_first_name);
  form.append("kyc_last_name", request.kyc_last_name);
  form.append("kyc_country", request.kyc_country);
  form.append("kyc_country_code", request.kyc_country_code);
  form.append("kyc_phone", request.kyc_phone);
  form.append("kyc_date_of_birth", request.kyc_date_of_birth);
  form.append("kyc_id_type", request.kyc_id_type);
  form.append("kyc_id_number", request.kyc_id_number);
  form.append("image_selfie", request.image_selfie, request.image_selfie.name);
  form.append("image_document", request.image_document, request.image_document.name);
  form.append("image_document_back", request.image_document_back, request.image_document_back.name);

  return requestRegistration({
    path: "/profile/kyc",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
});

export const getKycInfo = createEffect<void, any, void>(async () => {
  return requestRegistration({
    path: "/api/verification",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
});
