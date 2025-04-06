import * as Yup from "yup";

const contactMessageValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(50, "Ad ən çox 50 simvoldan ibarət olmalıdır")
    .required("Ad tələb olunur"),
  email: Yup.string()
    .email("Düzgün e-poçt ünvanı daxil edin")
    .required("E-poçt tələb olunur"),
  phone: Yup.string()
    .matches(/^\+?\d{0,15}$/, "Düzgün telefon nömrəsi daxil edin")
    .required("Telefon nömrəsi tələb olunur")
    .min(5, "Nömrəs ən azı 5 simvoldan ibarət olmalıdır"),
  message: Yup.string()
    .min(1, "Mesaj ən azı 5 simvoldan ibarət olmalıdır")
    .max(500, "Mesaj ən çox 500 simvoldan ibarət olmalıdır")
    .required("Mesaj tələb olunur"),
});

export default contactMessageValidationSchema;
